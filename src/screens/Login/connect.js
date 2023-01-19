/* Redux */
import { batch, useDispatch } from 'react-redux'
import { setUser, setNewUser } from '../../redux/action/Auth'

/* Constants */
import { googleSignIn } from '../../service/Auth'


export const useConnect = () => {

	const dispatch = useDispatch()

	// Google Sign In
	const signinWithGoogle = async () => {
		try {
			let signedIn = await googleSignIn()
			if(signedIn?.user){
				batch(() => {
					dispatch(setNewUser(signedIn?.additionalUserInfo?.isNewUser))	
					dispatch(setUser(signedIn?.user))
				})
			}
		} catch (error) {
			console.log('SIGN IN ERROR', error?.message, error)	
		}
	}
	
	return { signinWithGoogle }
}
