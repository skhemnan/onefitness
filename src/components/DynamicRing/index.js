import React, {useRef, useEffect} from 'react';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { useIsFocused } from '@react-navigation/native';
import { colors } from '../../style';
import { Easing } from 'react-native';

export default DynamicRing = ({value, size}) => {
		const ringRef = useRef()
		const isFocused = useIsFocused()
		useEffect(() => {
			if(isFocused){
				ringRef.current.reAnimate(1, value, 1500, Easing.out(Easing.exp))
			} 	
		},[isFocused, value])

		return (
			<AnimatedCircularProgress
				ref={ringRef}
				fill={1}
				size={size}
				width={20}
				rotation={0}
				tintColor={colors.yellow}
				backgroundColor={colors.ringGrey} 
				lineCap={'round'}
			/>
		)

}
