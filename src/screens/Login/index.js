import React from 'react';
import { Image } from 'react-native';
import {View, Text, Button, colors} from '../../style'
import logo from '../../assets/images/logo.png'
import styles from './styles';
import {useConnect} from './connect'

const Login = () => {

	const {signinWithGoogle} = useConnect()

	return (
    <View bg center color={colors.green} style={styles.background}>
			<View col center color={colors.green}>
				<Image source={logo} style={styles.image} resizeMode={'contain'}/>
				<Text h2 color={colors.yellow} style={styles.title}>onefitness</Text>
			</View>
			<View footer center color={colors.green} style={styles.footer}>
				<Text subh2 color={colors.yellow}>one goal.</Text>
				<Text subh2 color={colors.yellow}>one plan.</Text>
				<Text subh2 color={colors.yellow} style={styles.subtitle}>one{" "}
					<Text subh2 color={colors.yellow} style={styles.underline}>you</Text>.
				</Text>
				<Button login text="join with google" onPress={signinWithGoogle}/>
			</View>
    </View>
	)
}

export default Login
