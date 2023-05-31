import React from 'react';
import moment from 'moment'
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Style
import { View, Text } from '../../style';
import styles from './styles';

// Components
import { TouchableOpacity } from 'react-native';
import { SVG_ICONS } from '../../assets/icons/svg';

// Redux
import { useSelector } from 'react-redux';

const HomeHeader = () => {
	const navigation = useNavigation()
	const {user} = useSelector(state => state.Auth)
	return (
			<View style={styles.dateHeader}>
				<Text date>{moment().format('MMM DD')}</Text>
				<View row style={styles.day}>
					<Text ph>{moment().format('dddd')}</Text>
					<TouchableOpacity activeOpacity={0.6} onPress={() => navigation.navigate('SettingsStack')}>
						{user?.photoURL ? 
							<Image source={{uri: user?.photoURL}} style={styles.image} resizeMode={'contain'}/>
							:
							<View>{SVG_ICONS(30,30).profile.profileIcon}</View>
						}
					</TouchableOpacity>
				</View>
			</View>	
	)
}

export default HomeHeader
