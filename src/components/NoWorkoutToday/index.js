import React from 'react'
import { Card, View, Text } from '../../style'
import LottieView from 'lottie-react-native'
import styles from './styles'
import { useConnect } from './connect'


export default NoWorkoutToday = () => {	

	const {workoutDays, today} = useConnect()

	return (
		<Card info>
			<View center>
				<View style={!workoutDays.includes(today) ? styles.lottie : styles.lottieSmall}>
					<LottieView 
						useNativeDriver 
						source={ !workoutDays.includes(today) ? 
							require(`../../assets/lottie/cloud.json`) :
							require(`../../assets/lottie/muscle.json`)
						} 
						loop={false}
						autoPlay
					/>
				</View>	
				<Text subh>{!workoutDays.includes(today) ? 'No workouts today.' : "Well Done!"}</Text>
				<Text h4 style={{textAlign: 'center'}}>{!workoutDays.includes(today) ? 'Enjoy the rest day.' : "You've completed all your workouts for today!"}</Text>
			</View>
		</Card>
	)
}