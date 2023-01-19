export const WORKOUT_REDUCER_CASES = {
	setExercises: 'setExercises',
	setWorkouts: 'setWorkouts',
	setBodyWeight: 'setBodyWeight',
}

const initialState = {
	exercises: [],
	workouts: {
		'0XF0LFX2gXunVk2ctTZi': {
			bodyWeight: false,
			name: 'SQUAT',
			type: 'period'
		},
		'JDGZB1SmYW6j73x2tAiG': {
			bodyWeight: false,
			name: 'BENCH PRESS',
			type: 'period'
		},
		'kRrYdGp5JqEsF0vI7qEH': {
			bodyWeight: false,
			name: 'PULL-UP',
			type: 'period'
		}
	},
	bodyWeight: 157
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