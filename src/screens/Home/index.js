import React, {useRef, useEffect} from 'react';
import { TouchableOpacity, Animated } from 'react-native';
import Background from '../../components/Background';
import Card from '../../components/Card';
import { View, Text, Button } from '../../style';
import { SVG_ICONS } from '../../constants';
import LottieView from 'lottie-react-native'
import { periodizationSummary } from './constants';
import styles from './styles';

const Home = ({navigation}) => {

	const breakDown = () => {
		navigation.navigate('Breakdown')
	}

	const barbellRef = useRef(new Animated.Value(0))
	useEffect(() => {barbellRef.current?.play(0,40)}, [])

	return (
	<Background style={styles.background}>
		{/* Header */}
		<View col>
			<Text date>jan 02</Text>
			<View row style={styles.day}>
				<Text ph>monday</Text>
				<TouchableOpacity activeOpacity={0.6}>
					<View>{SVG_ICONS(30,30).profile.profileIcon}</View>
				</TouchableOpacity>
			</View>
		</View>

		{/* SectionList */}
		<View col style={styles.listContainer}>
			<View col scroll onMomentumScrollEnd={() => barbellRef.current?.play(0,40)}>
				{/* Section: Today */}
				<Text sh style={styles.todaysWorkoutTitle}>today's workout</Text>
				<Card action button='mark as completed' onButton={() => {console.log('complete')}} onPress={breakDown}>
					<View col style={styles.todaysWorkout}>
						<View row style={styles.todayRingRow}>
							<View style={styles.todayInfo}>
								<Text h4>BENCH PRESS</Text>
								<Text h1>108lb</Text>
								<Text subh>31.5lb per side</Text>
								<Text h4 style={styles.todaySets}>5 sets of 5 reps</Text>
							</View>
							<View center style={styles.todayRing}>
								{SVG_ICONS(110,110).rings.ring675}
								<Text h5 style={styles.todayProgressPercentage}>67.5% to 1RM</Text>
							</View>
						</View>
					</View>
				</Card>

				{/* Section: Upcoming workouts */}
				<Text sh style={styles.upcomingTitle}>upcoming workouts</Text>
				<Card actionS day='Wednesday' onPress={breakDown}>
					<View row style={styles.upcomingRow}>
						<View center style={styles.upcomingRing}>{SVG_ICONS(75,75).rings.ring50}</View>
						<View style={styles.upcomingInfo}>
								<View row style={styles.upcomingInfoRow}>
									<Text h4>PULL-UP</Text>
									<Text h5>50% to 1RM</Text>
								</View>
								<Text h2>-70lb</Text>
								<Text h4>5 sets of 5 reps</Text>
						</View>
					</View>
				</Card>
				<Card actionS day='Friday' onPress={breakDown}>
					<View row style={styles.upcomingRow}>
						<View center style={styles.upcomingRing}>{SVG_ICONS(75,75).rings.ring65}</View>
						<View style={styles.upcomingInfo}>
								<View row style={styles.upcomingInfoRow}>
									<Text h4>SQUAT</Text>
									<Text h5>65% to 1RM</Text>
								</View>
								<Text h2>120lb</Text>
								<Text h4>5 sets of 5 reps</Text>
						</View>
					</View>
				</Card>
				<Button actionL text="track new workout"/>

				{/* Section: Learn about Periodization */}
				<Text sh style={styles.learnTitle}>learn about periodization</Text>
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
					<Text body style={styles.periodizationSummary}>{periodizationSummary}</Text>
					<View footer style={styles.learnMore}>
						<Button body text="Learn More"/>
					</View>
				</Card>
			</View>
		</View>
	</Background>
)
}

export default Home
