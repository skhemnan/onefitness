import React from 'react';
import Background from '../../components/Background';
import Card from '../../components/Card';
import { View, Text, Button, screenHeight } from '../../style';

const Home = () => {
	return (
	<Background>
		{/* Header */}
		<View col>
			<Text date>jan 02</Text>
			<View row style={{paddingRight:10}}>
				<Text ph>monday</Text>
				<Text h1>O</Text>
			</View>
		</View>

		{/* SectionList */}
		<View col style={{paddingHorizontal: 0, height: screenHeight*(0.77)}}>
			<View col scroll>
				{/* Today's workout */}
				<Text sh style={{marginVertical: 10}}>today's workout</Text>
				<Card action button='mark as completed' onButton={() => {console.log('mark complete')}}></Card>

				{/* Upcoming workouts */}
				<Text sh style={{marginVertical: 10}}>upcoming workouts</Text>
				<Card actionS day='Wednesday'></Card>
				<Card actionS day='Friday'></Card>
				<Button actionL text="track new workout"/>

				{/* Learn about periodization */}
				<Text sh style={{marginVertical: 10}}>learn about periodization</Text>
				<Card info></Card>
			</View>
		</View>
	</Background>
)
}

export default Home
