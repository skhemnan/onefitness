import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import {View} from '../../style'
import styles from './styles'

const Background = ({children, style}) => {
	return (
		<View bg style={style}>
			<LinearGradient colors={styles.gradientColor} style={styles.gradient}></LinearGradient>
			{children}
		</View>
	)
}

export default Background