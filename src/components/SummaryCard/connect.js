import { useNavigation } from '@react-navigation/native';
import { PROGRESSION_DATA } from '../../global';
import {store} from '../../redux/store'
import firestore from '@react-native-firebase/firestore'
import moment from 'moment';
import { setExercises } from '../../redux/action/Workout';


export const useConnect = ({item}) => {

	const navigation = useNavigation()
	const navParams = {
		id: item.id,
		summary: item.summary,
		stats: item.stats,
	}

	const breakDown = () => {
		navigation.navigate('Breakdown', navParams)
	}

	const markComplete = async () => {
		let curIndex = Object.keys(PROGRESSION_DATA).indexOf(`${navParams.summary.progression}`)
		let nextProgress = Object.keys(PROGRESSION_DATA)[curIndex + 1]
		let exercises = await store.getState().Workout.exercises
		console.log('EXERCISES', exercises)
		let found = exercises.findIndex(x => x.id == navParams.id)
		let newDate = moment(exercises[found].nextWorkoutDate.toDate()).add(7, 'days')

		let updatedExercise = {
			...exercises[found],
			progress: nextProgress,
			nextWorkoutDate: firestore.Timestamp.fromDate(new Date(newDate))
		}

		let newExercises = exercises.filter(x => x.id != exercises[found].id)
		newExercises.push(updatedExercise)

		// Send updated exercise to firebase and update on redux	
		await store.dispatch(setExercises(newExercises))
		// await firestore().collection('users').doc(uid).update({exercises: newExercises})

		// console.log('CHANGING EXERCISE', exercises[found])
		// console.log('TO', updatedExercise)

	}
	return {markComplete, breakDown}
}