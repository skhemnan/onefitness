export const AUTH_REDUCER_CASES = {
	setUser: "setUser",
	setNewUser: "setNewUser",
	logout: "logout"
}

const initialState = {
	isNewUser: false,
	user: {
		"displayName": "Saahil Khemnani", 
		"email": "saahil.khemlani@gmail.com", 
		"emailVerified": true, 
		"isAnonymous": false, 
		"metadata": {"creationTime": 1667420716157, "lastSignInTime": 1674087870479}, 
		"phoneNumber": null, 
		"photoURL": "https://lh3.googleusercontent.com/a/AEdFTp6pO3P4a7OX63MyUJLR0CSpcgB9bP4BOksPjAAIn9g=s96-c", 
		"providerId": "firebase", 
		"refreshToken": "AOkPPWSRCbAB6ySkvGOLTvYKCb-AqP9U6HFpjNToC1j04T9XaceT2n7ZElEDHPejDIK1Mdbsgn6MwztVeuVPRo7CGSvkAJgogRCRdx6fHNNkIDvO4zxYyjzHRVhKkJWQBcRtne052CXRE-qTl9BAc8DQ1GWTGOGVafeu2n-dXGuXyxQEsd8SPzTf6teuihV59sBKRGjnsGh9YR4YQfl_Hz8JlD4R7OKwa6_wk40bRV_NfVWjqjF3wyPjDYJ9-o8rOuXzG8yUXiRv2TNd-G7d0ARxHWov91GJEYHQW-QFt2ZkyoVe6qElrAVuebhO_o8X1LV63DGFF9AjxOaV0dibH81e5pC3wDGm1YmnHAUQ31DE-XY43VXcHyjIovgUI0BHOW1O6Pa9zTH8L2rPVSh9uNtj4Y70ysAcFGCsih8_BxqNi2dQyM3A6KoezN9HDOijj2gK_Iq83Xk8", 
		"tenantId": null, 
		"uid": "6yEubzfqbnYbEM0VFqraVti9QiW2"
	}
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