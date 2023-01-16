import React, {useRef, useEffect} from 'react';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { useIsFocused } from '@react-navigation/native';
import { SVG_ICONS } from '../../assets/icons/svg';
import { View, Text, Card, colors } from '../../style';
import DynamicRing from '../DynamicRing';
import styles from './styles';
import { Easing } from 'react-native';

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
							<DynamicRing value={item.summary.progression * 100} size={110}/>
							<Text h5 style={styles.todayProgressPercentage}>{`${item.summary.progression * 100}% to 1RM`}</Text>
						</View>
					</View>
				</View>
			</Card>
	)
}

export default SummaryCard