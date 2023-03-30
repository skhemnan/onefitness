import React, {useState} from 'react';
import { View, colors, Button, Text } from '../../style'
import styles from './styles'

const WorkoutCounter = ({counter, setCounter}) => {
	return (
		<View row center style={styles.counterContainer}>
			<Button actionS text="-" textStyle={styles.counterText} onPress={() => setCounter(counter - 1)} disabled={counter == 1} style={{opacity: counter == 1 ? 0.5 : 1}}/>
			<Text h1 style={styles.counterValue}>{counter}</Text>
			<Button actionS text="+" textStyle={styles.counterText} onPress={() => setCounter(counter + 1)}/>
		</View>
	)
}

export default WorkoutCounter
