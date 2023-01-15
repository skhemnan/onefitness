import React from 'react'
import { View, Text, colors } from '../../style';
import styles from './styles'

export default BreakdownStats = ({data}) => {
	return (
		<>
			<View row style={styles.statsRow}>
				<View style={styles.statsCol}>
					<Text h5>{data.workingWeight > 0 ? 'WORKING WEIGHT' : 'ASSISTED WEIGHT'}</Text>
					<Text h1 color={colors.yellow}>{`${data.workingWeight < 0 ? data.workingWeight * -1 : data.workingWeight}lb`}</Text>
				</View>
				<View style={styles.statsCol}>
					<Text h5>REP RANGE</Text>
					<Text h1 color={colors.yellow}>{data.sets}
					<Text h5 color={colors.yellow}>sets</Text>{data.reps}<Text h5 color={colors.yellow}>reps</Text></Text>
				</View>
			</View>
			<View>
				<Text h5 style={styles.weightSplit}>{data.splitWeight ? 'WEIGHT SPLIT' : 'ADDED WEIGHT'}</Text>
				<Text h1 color={colors.yellow} style={styles.weightSplit}>{`${data.splitWeight ? data.splitWeight : data.addedWeight}lb`}{" "}
				<Text subh>{data.splitWeight ? 'on each side' : 'plus body weight'}</Text>
				</Text>
			</View>	
		</>

	)
}
