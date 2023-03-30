import React, {useRef, useEffect, useState} from 'react';
import { View, colors, Button, Text } from '../../style'
import styles from './styles'
import {Slider} from '@miblanchard/react-native-slider'
import { Animated } from 'react-native';

const WorkoutSlider = ({sliderChoice, setSliderChoice}) => {

	let choices = [ "I haven't done it.", "I've done it before.", "I'm very used to it." ]
	let textAnim = useRef(new Animated.Value(0)).current

	const translateX = textAnim.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [-5, 0, 5],
  });

	const animateText = () => {
		Animated.sequence([
      Animated.timing(textAnim, {
        toValue: 1,
        duration: 50,
        useNativeDriver: true,
      }),
      Animated.spring(textAnim, {
        toValue: 0,
        duration: 50,
        useNativeDriver: true,
				bounciness: 20
      }),
    ]).start();	
	}

	return (
		<>
			<View style={styles.end}/>
			<Slider
				thumbStyle={styles.thumb}	
				containerStyle={styles.sliderContainer}
				minimumTrackTintColor={colors.green}
				maximumTrackTintColor={colors.green}
				thumbTintColor={colors.yellow}
				animateTransitions={true}
				animationType={'spring'}
				minimumValue={0}
				maximumValue={2}
				step={1}
				value={sliderChoice}
				trackMarks={[0, 1.1]}
				onValueChange={x => {
					animateText()
					setSliderChoice(x)
				}}
				renderTrackMarkComponent={() => <View style={styles.trackmark}/>}
				renderAboveThumbComponent={() => {
					return (
						<Animated.View style={[styles.aboveContainer, {transform: [{translateX}]}]}>
							<Text style={styles.aboveSlider}>{choices[sliderChoice]}</Text>
						</Animated.View>
					)
			}}
			/>	
		</>
	)
}

export default WorkoutSlider
