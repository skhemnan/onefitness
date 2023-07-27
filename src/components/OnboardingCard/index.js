import React from 'react'
import { Card, View, Text } from '../../style'
import LottieView from 'lottie-react-native'
import styles from './styles'
import { useConnect } from './connect'


export default OnboardingCard = () => {	

	const {trackNew} = useConnect()

	return (
		<Card info onboard button='track new workout' onButton={trackNew}>
			<View center>
				<View style={styles.lottieSmall}>
					<LottieView 
						useNativeDriver 
						source={  require(`../../assets/lottie/box.json`) } 
						loop={true}
						autoPlay
					/>
				</View>	
				<Text subh>{"Its a little quiet here..."}</Text>
				<Text h4 style={{textAlign: 'center'}}>{"...too quiet"}</Text>
			</View>
		</Card>
	)
}