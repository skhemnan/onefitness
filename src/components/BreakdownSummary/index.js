import React from 'react'
import { SVG_ICONS } from '../../assets/icons/svg';
import { View, Text, Button, Card } from '../../style';
import styles from './styles'

export default BreakdownSummary = ({data}) => {
	return (
		<>
			<Text sh>{`WEEK ${data.week}`}</Text>
			<Card info style={styles.summaryCard}>
				<View col style={styles.summaryView}>
					<View row style={styles.summaryRingRow}>
						<View center style={styles.summaryRing}>{SVG_ICONS(125,125).rings[data.ring]}</View>
						<View style={styles.summaryInfo}>
							<Text h2 style={styles.summaryInfoText}>{`${data.progression * 100}%`}</Text>
							<Text h5 style={styles.summaryInfoText}>to max weight:</Text>
							<Text h1 style={styles.summaryInfoText}>{`${data.maxWeight}lb`}</Text>
						</View>
					</View>
					<View row style={styles.summaryButtonRow}>
						<Text h3 bold style={styles.summaryWorkout}>{data.workout}</Text>
						<Button actionS text="edit max" style={styles.editMaxButton}/>
					</View>
				</View>
			</Card>
		</>
	)
}
