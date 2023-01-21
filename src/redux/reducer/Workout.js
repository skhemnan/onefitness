export const WORKOUT_REDUCER_CASES = {
	setExercises: 'setExercises',
	setWorkouts: 'setWorkouts',
	setBodyWeight: 'setBodyWeight',
}

const initialState = {
	exercises: [],
	workouts: {},
	bodyWeight: null
}

export default (state = initialState, action) => {
	switch(action?.type){
		case WORKOUT_REDUCER_CASES.setExercises:
			return {...state, exercises: action.payload}
		case WORKOUT_REDUCER_CASES.setWorkouts:
			return {...state, workouts: action.payload}
		case WORKOUT_REDUCER_CASES.setBodyWeight:
			return {...state, bodyWeight: action.payload}
		default:
			return state
	}
}