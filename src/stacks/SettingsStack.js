import React from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import { Button, colors, Text, View, screenHeight } from '../style'


/* Screens */
import { normalize } from '../utils'
import Settings from '../screens/Settings'
import LogWeight from '../screens/LogWeight'

const styles = {
	header: {width: '100%', paddingHorizontal: 25, paddingTop: 5, justifyContent: 'flex-end', alignItems: 'center'},
	headerText: {fontSize: normalize(15)}
}

const settingsModalProps = {
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
}

const logWeightModalProps = {
			headerStyle: {
				backgroundColor: colors.darkGrey,
			},
			headerTintColor: colors.yellow,
			headerShadowVisible: false,
			title: '',
			// headerBackTitleVisible: false
}



const SettingsStack = () => {
	const Stack = createStackNavigator()

	return (
		<Stack.Navigator screenOptions={{
			// headerShown: false,
			...TransitionPresets.SlideFromRightIOS
		}}>
			<Stack.Screen name="Settings" component={Settings} options={settingsModalProps}/>
			<Stack.Screen name="LogWeight" component={LogWeight} options={logWeightModalProps}/>
		</Stack.Navigator>
		
	)	
}

export default SettingsStack