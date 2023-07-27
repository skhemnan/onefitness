import React, { useState } from 'react';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import { View, Text, colors, Button, Card, Input } from '../../style'
import { Alert } from 'react-native';
import styles from './styles'
import useConnect from './connect'

const EditMax = ({navigation, route}) => {

	const {handleConfirm, setCurrentMax} = useConnect({route, navigation})

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<View bg color={colors.darkGrey} style={styles.background}>
				<View row color={colors.darkGrey} style={styles.header}>
					<Button body onPress={() => navigation.goBack()} text="Cancel" textStyle={styles.headerText}/>
				</View>
					<View center column style={styles.container}>
						<Text h1 style={styles.text}>Enter your new max weight</Text>
						<Card contact style={styles.input}>
							<Input onChangeText={x => setCurrentMax(x)}/>
						</Card>
						<Text h4 style={styles.text}>Changing your max weight will reset your program.</Text>
					</View>
				<Button confirm text="CONFIRM" style={styles.button} onPress={handleConfirm}/>
			</View>
		</TouchableWithoutFeedback>

	)
}

export default EditMax