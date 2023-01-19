import React from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import { Button, colors, Text, View, screenHeight } from '../style'


/* Screens */
import Home from '../screens/Home'
import Breakdown from '../screens/Breakdown'
import Settings from '../screens/Settings'
import LearnScreen from '../screens/LearnScreen'
import { normalize } from '../utils'
import TrackNewWorkout from '../screens/TrackNewWorkout'

const styles = {
	header: {width: '100%', paddingHorizontal: 25, paddingTop: 5, justifyContent: 'flex-end', alignItems: 'center'},
	headerText: {fontSize: normalize(15)}
}

const HomeStack = () => {
	const Stack = createStackNavigator()

	const largeModalProps = {
				cardOverlayEnabled: true,
				...TransitionPresets.ModalPresentationIOS,
				headerStyle: {
					backgroundColor: colors.darkGrey,
				},
				headerTintColor: colors.yellow,
				headerShadowVisible: false,
				header: ({navigation}) => {
					return (
						<View row color={colors.darkGrey} style={styles.header}>
							<Button body onPress={() => navigation.goBack()} text="Done" textStyle={styles.headerText}/>
						</View>
					)
				},
				gestureDirection: 'vertical',
				gestureResponseDistance: screenHeight
	}

	const smallModalProps = {
				cardOverlayEnabled: true,
				...TransitionPresets.ModalPresentationIOS,
				headerStyle: {
					backgroundColor: colors.darkGrey,
				},
				headerTintColor: colors.yellow,
				headerShadowVisible: false,
				headerMode: 'none',
				gestureDirection: 'vertical',
				gestureResponseDistance: screenHeight,
	}

	const stackProps = {
		headerStyle: {
			backgroundColor: colors.green,
		},
		headerTitle: () => <Text h4>Breakdown</Text>,
		headerTintColor: colors.white,
		headerShadowVisible: false
	}

	return (
		<Stack.Navigator screenOptions={{
			// headerShown: false,
			...TransitionPresets.SlideFromRightIOS
		}}>
			<Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
			<Stack.Screen name="Breakdown" component={Breakdown} options={stackProps}/>
			<Stack.Screen name="Settings" component={Settings} options={largeModalProps}/>
			<Stack.Screen name="LearnScreen" component={LearnScreen} options={smallModalProps}/>
			<Stack.Screen name="TrackNewWorkout" component={TrackNewWorkout} options={smallModalProps}/>
		</Stack.Navigator>
		
	)	
}

export default HomeStack