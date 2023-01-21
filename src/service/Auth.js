import {GoogleSignin} from '@react-native-google-signin/google-signin'
import auth from '@react-native-firebase/auth'
import AsyncStorage from '@react-native-async-storage/async-storage'

/* Constants */
import { WEB_CLIENT_ID } from '../global'

/* Redux */
import { batch } from 'react-redux'
import {store} from '../redux/store'
import { setNewUser, setUser, logout } from '../redux/action/Auth'


export const googleSignIn = async () => {
	try {
		GoogleSignin.configure({
			webClientId: WEB_CLIENT_ID
		})

		const { idToken } = await GoogleSignin.signIn();
		const googleCredential = auth.GoogleAuthProvider.credential(idToken);
		let signedIn = await auth().signInWithCredential(googleCredential);

		if(signedIn?.user){
			await AsyncStorage.multiSet([['isNewUser', signedIn?.additionalUserInfo?.isNewUser.toString()], ['userInfo', JSON.stringify(signedIn?.user)]])
			batch(() => {
				store.dispatch(setNewUser(signedIn?.additionalUserInfo?.isNewUser))
				store.dispatch(setUser(signedIn?.user))
			})
		}	
	} catch (error) {
		throw error
	}
}

export const checkAuth = async () => {
	try {
		const userStore = await AsyncStorage.multiGet(['isNewUser', 'userInfo'])
		if(userStore != null){
			let isNewUser = userStore[0][1] === 'true'
			let userInfo = JSON.parse(userStore[1][1])
			if(userInfo != null && isNewUser != null){
				batch(() => {
					store.dispatch(setNewUser(isNewUser))
					store.dispatch(setUser(userInfo))
				})
			}
			return userInfo?.uid
		}	
	} catch (error) {
		console.log('CHECK AUTH ERROR', error, error?.message)	
	}
}

export const logoutUser = async () => {
	await AsyncStorage.clear()
	await store.dispatch(logout())
}