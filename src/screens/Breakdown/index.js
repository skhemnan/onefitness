import React from 'react'
import useConnect from './connect'

// Components
import { View, Background } from '../../style';
import Ribbon from '../../components/Ribbon';
import BreakdownSummary from '../../components/BreakdownSummary';
import BreakdownStats from '../../components/BreakdownStats';
import BreakdownDisclaimer from '../../components/BreakdownDisclaimer';
import moment from 'moment';

 
const Breakdown = ({route}) => {

	let startDate = moment()
									.subtract(route?.params?.summary?.week, 'weeks')
									.startOf('week')
									.add(route?.params?.summary?.workoutDay, 'days')
									.format('dddd, MMMM DD YYYY')

	return(
		<Background>
			<View col>
				<Ribbon week={route?.params?.summary?.week}/>
				<BreakdownSummary data={route?.params?.summary}/>
				<BreakdownStats data={route?.params?.stats}/>
				<BreakdownDisclaimer date={startDate} progress={route?.params?.summary?.progression}/>
			</View>
		</Background>
	)
}

export default Breakdown
