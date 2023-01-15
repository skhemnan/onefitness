import React from 'react';

// Style
import { View, Text } from '../../style';
import styles from './styles';

// Components
import { TouchableOpacity } from 'react-native';
import { SVG_ICONS } from '../../assets/icons/svg';

const HomeHeader = ({navigation}) => {
	return (
			<View style={styles.dateHeader}>
				<Text date>jan 02</Text>
				<View row style={styles.day}>
					<Text ph>monday</Text>
					<TouchableOpacity activeOpacity={0.6} onPress={() => navigation.navigate('Settings')}>
						<View>{SVG_ICONS(30,30).profile.profileIcon}</View>
					</TouchableOpacity>
				</View>
			</View>	
	)
}

export default HomeHeader
