import React from 'react'
import { View, Text, Dimensions } from 'react-native'
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
const Container = ({ center, col, row, box, bg, footer, style, children }) => {

	const backgroundStyle = {
		width: screenWidth,
		height: screenHeight,
		backgroundColor: colors.grey
	}

	const centerStyle = {
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center',
	}

	const rowStyle={
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-evenly',
		paddingHorizontal: 5,
		height: normalizeHeight(50),
		width: normalize(200),
	}

	const columnStyle = {
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'space-evenly',
		paddingVertical: 5,
		paddingHorizontal: 20,
		width: '100%',
		minimumHeight: screenHeight/11,		
	}

	const boxStyle = {
    width: screenWidth/2,
    height: normalizeHeight(120),
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
		marginVertical: screenHeight/2.5,
		marginHorizontal: screenWidth/4
	}

	const footerStyle = {
		width: '100%',
		position: 'absolute',
		bottom: '5%',
	}

	return (
		<View style={[
			bg && backgroundStyle,
			center && centerStyle,
			row && rowStyle,
			col && columnStyle,
			box && boxStyle,
			footer && footerStyle,
			style
		]}>{children}</View>
	)
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
const Typography = ({date, ph, sh, h1, h2, h3, h4, h5, subh, subh2, caption, body, color, style, children}) => {

	const dateStyle = {}

	const phStyle = {}

	const shStyle = {}

	const h1Style = {
		fontSize: normalize(30),
		fontWeight: 'bold'
	}

	const h2Style = {}

	const h3Style = {}

	const h4Style = {}

	const h5Style = {}

	const subhStyle = {}

	const subh2Style = {}

	const captionStyle = {}

	const bodyStyle = {
		fontSize: normalize(12),
		marginVertical: 2
	}

	return (
		<Text style={[
			date && dateStyle,
			ph && phStyle,
			sh && shStyle,
			h1 && h1Style,
			h2 && h2Style,
			h3 && h3Style,
			h4 && h4Style,
			h5 && h5Style,
			subh && subhStyle,
			subh2 && subh2Style,
			caption && captionStyle,
			body && bodyStyle,
			style,
			{color: color}
		]}>{children}</Text>
	)
}

/* Touchable */

export {
	Container as View,
	Typography as Text,
	colors
}


