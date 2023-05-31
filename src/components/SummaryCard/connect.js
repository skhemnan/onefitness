import { useNavigation } from '@react-navigation/native';
import { PROGRESSION_DATA } from '../../global';
import {store} from '../../redux/store'
import firestore from '@react-native-firebase/firestore'
import moment from 'moment';
import { setExercises } from '../../redux/action/Workout';
import { useSelector } from 'react-redux';
import { Alert } from 'react-native';


export const useConnect = ({item}) => {

	const uid = useSelector(state => state.Auth.user.uid)

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
		try {
			// If max has been reached
			if(navParams.summary.progression == 1){
				Alert.alert('Congratulations!', "You've hit your max weight! Your new max will go up by 5lbs.", [
					{ text: 'Awesome!', style: 'OK' }
				])
			}

				let curIndex = Object.keys(PROGRESSION_DATA).indexOf(`${navParams.summary.progression}`)
				let nextProgress = Object.keys(PROGRESSION_DATA)[curIndex + 1]
				let exercises = await store.getState().Workout.exercises
				let found = exercises.findIndex(x => x.id == navParams.id)
				let dateNum = moment(exercises[found].nextWorkoutDate).day()
				let newDate = moment().add(1, 'week').isoWeekday(dateNum)
				let newMax = navParams.summary.progression == 1 ? parseInt(exercises[found].max) + 5 : parseInt(exercises[found].max)

				let updatedExercise = {
					...exercises[found],
					progress: nextProgress,
					nextWorkoutDate: firestore.Timestamp.fromDate(moment(newDate).toDate()),
					max: newMax.toString()
				}

				let newExercises = exercises.filter(x => x.id != exercises[found].id)
				newExercises.push(updatedExercise)

				// Send updated exercise to firebase and update on redux	
				await store.dispatch(setExercises(newExercises))
				await firestore().collection('users').doc(uid).update({exercises: newExercises})

				// console.log('CHANGING EXERCISE', exercises[found])
				// console.log('TO', updatedExercise)	
		} catch (error) {
			console.log('MARK COMPLETE ERROR', error, error?.message)	
		}

	}
	return {markComplete, breakDown}
}