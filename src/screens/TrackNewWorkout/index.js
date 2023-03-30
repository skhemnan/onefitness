import 'react-native-get-random-values';
import React, {useState, useRef, useEffect} from 'react';
import {Animated, Dimensions} from 'react-native'
const {width: screenWidth} = Dimensions.get('window')
import { useSelector } from 'react-redux';
import { View, colors, Button, Text } from '../../style'
import styles from './styles'
import moment from 'moment';
import firestore from '@react-native-firebase/firestore'
import { v4 as uuidv4 } from 'uuid';

// Components
import WorkoutSlider from '../../components/WorkoutSlider';
import WorkoutCounter from '../../components/WorkoutCounter';

const TrackNewWorkout = ({navigation}) => {

	const {workouts, bodyWeight} = useSelector(state => state.Workout)

	const [sliderChoice, setSliderChoice] = useState(1)
	const [counter, setCounter] = useState(1)
	const [data, setData] = useState({
		id: uuidv4(), // new uuid,
		max: 0,
		nextWorkoutDate: firestore.Timestamp.fromDate(moment().add(1, 'week').toDate()),
		progress: 0.5,
		wId: '', // workout ID
		workoutName: '',
		startingWeights: {}
	})

	// Animations
	screenOneTranslate = useRef(new Animated.Value(0)).current
	screenTwoTranslate = useRef(new Animated.Value(screenWidth)).current
	screenThreeTranslate = useRef(new Animated.Value(screenWidth)).current
	screenFourTranslate = useRef(new Animated.Value(screenWidth)).current
	
	const moveScreenOne = (val) => Animated.spring(screenOneTranslate, {toValue: val, useNativeDriver: true, duration: 200}).start()
	const moveScreenTwo = (val) => Animated.spring(screenTwoTranslate, {toValue: val, useNativeDriver: true, duration: 200}).start()
	const moveScreenThree = (val) => Animated.spring(screenThreeTranslate, {toValue: val, useNativeDriver: true, duration: 200}).start()
	const moveScreenFour = (val) => Animated.spring(screenFourTranslate, {toValue: val, useNativeDriver: true, duration: 200}).start()

	const toScreenTwo = () => {
			moveScreenOne(-screenWidth)
			moveScreenTwo(0)	
	}

	const toScreenThree = () => {
		moveScreenTwo(-screenWidth)
		moveScreenThree(0)
	}

	const toScreenFour = () => {
		moveScreenThree(-screenWidth)
		moveScreenFour(0)
	}

	const handleStepOne = (workout) => {
		const newData = {
			...data,
			wId: workout[0],
			workoutName: workout[1].name,
			startingWeights: workout[1].startingWeights
		}
		setData(newData)
		toScreenTwo()
	}

	const handleStepThree = () => {
		let testWeight = data.startingWeights[`${sliderChoice}`]
		let maxWeight = 0
		console.log('BODY WEIGHT', bodyWeight)
		if(data.wId == 'kRrYdGp5JqEsF0vI7qEH'){
			maxWeight = Math.ceil(2.5 * Math.ceil(((((bodyWeight + testWeight)*counter)*0.0333) + bodyWeight)/2.5))
		} else {
			maxWeight = 5 * Math.ceil((((testWeight * counter) * 0.0333) + testWeight)/5)
		}

		const newData = {
			...data,
			max: maxWeight	
		}

		setData(newData)
		toScreenFour()
	}

	return (
		<View bg color={colors.darkGrey} style={styles.background}>
			{/* Header */}
			<View row color={colors.darkGrey} style={styles.header}>
				<Button body onPress={() => navigation.goBack()} text="Cancel" textStyle={styles.headerText} keyExtractor={({item, index}) => index}/>
			</View>
				{/* Screen 1 */}
				<Animated.View column style={[styles.container, {transform: [{translateX: screenOneTranslate}]}]}>
					<Text h1 style={styles.heading}>Lets make this quick.</Text>
					<Text h3>Choose a workout:</Text>
					{Object.entries(workouts).map(x => {
						return <Button confirm text={x[1].name} style={styles.button} onPress={() => handleStepOne(x)}/>
					})}
				</Animated.View>

				{/* Screen 2 */}
				<Animated.View column style={[styles.container, {transform: [{translateX: screenTwoTranslate}]}]}>
					<Text h1 style={styles.heading}>Describe your experience with {" "}
						<Text h1 style={[styles.heading, {textDecorationLine: 'underline', textTransform: 'lowercase'}]}>{`${data.workoutName ?? ''}.`}</Text>
					</Text>
					<WorkoutSlider sliderChoice={sliderChoice} setSliderChoice={setSliderChoice}/>
					<Button 
						confirm 
						text="ok" 
						style={[styles.button, {marginTop: '20%', width: '50%', alignSelf: 'center'}]}
						onPress={() => toScreenThree()}
					/>
				</Animated.View>

				{/* Screen 3 */}
				<Animated.View column style={[styles.container, {transform: [{translateX: screenThreeTranslate}]}]}>
					<Text h1 style={[styles.heading, {marginTop: -5, marginBottom: '9%'}]}>Based on your selection, we think you should test {" "}
						<Text h1 style={[styles.heading, {textDecorationLine: 'underline'}]}>
							{`${data.startingWeights[`${sliderChoice}`] != 0 ? data.startingWeights[`${sliderChoice}`] : 'your body weight.'}${data.wId == 'kRrYdGp5JqEsF0vI7qEH' ? (data.startingWeights[sliderChoice] != 0 ? 'lb assistance.' : '') : 'lb.'}`}
						</Text>
					</Text>
					<Text h3 style={styles.subheading}>enter the # of reps you can lift</Text>
					<WorkoutCounter counter={counter} setCounter={setCounter}/>
					<Button confirm text="done" style={styles.button} onPress={handleStepThree}/>
				</Animated.View>

				{/* Screen 4 */}
				<Animated.View column style={[styles.container, {transform: [{translateX: screenFourTranslate}]}]}>
					<Text h1 style={[styles.heading, {marginBottom: '5%'}]}>Great work! your new one rep max is {data.max}lb!</Text>
					<Text h4 style={[styles.subheading, {marginBottom: '35%'}]}>We'll design a new program for you to follow.</Text>
					<Button confirm text="lets go!" style={styles.button} onPress={() => navigation.goBack()}/>
				</Animated.View>
		</View>
	)
}

export default TrackNewWorkout