import React from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'

/* Screens */
import Home from '../screens/Home'
import Breakdown from '../screens/Breakdown'
import { colors, Text } from '../style'

const HomeStack = () => {
	const Stack = createStackNavigator()

	return (
		<Stack.Navigator screenOptions={{
			// headerShown: false,
			...TransitionPresets.SlideFromRightIOS
		}}>
			<Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
			<Stack.Screen name="Breakdown" component={Breakdown} options={{
				headerStyle: {
					backgroundColor: colors.green,
				},
				headerTitle: () => <Text h4>Breakdown</Text>,
				headerTintColor: colors.white,
				headerShadowVisible: false
			}}/>
		</Stack.Navigator>
	)	
}

export default HomeStack