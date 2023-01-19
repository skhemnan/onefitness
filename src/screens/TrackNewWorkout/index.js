import React, {useRef, useEffect, useState} from 'react';
import { View, colors, Button } from '../../style'
import styles from './styles'

const TrackNewWorkout = ({navigation}) => {

	return (
		<View bg color={colors.darkGrey} style={styles.background}>
			<View row color={colors.darkGrey} style={styles.header}>
				<Button body onPress={() => navigation.goBack()} text="Cancel" textStyle={styles.headerText}/>
			</View>
			<Button confirm text="OK" style={styles.button} onPress={() => navigation.goBack()}/>
		</View>
	)
}

export default TrackNewWorkout