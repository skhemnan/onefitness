import React from 'react';
import {View, Text, colors} from './style'

const App = () => {
  return (
    <View bg center style={{backgroundColor: colors.green}}>
      <Text h1 color={colors.yellow}>onefitness</Text>
      <View footer col>
        <Text body color={colors.yellow}>one goal.</Text>
        <Text body color={colors.yellow}>one plan.</Text>
        <Text body color={colors.yellow}>one you.</Text>
      </View>
    </View>
  )
}

export default App

