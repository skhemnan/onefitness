import { useState } from 'react';
import { Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { setExercises } from '../../redux/action/Workout';
import firestore from '@react-native-firebase/firestore'
import moment from 'moment';


export default useConnect = ({route, navigation}) => {
	const dispatch = useDispatch()

	const [currentMax, setCurrentMax] = useState()
	const {exercises, workouts} = useSelector(state => state.Workout)
	const uid = useSelector(state => state.Auth.user.uid)


	const handleConfirm = () => {
		Alert.alert('Are you sure you want to continue?', 'You will restart your program at 50% of the new max', [
			{ text: 'No', style: 'cancel' }, { text: 'Yes', onPress: handleUpdate}
		])
	}

	const handleUpdate = async () => {
		try {
		// Update on Redux
		let foundWorkout = Object.entries(workouts).findIndex(key => key[1].name == route?.params?.data?.summary?.workout)

		let newExercises = exercises.map(x => {
			if(x.wId == Object.entries(workouts)[foundWorkout][0]){
				x.max = currentMax,
				x.progress = 0.5
				let workoutDate = moment(x.nextWorkoutDate.toDate()).day()
				let nextWeek = moment().add(1, 'week').isoWeekday(workoutDate)
				console.log('nextWeek', x.nextWorkoutDate.toDate(), workoutDate, nextWeek)
				x.nextWorkoutDate = firestore.Timestamp.fromDate(moment(nextWeek).toDate())
				return x
			} else {
				return x
			}
		})

		dispatch(setExercises(newExercises))

		// Update on Firebase
		await firestore().collection('users').doc(uid).update({exercises: newExercises})

		//Navigate back
		navigation.navigate('Breakdown', {
			...route?.params?.data,
			summary: {
				...route?.params?.data?.summary, 
				maxWeight: currentMax,
				week: 0
			}
		})		
		} catch (error) {
			console.log('ERROR UPDATING', error)	
		}
	}

	return {handleConfirm, setCurrentMax}

}