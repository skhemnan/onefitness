import {GoogleSignin} from '@react-native-google-signin/google-signin'
import auth from '@react-native-firebase/auth'

export const useConnect = () => {
	GoogleSignin.configure({
		webClientId: '366031428236-satc480gk76mkl679rql2l1up49qsrop.apps.googleusercontent.com'
	})

	const signinWithGoogle = async () => {
		try {
			// Get the users ID token
			const { idToken } = await GoogleSignin.signIn();
			// Create a Google credential with the token
			const googleCredential = auth.GoogleAuthProvider.credential(idToken);
			// Sign-in the user with the credential
			let signedIn = await auth().signInWithCredential(googleCredential);
			console.log(signedIn)
		} catch (error) {
			console.log('SIGN IN ERROR', error?.message, error)	
		}
	}
	
	return {
		signinWithGoogle
	}
}
