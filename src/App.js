import React, {useRef} from 'react';

/* Containers */
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './redux/store'
import Root from './scenes/Root';

const App = () => {
  const navigation = useRef()

  return (
  <Provider store={store}>
    <NavigationContainer ref={navigation}>
      <Root/>
    </NavigationContainer>
  </Provider>
  )
}

export default App