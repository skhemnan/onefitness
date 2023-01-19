import { AUTH_REDUCER_CASES } from "../reducer/Auth";

export const setUser = data => ({
	type: AUTH_REDUCER_CASES.setUser,
	payload: data
})

export const setNewUser = data => ({
	type: AUTH_REDUCER_CASES.setNewUser,
	payload: data
})

export const logout = data => ({
	type: AUTH_REDUCER_CASES.logout,
	payload: data
})