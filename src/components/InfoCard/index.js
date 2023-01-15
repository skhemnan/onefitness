import React, {useRef, useEffect} from 'react';
import { Animated } from 'react-native';


// Style
import { View, Text, Button, Card } from '../../style';
import LottieView from 'lottie-react-native'
import styles from './styles';

const InfoCard = ({item}) => {

	const barbellRef = useRef(new Animated.Value(0))
	useEffect(() => {barbellRef.current?.play(0,40)}, [])

	return (
			<Card info>
				<View center style={styles.lottieContainer}>
					<LottieView 
						useNativeDriver 
						ref={barbellRef} 
						source={require('../../assets/lottie/barbell.json')} 
						loop={false} 
						autoPlay={false}
						duration={3000}
						height={'120%'}
						width={'120%'}
						style={styles.lottie}
					/>
				</View>
				<Text body style={styles.periodizationSummary}>{item.summary}</Text>
				<View footer style={styles.learnMore}>
					<Button body text="Learn More"/>
				</View>
			</Card>
	)
}

export default InfoCard
