import React from 'react'
import useConnect from './connect'

// Components
import { View, Background } from '../../style';
import Ribbon from '../../components/Ribbon';
import BreakdownSummary from '../../components/BreakdownSummary';
import BreakdownStats from '../../components/BreakdownStats';
import BreakdownDisclaimer from '../../components/BreakdownDisclaimer';
 
const Breakdown = ({route}) => {

	const {startDate, currentNum, setCurrentNum, data} = useConnect({route})
	return(
		<Background>
			<View col>
				<Ribbon currentNum={currentNum} setCurrentNum={setCurrentNum}/>
				<BreakdownSummary data={data.summary}/>
				<BreakdownStats data={data.stats}/>
				<BreakdownDisclaimer date={startDate} progress={route?.params?.summary?.progression}/>
			</View>
		</Background>
	)
}

export default Breakdown
