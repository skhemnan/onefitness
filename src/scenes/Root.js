import React from 'react'

/* Redux */
import { useSelector } from 'react-redux';

/* Stacks */
import HomeStack from '../stacks/HomeStack';
import Login from '../screens/Login';


const Root = () => {
  const { user } = useSelector(state => state.Auth)
	return (<>{user?.uid ? <HomeStack/> : <Login/>}</>)
	// return <HomeStack/>
}

export default Root