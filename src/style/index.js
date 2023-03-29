import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { View, ScrollView, Text, Dimensions, TouchableOpacity, TextInput } from 'react-native'
import {normalize, normalizeHeight} from '../utils'
const {width: screenWidth, height: screenHeight} = Dimensions.get('window')
import { SVG_ICONS } from '../assets/icons/svg'

/* Colors 
	Collection of all the colors of the application
*/
const colors = {
	green: '#1F3132',
	yellow: '#EFA73E',
	orange: '#FF9700',
	black: '#000000',
	grey: '#4E4E4E',
	darkGrey: '#1C1C1E',
	white: '#FFFFFF',
	red: '#F64F4F',
	ringGrey: '#383736'
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
const Container = (props) => {

	const styles = {
		bg: {
			width: screenWidth,
			height: screenHeight,
		},
		center: {
			justifyContent: 'center',
			alignItems: 'center',
			alignSelf: 'center',
		},
		row: {
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'space-between',
			height: 'auto',
			width: screenWidth/1.05,
		},
		col: {
			flexDirection: 'column',
			paddingVertical: 5,
			paddingHorizontal: 15,
			width: screenWidth,
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
		props.bg && styles.bg, 
		props.center && styles.center, 
		props.row && styles.row, 
		props.col && styles.col, 
		props.box && styles.box, 
		props.footer && styles.footer, 
		{backgroundColor: props.color ?? 'rgba(0,0,0,0)'},
		props.style 
	]

	if(props.scroll){
		return (
			<ScrollView {...props} contentContainerStyle={comboStyle} style={{height: screenHeight}}>
				{props.children}
			</ScrollView>
		)
	} else {
		return (
			<View {...props} style={comboStyle}>{props.children}</View>
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
	contact,
	caption, 
	body, 
	bold,
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
			fontSize: normalize(27),
			textTransform: 'uppercase'
		},
		sh: {
			fontFamily: 'Inter-Regular',
			fontSize: normalize(16),
			textTransform: 'uppercase'
		},
		h1: {
			fontFamily: 'Inter-Bold',
			fontSize: normalize(34),
		},
		h2: {
			fontFamily: 'Inter-Bold',
			fontSize: normalize(27),
		},
		h3: {
			fontFamily: 'Inter-Regular',
			fontSize: normalize(18),
			textTransform: 'uppercase'
		},
		h4: {
			fontFamily: 'Inter-Regular',
			fontSize: normalize(15)
		},
		h5: {
			fontFamily: 'Inter-Bold',
			fontSize: normalize(13)
		},
		subh: {
			fontFamily: 'Inter-Regular',
			fontSize: normalize(18)
		},
		contact: {
			fontFamily: 'Inter-Regular',
			fontSize: normalize(22)
		},
		subh2: {
			fontFamily: 'Inter-Bold',
			fontSize: normalize(18)
		},
		caption: {
			fontFamily: 'Inter-Bold',
			fontSize: normalize(15),
			textTransform: 'uppercase'
		},
		body: {
			fontFamily: 'Inter-Regular',
			fontSize: normalize(11),
		},
		bold: {
			fontFamily: 'Inter-Bold'
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
			contact && styles.contact,
			caption && styles.caption,
			body && styles.body,
			bold && styles.bold,
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
			height: normalize(30),
			backgroundColor: colors.grey,
			borderRadius: 50,
			padding: 5,
			paddingHorizontal: 15,
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
			minHeight: normalize(50),
			backgroundColor: colors.green,
			borderRadius: 12,
			padding: 5,
			paddingHorizontal: normalize(40),
			alignItems: 'center',
			justifyContent: 'center',
			marginVertical:10,
			alignSelf: 'center'
		},
		actionLText: {
			fontSize: normalize(17),
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

/*  Card
	Props:
	action: card type is action
	actionS: small action card
	info: info card
	nav: navigation card (mostly used for settings)
	text: for nav card
	style: custom style	
	children: props children
*/
const Card = (props) => {
	const styles = {
			view: {paddingVertical: 0, paddingHorizontal: 0, marginVertical: normalizeHeight(5)},
			day: {width: '92%', textAlign: 'right', marginBottom: 3},
			action: {
				borderWidth: 1,
				borderColor: colors.darkGrey,
				width: normalize(screenWidth * 0.79),
				height: normalizeHeight(170),
				backgroundColor: colors.darkGrey,
				borderRadius: 12,
				alignSelf:'flex-start',
			},
			actionFooter: {
				backgroundColor: colors.green,
				width: '100%',
				height: '25%',
				position: 'absolute',
				bottom: 0,
				borderBottomRightRadius: 12,
				borderBottomLeftRadius: 12
			},
			actionS: {
				borderWidth: 1,
				borderColor: colors.darkGrey,
				width: normalize(screenWidth * 0.79),
				height: normalize(90),
				backgroundColor: colors.darkGrey,
				borderRadius: 12,
				alignSelf:'flex-start',
			},
			info: {
				borderWidth: 1,
				borderColor: colors.darkGrey,
				width: normalize(screenWidth * 0.79),
				height: normalize(200),
				backgroundColor: colors.darkGrey,
				borderRadius: 12,
				alignSelf:'flex-start',
			},
			nav: {
				borderWidth: 1,
				borderColor: colors.ringGrey,
				width: normalize(screenWidth * 0.79),
				height: normalize(40),
				backgroundColor: colors.ringGrey,
				borderRadius: 12,
				alignSelf: 'center',
				paddingHorizontal: 10,
				paddingVertical: 10
			},
			notNav: {
				borderWidth: 1,
				borderColor: colors.ringGrey,
				width: normalize(screenWidth * 0.79),
				height: normalize(40),
				backgroundColor: colors.ringGrey,
				borderRadius: 12,
				alignSelf: 'center',
				paddingHorizontal: 15,
				paddingVertical: 10
			},
			contact: {
				borderWidth: 1,
				borderColor: colors.ringGrey,
				width: normalize(screenWidth * 0.79),
				height: normalize(85),
				backgroundColor: colors.ringGrey,
				borderRadius: 12,
				alignSelf: 'center',
				paddingHorizontal: 15,
				paddingTop: 20
			},
			button: {
				width:normalize(200), 
				marginLeft: 10, 
			},
			footer: {position: 'absolute', bottom: 2, right: 15},
			navArrow: {position: 'absolute', bottom: 10, right: 0}
		}

	const comboStyle = [
		props.action && styles.action,
		props.actionS && styles.actionS,
		props.info && styles.info,
		props.nav && styles.nav,
		props.notNav && styles.notNav,
		props.contact && styles.contact,
		props.style
	]

	return (
		<Container col style={styles.view}>
			{props.day &&<Typography body style={styles.day} color={colors.yellow}>{props.day}</Typography>}
			<TouchableOpacity {...props} style={comboStyle} disabled={props.info} activeOpacity={0.7}>
				{props.children}

				{/* Footer */}
				{props.action &&
					<View style={styles.actionFooter}>
						{props.button &&
							<Touchable actionS text={props.button} style={styles.button} onPress={props.onButton}/>	
						}
					</View>		
				}

				{/* Arrow */}
				{(props.actionS || props.action || props.nav) &&
					<Container row footer>	
						<Typography h3 style={props.nav ? styles.navArrow : styles.footer}>{SVG_ICONS(20,20).nav.chevRight}</Typography>
					</Container>	
				}
			</TouchableOpacity>
		</Container>
	)

}

/* Background
	Props:
	style: custom style for the container in the background
	children: children for component
*/
const GradientBackground = ({children, style}) => {
	const styles = {
			gradient: {
				height: screenHeight,
				width: screenWidth,
				position: 'absolute'	
			},
			gradientColor: [colors.green, colors.black, colors.black, colors.black, colors.black]
	}

	return (
		<Container bg style={style}>
			<LinearGradient colors={styles.gradientColor} style={styles.gradient}></LinearGradient>
			{children}
		</Container>
	)
}

/* Input
	Props:
	- style: custom style
*/

const Input = (props) => {
	const styles = {
		height: '90%',
		width: '97%',
		alignSelf: 'center',
		fontSize: normalize(30),
		textAlign: 'center',
		fontFamily: 'Inter-Regular',
		color: colors.white
	}

	return (
		<TextInput {...props} style={[styles, props.style]} keyboardType="number-pad"/>
	)
}


export {
	Container as View,
	Typography as Text,
	Touchable as Button,
	Card as Card,
	GradientBackground as Background,
	Input,
	colors,
	screenWidth,
	screenHeight
}


