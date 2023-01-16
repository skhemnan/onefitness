import React, {useRef, useEffect, useState} from 'react';
import { Animated } from 'react-native';

import LottieView from 'lottie-react-native'

import { View, colors, Text, Button } from '../../style'
import styles from './styles'
import { explanation } from './constants';

const LearnScreen = ({navigation}) => {

	const [progress] = useState(new Animated.Value(0))
	useEffect(() => {cycleAnimation()}, [])

	const squatRef = useRef(new Animated.Value(0))
	const cycleAnimation = () => {
		Animated.loop(
			Animated.sequence([
				Animated.timing(progress, {
					toValue: 1, 
					duration: 3000,
					useNativeDriver: true
				})
			]),
		).start(() => {
			cycleAnimation()
		})
	}

	return (
		<View bg color={colors.darkGrey} style={styles.background}>
			<View style={styles.lottieContainer}>
				<LottieView 
					useNativeDriver 
					ref={squatRef} 
					source={require('../../assets/lottie/squat.json')} 
					progress={progress}
					loop
				/>
			</View>
			<Text body style={styles.explanation}>{explanation}</Text>
			<Button confirm text="OK" style={styles.button} onPress={() => navigation.goBack()}/>
		</View>
	)
}

export default LearnScreen