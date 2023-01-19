import React from 'react'
import { View, colors, Card, Text } from '../../style'
import styles from './styles'

/* Redux */
import { useDispatch } from 'react-redux'
import { logout } from '../../redux/action/Auth'

const Settings = () => {

	const dispatch = useDispatch()
	const logOut = () => {dispatch(logout())}

	return (
		<View bg color={colors.darkGrey}>
			<View footer style={styles.logout}>
				<Card notNav onPress={logOut}>
					<Text h4 color={colors.red}>Log Out</Text>
				</Card>	
			</View>
		</View>
	)
}

export default Settings