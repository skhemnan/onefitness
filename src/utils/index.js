import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

export function normalize(size){
	return wp(size * 0.3)
}

export function normalizeHeight(size){
	return hp(size * 0.15)
}

export function splitWeight(weight){
	return 2.5 * Math.ceil(((weight - 45)/2)/2.5)
}

export function addedWeight(weight, bodyWeight){
	return 2.5 * Math.ceil((weight - bodyWeight)/2.5)
}