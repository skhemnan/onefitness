import React from 'react'
import { TouchableOpacity } from 'react-native'
import {View, colors, Text, Button} from '../../style'
import { SVG_ICONS } from '../../constants'
import styles from './styles'

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
	
	const comboStyle = [
		props.action && styles.action,
		props.actionS && styles.actionS,
		props.info && styles.info,
		props.style
	]

	return (
		<View col style={styles.view}>
			{props.day &&<Text body style={styles.day} color={colors.yellow}>{props.day}</Text>}
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