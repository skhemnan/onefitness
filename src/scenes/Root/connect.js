import React, {useState, useEffect} from 'react'

/* Service */
import { checkAuth } from '../../service/Auth';

/* Stacks */
import { useSelector } from 'react-redux';

export const useConnect = () => {
	const {user} = useSelector(state => state.Auth)

	const [localId, setLocalId] = useState()

	const localAuthCheck = async () => {
		let uid = await checkAuth()
		if(uid) setLocalId(uid)
		else setLocalId(null) 
	} 

	useEffect(() => {localAuthCheck()},[user?.uid])

	return {localId}
}
