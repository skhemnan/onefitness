import React, {useRef} from 'react';

/* Containers */
import { NavigationContainer } from '@react-navigation/native';

/* Stacks */
import HomeStack from './stacks/HomeStack';
import Login from './screens/Login';

const App = () => {
  const navigation = useRef()

  return (
  <NavigationContainer ref={navigation}>
    <HomeStack/>
    {/* <Login/> */}
  </NavigationContainer>
  )
}

export default App