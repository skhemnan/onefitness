import React from 'react';
import {View, Card, Text} from '../../style'
import { Image } from 'react-native';
import { SVG_ICONS } from '../../assets/icons/svg';

import { normalize, normalizeHeight } from "../../utils"
import { colors } from "../../style"




const ContactCard = ({displayName, email, photo}) => {

	return (
		<Card contact>
			<View row style={styles.row}>	
			{photo ? 
				<Image source={{uri: photo}} style={styles.image} resizeMode={'contain'}/>
				:
				<View>{SVG_ICONS(50,50).profile.profileIcon}</View>
			}
				<View>
					<Text contact>{displayName}</Text>
					<Text h4>{email}</Text>
				</View>
			</View>
		</Card>
	)
}

const styles = {
	row: {
		width: '95%',
		paddingLeft: 10,
	},
	image: {
		width: normalize(52), 
		height: normalizeHeight(50), 
		borderRadius: 50, 
		borderWidth: 1, 
		borderColor: colors.grey
	}
}

export default ContactCard
