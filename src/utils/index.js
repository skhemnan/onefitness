import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

export function normalize(size){
	return wp(size * 0.3)
}

export function normalizeHeight(size){
	return hp(size * 0.15)
}