import moment from 'moment'
import { useSelector } from 'react-redux'

export const useConnect = () => {
	const exercises = useSelector(state => state.Workout.exercises)
	const workoutDays = exercises.map(x => moment(x.nextWorkoutDate.toDate()).day())
	const today = moment().day()

	return {workoutDays, today}
}