import React from 'react'
import { Alert } from 'react-native'
import { useSelector } from 'react-redux'
import { logoutUser } from '../../service/Auth'
import { View, colors, Card, Text } from '../../style'
import styles from './styles'

import ContactCard from '../../components/ContactCard'

const Settings = ({navigation}) => {

	const {user} = useSelector(state => state.Auth)

	const handleLogout = () => {
		Alert.alert('Are you sure you want to log out?', 'You will lose any untracked progress', [
			{ text: 'No', style: 'cancel' }, { text: 'Yes', onPress: () => logoutUser() }
		])
	}

	return (
		<View bg color={colors.darkGrey}>
			<ContactCard displayName={user?.displayName} email={user?.email} photo={user?.photoURL}/>
			<Card nav onPress={() => navigation.navigate('LogWeight')}><Text h4>Log Weight</Text></Card>
			<View footer style={styles.logout}>
				<Card notNav onPress={handleLogout}>
					<Text h4 color={colors.red}>Log Out</Text>
				</Card>	
			</View>
		</View>
	)
}

export default Settings