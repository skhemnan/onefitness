import 'react-native-get-random-values';
import {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import firestore from '@react-native-firebase/firestore'
import { v4 as uuidv4 } from 'uuid';
import {setExercises} from '../../redux/action/Workout'
import { Alert } from 'react-native';


export default useConnect = ({navigation, toScreenTwo, toScreenThree, toScreenFour}) => {
	const dispatch = useDispatch()
	const {workouts, bodyWeight, exercises} = useSelector(state => state.Workout)
	const uid = useSelector(state => state.Auth.user.uid)

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

	const handleStepOne = (workout) => {
		console.log('HANDLE STEP ONE')
		const newData = {
			...data,
			wId: workout[0],
			workoutName: workout[1].name,
			startingWeights: workout[1].startingWeights
		}
		// setData(newData)
		// toScreenTwo()


		// Check if workout already exists
		let hasWorkout = exercises.findIndex(x => x.wId == newData.wId)
		if(hasWorkout != -1){
			console.log('ALREADY EXISTS')
			Alert.alert('Whoops!', "You are already tracking that workout! Either delete it or add another workout", [
				{ text: 'OK', style: 'OK' }
			])
		} else {
			setData(newData)
			toScreenTwo()
		}
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

	const addWorkout = async () => {
		// Check if workoutID already exists, throw error
		let sendData = {
			id: data.id,
			max: data.max,
			nextWorkoutDate: data.nextWorkoutDate,
			progress: data.progress,
			wId: data.wId
		}
		console.log('THE DATA IS', sendData)
		// Add Locally
		let newExercises = [...exercises, sendData]
		dispatch(setExercises(newExercises))
		// Add on firebase
		await firestore().collection('users').doc(uid).update({exercises: newExercises})

		// Go back
		navigation.goBack()
	}

	return { 
		addWorkout, 
		workouts,
		sliderChoice,
		setSliderChoice,
		sliderChoice,
		counter,
		setCounter,
		data,
		handleStepOne,
		handleStepThree
	}
}