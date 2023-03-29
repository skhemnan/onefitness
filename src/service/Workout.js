import firestore from '@react-native-firebase/firestore'

/* Redux */
import {store} from '../redux/store'
import { batch } from 'react-redux'
import {setExercises, setWorkouts, setBodyWeight} from '../redux/action/Workout'
import moment from 'moment'

export const getWorkoutData = async () => {
	try {
		let workoutObj = {}
		const uid = store.getState().Auth.user.uid
		let userData = await firestore().collection('users').doc(uid).get()
		let workoutData = await firestore().collection('workouts').get()
		workoutData.forEach(doc => {
			workoutObj[doc.id] = doc.data()
		})
		
		batch(() => {
			store.dispatch(setExercises(userData?.data().exercises))
			store.dispatch(setBodyWeight(userData?.data()?.bodyWeight))
			store.dispatch(setWorkouts(workoutObj))
		})

		return {
			workouts: workoutObj,
			exercises: userData?.data().exercises
		}

	} catch (error) {
		console.log('GETTING EXERCISES ERROR', error?.message, error)	
	}
}