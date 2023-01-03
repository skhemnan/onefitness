import React from 'react';
import { Image } from 'react-native';
import {View, Text, Button, colors} from '../../style'
import logo from '../../assets/images/logo.png'
import { normalize, normalizeHeight } from '../../utils';


const Login = () => {
	return (
    <View bg center color={colors.green} style={styles.background}>
			<View col center color={colors.green}>
				<Image source={logo} style={styles.image} resizeMode={'contain'}/>
				<Text h2 color={colors.yellow}>onefitness</Text>
			</View>
			<View footer center color={colors.green}>
				<Text subh2 color={colors.yellow}>one goal.</Text>
				<Text subh2 color={colors.yellow}>one plan.</Text>
				<Text subh2 color={colors.yellow} style={styles.subtitle}>one{" "}
					<Text subh2 color={colors.yellow} style={styles.underline}>you</Text>.
				</Text>
				<Button login text="login with google"/>
				<Button signUp text="sign up with google"/>
			</View>
    </View>
	)
}

const styles = {
	background: {justifyContent: 'space-between', paddingTop: '20%'},
	image: {width: normalize(150), height: normalizeHeight(150)},
	underline: {textDecorationLine: 'underline'},
	subtitle: {marginBottom: 20}
}

export default Login
