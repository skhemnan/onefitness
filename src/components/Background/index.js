import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import {View, colors, screenHeight, screenWidth} from '../../style'

const Background = ({children}) => {
	const style = {
		gradient: {
			height: screenHeight,
			width: screenWidth,
			position: 'absolute'	
		},
		bg: {
			paddingVertical: screenHeight/12,
		}
	}
	return (
		<View bg style={style.bg}>
			<LinearGradient colors={[colors.green, colors.black, colors.black, colors.black]} style={style.gradient}></LinearGradient>
			{children}
		</View>
	)
}

export default Background