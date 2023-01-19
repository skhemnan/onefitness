import {GoogleSignin} from '@react-native-google-signin/google-signin'
import auth from '@react-native-firebase/auth'

/* Constants */
import { WEB_CLIENT_ID } from '../global'


export const googleSignIn = async () => {
	try {
		GoogleSignin.configure({
			webClientId: WEB_CLIENT_ID
		})

		const { idToken } = await GoogleSignin.signIn();
		const googleCredential = auth.GoogleAuthProvider.credential(idToken);
		let signedIn = await auth().signInWithCredential(googleCredential);

		return signedIn
	
	} catch (error) {
		console.log('GOOGLE SIGN IN ERROR', error?.message, error)	
	}


}
