import React from 'react';
import { View, Text, Card } from '../../style';
import DynamicRing from '../DynamicRing';
import styles from './styles';
import { useConnect } from './connect';

const SummaryCard = ({item}) => {
	const {markComplete, breakDown} = useConnect({item})

	return (
			<Card action button='mark as completed' onButton={markComplete} onPress={breakDown}>
				<View col style={styles.todaysWorkout}>
					<View row style={styles.todayRingRow}>
						<View style={styles.todayInfo}>
							<Text h4>{item.summary.workout}</Text>
							<Text h1>{`${item.stats.workingWeight}lb`}</Text>
							{item.stats.splitWeight ? 
								<Text subh>{`${item.stats.splitWeight}lb per side`}</Text>
								:
								<Text subh>{`${item.stats.addedWeight * -1}lb assisted`}</Text>
							}
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