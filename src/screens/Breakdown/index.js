import React from 'react'
import Background from '../../components/Background';
import Card from '../../components/Card';
import { View, Text, Button, colors } from '../../style';
import { SVG_ICONS } from '../../constants';
import Ribbon from '../../components/Ribbon';
import styles from './styles'
import { disclaimer } from './constants';

const Breakdown = () => {
	return(
		<Background>
			<View col>
				{/* Ribbon */}
				<View row style={styles.ribbonView}>
					<Ribbon/>
				</View>

				{/* Summary Card */}
				<Text sh>WEEK 4</Text>
				<Card info style={styles.summaryCard}>
					<View col style={styles.summaryView}>
						<View row style={styles.summaryRingRow}>
							<View center style={styles.summaryRing}>{SVG_ICONS(120,120).rings.ring675}</View>
							<View style={styles.summaryInfo}>
								<Text h2>67.5%</Text>
								<Text h5>to max weight:</Text>
								<Text h1>160lb</Text>
							</View>
						</View>
						<View row style={styles.summaryButtonRow}>
							<Text h4 style={styles.summaryWorkout}>BENCH PRESS</Text>
							<Button actionS text="edit max" style={styles.editMaxButton}/>
						</View>
					</View>
				</Card>

				{/* Stats */}
				<View row style={styles.statsRow}>
					<View style={styles.statsCol}>
						<Text h5>WORKING WEIGHT</Text>
						<Text h1 color={colors.yellow}>108lb</Text>
					</View>
					<View style={styles.statsCol}>
						<Text h5>REP RANGE</Text>
						<Text h1 color={colors.yellow}>5
						<Text h5 color={colors.yellow}>sets</Text>5<Text h5 color={colors.yellow}>reps</Text></Text>
					</View>
				</View>
				<View>
					<Text h5 style={styles.weightSplit}>WEIGHT SPLIT</Text>
					<Text h1 color={colors.yellow} style={styles.weightSplit}>31.5lb{" "}
					<Text subh>on each side.</Text>
					</Text>
				</View>

				{/* Disclaimer */}
				<Text body style={styles.disclaimer} color={colors.grey}>
					{disclaimer('December 12th, 2022')}
				</Text>
			</View>
		</Background>
	)
}

export default Breakdown
