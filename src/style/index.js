import React from 'react'
import { View, ScrollView, Text, Dimensions, TouchableOpacity, ProgressViewIOSComponent } from 'react-native'
import {normalize, normalizeHeight} from '../utils'
const {width: screenWidth, height: screenHeight} = Dimensions.get('window')

/* Colors 
	Collection of all the colors of the application
*/
const colors = {
	green: '#1F3132',
	yellow: '#EFA73E',
	black: '#000000',
	grey: '#4E4E4E',
	white: '#FFFFFF'
}

/* Container 
	View like component. Includes these properties:
	- center: brings all elements inside it to the center
	- row: adds horizontal alignment to all elements inside it
	- column: adds vertical alignment to all elements inside it
	- background: turns height and width into that of screen
	- box: applies box properties to view,
	- footer: puts elements on the bottom of the screen
*/
const Container = ({ 
	center, 
	col, 
	row, 
	box, 
	bg, 
	footer, 
	scroll, 
	color, 
	style, 
	children 
}) => {

	const styles = {
		bg: {
			width: screenWidth,
			height: screenHeight,
			backgroundColor: colors.grey,
			paddingVertical: screenHeight/15,
			paddingHorizontal: screenWidth/15
		},
		center: {
			justifyContent: 'center',
			alignItems: 'center',
			alignSelf: 'center',
		},
		row: {
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'space-evenly',
			paddingHorizontal: 5,
			height: normalizeHeight(50),
			width: normalize(200),
		},
		col: {
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'space-evenly',
			paddingVertical: 5,
			paddingHorizontal: 20,
			width: '100%',
			minimumHeight: screenHeight/11,		
		},
		box: {
			width: screenWidth/2,
			height: normalizeHeight(120),
			textAlign: 'center',
			justifyContent: 'center',
			alignItems: 'center',
			flexDirection: 'column',
			marginVertical: screenHeight/2.5,
			marginHorizontal: screenWidth/4
		},
		footer: {
			width: '100%',
			position: 'absolute',
			bottom: '5%',
		}
	}

	const comboStyle = [ 
		bg && styles.bg, 
		center && styles.center, 
		row && styles.row, 
		col && styles.col, 
		box && styles.box, 
		footer && styles.footer, 
		{backgroundColor: color ?? colors.grey},
		style 
	]

	if(scroll){
		return (
			<ScrollView contentContainerStyle={comboStyle}>
				{children}
			</ScrollView>
		)
	} else {
		return (
			<View style={comboStyle}>{children}</View>
		)
	}
}

/* Typography
	Text like component. Includes these properties:
	- Date: for date like components (date)
	- Page Heading: for headings at the top of the page (ph)
	- Section heading: for headings at the top of a section list (sh)
	- Heading 1 (h1)
	- Heading 2 (h2)
	- Heading 3 (h3)
	- Heading 4 (h4)
	- Heading 5 (h5)
	- Subheading (subh)
	- Subheading 2 (subh2)
	- Caption (caption)
	- Body (body)
*/
const Typography = ({
	date, 
	ph, 
	sh, 
	h1, 
	h2, 
	h3, 
	h4, 
	h5,
	subh, 
	subh2, 
	caption, 
	body, 
	color, 
	style, 
	children
}) => {

	const styles = {
		date: {
			fontFamily: 'Inter-Regular',
			fontSize: normalize(15),
			textTransform: 'uppercase'
		},
		ph: {
			fontFamily: 'Inter-Bold',
			fontSize: normalize(34),
			textTransform: 'uppercase'
		},
		sh: {
			fontFamily: 'Inter-Regular',
			fontSize: normalize(18),
			textTransform: 'uppercase'
		},
		h1: {
			fontFamily: 'Inter-Bold',
			fontSize: normalize(40),
		},
		h2: {
			fontFamily: 'Inter-Bold',
			fontSize: normalize(34),
		},
		h3: {
			fontFamily: 'Inter-Regular',
			fontSize: normalize(22),
			textTransform: 'uppercase'
		},
		h4: {
			fontFamily: 'Inter-Regular',
			fontSize: normalize(17)
		},
		h5: {
			fontFamily: 'Inter-Bold',
			fontSize: normalize(14)
		},
		subh: {
			fontFamily: 'Inter-Regular',
			fontSize: normalize(22)
		},
		subh2: {
			fontFamily: 'Inter-Bold',
			fontSize: normalize(22)
		},
		caption: {
			fontFamily: 'Inter-Bold',
			fontSize: normalize(17),
			textTransform: 'uppercase'
		},
		body: {
			fontFamily: 'Inter-Regular',
			fontSize: normalize(12),
		}
	}

	const comboStyle = [
			date && styles.date,
			ph && styles.ph,
			sh && styles.sh,
			h1 && styles.h1,
			h2 && styles.h2,
			h3 && styles.h3,
			h4 && styles.h4,
			h5 && styles.h5,
			subh && styles.subh,
			subh2 && styles.subh2,
			caption && styles.caption,
			body && styles.body,
			style,
			{color: color ?? 'white'},
	]

	return (
		<Text style={comboStyle}>{children}</Text>
	)
}

/* Touchable 
	All button components in the app, includes the properties:
	- Login: button for login screen (login)
	- Signup: button for login screen to sign up (signUp)
	- Action (S): Default button but small (actionS)
	- Action (L): Default button but large (actionL)
	- Body: Button without any border or background (body)
	- Confirm: Default OK or CONFIRM button (confirm)
*/
const Touchable = (props) => {
	const styles = {
		login: {
			borderWidth: 1,
			borderColor: colors.yellow,
			minWidth: normalize(250),
			minHeight: normalizeHeight(40),
			backgroundColor: colors.yellow,
			borderRadius: 50,
			padding: 10,
			alignItems: 'center',
			justifyContent: 'center',
			marginVertical: 7
		},
		loginText: {
			fontSize: normalize(17),
			fontFamily: 'Inter-Bold',
			color: colors.green,
			textTransform: 'uppercase'
		},
		signUp: {
			borderWidth: 3,
			borderColor: colors.yellow,
			minWidth: normalize(250),
			minHeight: normalizeHeight(40),
			backgroundColor: colors.green,
			borderRadius: 50,
			padding: 10,
			alignItems: 'center',
			justifyContent: 'center',
			marginVertical: 7
		},
		signUpText: {
			fontSize: normalize(17),
			fontFamily: 'Inter-Bold',
			color: colors.yellow,
			textTransform: 'uppercase'
		},
		actionS: {
			borderWidth: 1,
			borderColor: colors.grey,
			minWidth: normalize(150),
			minHeight: normalize(30),
			backgroundColor: colors.grey,
			borderRadius: 50,
			padding: 5,
			alignItems: 'center',
			justifyContent: 'center',
			marginVertical:10
		},
		actionSText: {
			fontSize: normalize(15),
			fontFamily: 'Inter-Regular',
			color: colors.white,
			textTransform: 'uppercase'
		},
		actionL: {
			borderWidth: 1,
			borderColor: colors.green,
			minWidth: normalize(300),
			minHeight: normalize(50),
			backgroundColor: colors.green,
			borderRadius: 12,
			padding: 5,
			alignItems: 'center',
			justifyContent: 'center',
			marginVertical:10
		},
		actionLText: {
			fontSize: normalize(22),
			fontFamily: 'Inter-Regular',
			color: colors.white,
			textTransform: 'uppercase'
		},
		body: {
			marginVertical: 10
		},
		bodyText: {
			fontSize: normalize(13),
			fontFamily: 'Inter-Bold',
			color: colors.yellow,
		},
		confirm: {
			borderWidth: 1,
			borderColor: colors.green,
			minWidth: normalize(275),
			minHeight: normalize(40),
			backgroundColor: colors.green,
			borderRadius: 50,
			padding: 5,
			paddingTop: 7.5,
			alignItems: 'center',
			justifyContent: 'center',
			marginVertical:10
		},
		confirmText: {
			fontSize: normalize(20),
			fontFamily: 'Inter-Bold',
			color: colors.white,
			textTransform: 'uppercase'
		}
	}

	const comboStyle = [
		props.login && styles.login,
		props.signUp && styles.signUp,
		props.actionS && styles.actionS,
		props.actionL && styles.actionL,
		props.body && styles.body,
		props.confirm && styles.confirm,
		props.style
	]

	const comboTextStyle = [
		props.login && styles.loginText,
		props.signUp && styles.signUpText,
		props.actionS && styles.actionSText,
		props.actionL && styles.actionLText,
		props.body && styles.bodyText,
		props.confirm && styles.confirmText,
		props.textStyle
	]

	return (
		<TouchableOpacity {...props} style={comboStyle} activeOpacity={0.6}>
			<Text style={comboTextStyle}>{props.text}</Text>
		</TouchableOpacity>
	)
}

export {
	Container as View,
	Typography as Text,
	Touchable as Button,
	colors
}


