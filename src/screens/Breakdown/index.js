import React from 'react'
import useConnect from './connect'

// Components
import { View, Background } from '../../style';
import Ribbon from '../../components/Ribbon';
import BreakdownSummary from '../../components/BreakdownSummary';
import BreakdownStats from '../../components/BreakdownStats';
import BreakdownDisclaimer from '../../components/BreakdownDisclaimer';

 
const Breakdown = ({route}) => {

	return(
		<Background>
			<View col>
				<Ribbon week={route?.params?.summary?.week}/>
				<BreakdownSummary data={route?.params?.summary}/>
				<BreakdownStats data={route?.params?.stats}/>
				<BreakdownDisclaimer date={route?.params?.programStartDate} progress={route?.params?.summary?.progression}/>
			</View>
		</Background>
	)
}

export default Breakdown
