import React, {useRef} from 'react';

/* Containers */
import { NavigationContainer } from '@react-navigation/native';

/* Stacks */
import HomeStack from './stacks/HomeStack';

import Home from './screens/Home';
import Login from './screens/Login';

const App = () => {
  const navigation = useRef()

  return (
  // <Login/>
  // <Home/>
  <NavigationContainer ref={navigation}>
    <HomeStack/>
  </NavigationContainer>
  )
}

export default App