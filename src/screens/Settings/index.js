import React from 'react'
import { Alert } from 'react-native'
import { logoutUser } from '../../service/Auth'
import { View, colors, Card, Text } from '../../style'
import styles from './styles'

const Settings = () => {

	const handleLogout = () => {
		Alert.alert('Are you sure you want to log out?', 'You will lose any untracked progress', [
			{ text: 'No', style: 'cancel' }, { text: 'Yes', onPress: () => logoutUser() }
		])
	}

	return (
		<View bg color={colors.darkGrey}>
			<View footer style={styles.logout}>
				<Card notNav onPress={handleLogout}>
					<Text h4 color={colors.red}>Log Out</Text>
				</Card>	
			</View>
		</View>
	)
}

export default Settings