import React from 'react'
import useConnect from './connect'
import { useNavigation } from '@react-navigation/native';


// Components
import { View, Background } from '../../style';
import Ribbon from '../../components/Ribbon';
import BreakdownSummary from '../../components/BreakdownSummary';
import BreakdownStats from '../../components/BreakdownStats';
import BreakdownDisclaimer from '../../components/BreakdownDisclaimer';
 
const Breakdown = ({route}) => {

	const navigation = useNavigation()
	const {startDate, currentNum, setCurrentNum, data, handleAlert} = useConnect({route, navigation})

	onEditMax = () => {navigation.navigate('EditMax', {data: data})}

	return(
		<Background>
			<View col>
				<Ribbon currentNum={currentNum} setCurrentNum={setCurrentNum}/>
				<BreakdownSummary data={data.summary} onEditMax={onEditMax}/>
				<BreakdownStats data={data.stats}/>
				<BreakdownDisclaimer date={startDate} progress={route?.params?.summary?.progression} handlePress={handleAlert}/>
			</View>
		</Background>
	)
}

export default Breakdown
