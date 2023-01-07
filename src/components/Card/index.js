import React from 'react'
import { TouchableOpacity } from 'react-native'
import {View, colors, Text, Button} from '../../style'
import { normalize } from '../../utils'
import { SVG_ICONS } from '../../constants'

const Card = (props) => {
	/* 
		Props:
		action: card type is action
		actionS: small action card
		info: info card
		nav: navigation card (mostly used for settings)
		text: for nav card
		style: custom style	
		children: props children
	*/
	
	const styles = {
		view: {paddingVertical: 0, paddingHorizontal: 0, marginVertical: 10},
		day: {width: '92%', textAlign: 'right', marginBottom: 3},
		action: {
			borderWidth: 1,
			borderColor: colors.darkGrey,
			width: normalize(310),
			height: normalize(200),
			backgroundColor: colors.darkGrey,
			borderRadius: 12,
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
			width: normalize(310),
			height: normalize(100),
			backgroundColor: colors.darkGrey,
			borderRadius: 12,
		},
		info: {
			borderWidth: 1,
			borderColor: colors.darkGrey,
			width: normalize(310),
			height: normalize(200),
			backgroundColor: colors.darkGrey,
			borderRadius: 12,
		},
		button: {
			width:normalize(200), 
			marginLeft: 10, 
			marginTop: 12
		},
		footer: {position: 'absolute', bottom: 2, right: 15}
	}
	
	const comboStyle = [
		props.action && styles.action,
		props.actionS && styles.actionS,
		props.info && styles.info,
		props.style
	]

	return (
		<View col style={styles.view}>
			{props.day &&
				<Text body style={styles.day} color={colors.yellow}>{props.day}</Text>	
			}
			<TouchableOpacity {...props} style={comboStyle} disabled={props.info} activeOpacity={1}>
				{props.children}
				{/* Footer */}
				{props.action &&
					<View style={styles.actionFooter}>
						{props.button &&
							<Button actionS text={props.button} style={styles.button} onPress={props.onButton}/>	
						}
					</View>		
				}
				{/* Arrow */}
				{!props.info &&
					<View row footer>	
						<Text h3 style={styles.footer}>{SVG_ICONS(20,20).nav.chevRight}</Text>
					</View>	
				}
			</TouchableOpacity>
		</View>
	)
}

export default Card