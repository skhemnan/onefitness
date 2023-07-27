import React from 'react';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import { View, colors, Button, Text, Card, Input } from '../../style'
import styles from './styles'
import { useConnect } from './connect';

const LogWeight = ({navigation}) => {
	const {setWeight, sendWeight} = useConnect({navigation})
	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<View bg color={colors.darkGrey} style={styles.background}>
				<View center column style={styles.container}>
					<Text h1 style={styles.text}>Enter your new body weight (lbs)</Text>
					<Card contact style={styles.input}>
						<Input onChangeText={x => setWeight(x)}/>
					</Card>
					<Text h4 style={styles.text}>This will affect all your body weight exercises.</Text>
				</View>
				<Button confirm text="SET NEW WEIGHT" style={styles.button} onPress={sendWeight}/>
			</View>
		</TouchableWithoutFeedback>
	)
}

export default LogWeight