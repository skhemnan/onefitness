import React from 'react';
import { SVG_ICONS } from '../../assets/icons/svg';
import { View, Text, Card } from '../../style';
import styles from './styles';

const SummaryCard = ({item}) => {

	const navParams = {
		summary: item.summary,
		stats: item.stats,
		programStartDate: item.programStartDate
	}

	return (
			<Card action button='mark as completed' onButton={() => {console.log('complete')}} onPress={() => item.navigate('Breakdown', navParams)}>
				<View col style={styles.todaysWorkout}>
					<View row style={styles.todayRingRow}>
						<View style={styles.todayInfo}>
							<Text h4>{item.summary.workout}</Text>
							<Text h1>{`${item.stats.workingWeight}lb`}</Text>
							<Text subh>{`${item.stats.splitWeight}lb per side`}</Text>
							<Text h4 style={styles.todaySets}>{`${item.stats.sets} sets of ${item.stats.reps} reps`}</Text>
						</View>
						<View center style={styles.todayRing}>
							{SVG_ICONS(110,110).rings[item.summary.ring]}
							<Text h5 style={styles.todayProgressPercentage}>{`${item.summary.progression * 100}% to 1RM`}</Text>
						</View>
					</View>
				</View>
			</Card>
	)
}

export default SummaryCard