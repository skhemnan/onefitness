/* Services */
import { googleSignIn } from '../../service/Auth'


export const useConnect = () => {

	// Google Sign In
	const signinWithGoogle = async () => {
		try {
			await googleSignIn()
		} catch (error) {
			console.log('SIGN IN ERROR', error?.message, error)	
		}
	}
	
	return { signinWithGoogle }
}
