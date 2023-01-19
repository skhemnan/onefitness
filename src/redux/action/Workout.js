import { WORKOUT_REDUCER_CASES } from "../reducer/Workout";

export const setExercises = data => ({
	type: WORKOUT_REDUCER_CASES.setExercises,
	payload: data
})

export const setWorkouts = data => ({
	type: WORKOUT_REDUCER_CASES.setWorkouts,
	payload: data
})

export const setBodyWeight = data => ({
	type: WORKOUT_REDUCER_CASES.setBodyWeight,
	payload: data
})