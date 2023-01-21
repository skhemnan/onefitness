import React from 'react'
import { useConnect } from './connect'

/* Stacks */
import HomeStack from '../../stacks/HomeStack';
import Login from '../../screens/Login';


const Root = () => {
	const {localId} = useConnect()
	return (<>{localId ? <HomeStack/> : <Login/>}</>)
}

export default Root