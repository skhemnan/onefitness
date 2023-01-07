import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import {View, colors, screenHeight, screenWidth} from '../../style'

const Background = ({children, style}) => {
	const styles = {
		gradient: {
			height: screenHeight,
			width: screenWidth,
			position: 'absolute'	
		}
	}
	return (
		<View bg style={style}>
			<LinearGradient colors={[colors.green, colors.black, colors.black, colors.black, colors.black]} style={styles.gradient}></LinearGradient>
			{children}
		</View>
	)
}

export default Background