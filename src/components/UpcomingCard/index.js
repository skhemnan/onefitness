import React from 'react';
import { SVG_ICONS } from '../../assets/icons/svg';

// Style
import { View, Text, Card } from '../../style';
import styles from './styles';

const UpcomingCard = ({item}) => {

	const navParams = {
		summary: item.summary,
		stats: item.stats,
		programStartDate: item.programStartDate
	}
	return (
			<Card actionS day={item.summary.day} onPress={() => item.navigate('Breakdown', navParams)}>
				<View row style={styles.upcomingRow}>
					<View center style={styles.upcomingRing}>{SVG_ICONS(75,75).rings[item.summary.ring]}</View>
					<View style={styles.upcomingInfo}>
							<View row style={styles.upcomingInfoRow}>
								<Text h4>{item.summary.workout}</Text>
								<Text h5>{`${item.summary.progression * 100}% to 1RM`}</Text>
							</View>
							<Text h2>{`${item.stats.workingWeight}lb`}</Text>
							<Text h4>{`${item.stats.sets} sets of ${item.stats.reps} reps`}</Text>
					</View>
				</View>
			</Card>
	)
}

export default UpcomingCard

