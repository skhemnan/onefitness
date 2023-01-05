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
				<Card action button='mark as completed' onButton={() => {console.log('mark complete')}}>
					<View col style={{marginVertical: 5, paddingHorizontal: 10}}>
						<View row style={{width: '91%', marginTop:5}}>
							<View style={{flex: 0.7}}>
								<Text h4>BENCH PRESS</Text>
								<Text h1>132lb</Text>
								<Text subh>43.5lb per side</Text>
							</View>
							<View center style={{flex: 0.3}}>
								<Text h1>O</Text>
							</View>
						</View>
						<View row style={{width: '91%', marginTop: 5}}>
							<Text h4>5 sets of 5 reps</Text>
							<Text h5>75% to 1RM</Text>
						</View>
					</View>
				</Card>

				{/* Upcoming workouts */}
				<Text sh style={{marginVertical: 10}}>upcoming workouts</Text>
				<Card actionS day='Wednesday'>
					<View row style={{width: '91%'}}>
						<View center style={{flex: 0.35}}>
								<Text h1>O</Text>
						</View>
						<View style={{flex: 0.7, marginTop: 10}}>
								<View row style={{width: '105%'}}>
									<Text h4>PULL-UP</Text>
									<Text h5>50% to 1RM</Text>
								</View>
								<Text h2>-70lb</Text>
								<Text h4>5 sets of 5 reps</Text>
						</View>
					</View>
				</Card>
				<Card actionS day='Friday'>
					<View row style={{width: '91%'}}>
						<View center style={{flex: 0.35}}>
								<Text h1>O</Text>
						</View>
						<View style={{flex: 0.7, marginTop: 10}}>
								<View row style={{width: '105%'}}>
									<Text h4>SQUAT</Text>
									<Text h5>65% to 1RM</Text>
								</View>
								<Text h2>120lb</Text>
								<Text h4>5 sets of 5 reps</Text>
						</View>
					</View>
				</Card>
				<Button actionL text="track new workout"/>

				{/* Learn about periodization */}
				<Text sh style={{marginVertical: 10}}>learn about periodization</Text>
				<Card info>
					<View center style={{height: '45%'}}>
						<Text h1>O</Text>
					</View>
					<Text body style={{padding: 10, marginLeft: 5}}>
						Periodization is a method of structured training that helps individuals gradually increase 
						their strength and reach their one rep max, optimizing performance and preventing overtraining or injury.
					</Text>
					<View footer style={{marginLeft: 15}}>
						<Button body text="Learn More"/>
					</View>
				</Card>
			</View>
		</View>
	</Background>
)
}

export default Home
