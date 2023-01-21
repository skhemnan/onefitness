export const AUTH_REDUCER_CASES = {
	setUser: "setUser",
	setNewUser: "setNewUser",
	logout: "logout"
}

const initialState = {
	isNewUser: false,
	user: {}
}

export default (state = initialState, action) => {
	switch(action?.type){
		case AUTH_REDUCER_CASES.setUser:
			return {...state, user: action.payload}
		case AUTH_REDUCER_CASES.setNewUser:
			return {...state, isNewUser: action.payload}
		case AUTH_REDUCER_CASES.logout:
			return {...state, isNewUser: false, user: {}}
		default:
			return state
	}
}