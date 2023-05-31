import React, {useRef, useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setBodyWeight } from '../../redux/action/Workout';
import { getWorkoutData } from '../../service/Workout';
import firestore from '@react-native-firebase/firestore'


export const useConnect = ({navigation}) => {
	const [weight, setWeight] = useState('')
	const uid = useSelector(state => state.Auth.user.uid)
	const dispatch = useDispatch()

	const sendWeight = async () => {
		try {
			// Update on firebase
			await firestore().collection('users').doc(uid).update({bodyWeight: weight})

			// Update locally
			dispatch(setBodyWeight(weight))

			// Get Workout Data
			await getWorkoutData()

			// Navigate back
			navigation.goBack()

		} catch (error) {
			console.log('ERROR SENDING WEIGHT', error)	
		}
	}

	return {setWeight, sendWeight}
}
