import React from 'react'
import Background from '../../components/Background';
import Card from '../../components/Card';
import { View, Text, Button, colors, screenWidth } from '../../style';
import { normalize } from '../../utils';
import { SVG_ICONS } from '../../constants';

const Breakdown = () => {
	return(
		<Background>
			<View col>
				{/* Ribbon */}
				<View row style={{height: 75, marginTop: 10}}></View>

				{/* Summary Card */}
				<Text sh>WEEK 4</Text>
				<Card info style={{height: normalize(180)}}>
					<View col style={{paddingHorizontal: 10}}>
						<View row style={{width: '91%', marginTop:5}}>
							<View center style={{flex: 0.4, margin: 15}}>{SVG_ICONS(120,120).rings.ring75}</View>
							<View style={{flex: 0.5}}>
								<Text h2>75%</Text>
								<Text h5>to max weight:</Text>
								<Text h1>160lb</Text>
							</View>
						</View>
						<View row style={{width: '91%', justifyContent: 'space-between', marginTop: -15}}>
							<Text h4 style={{textAlign: 'center', width: '48%'}}>BENCH PRESS</Text>
							<Button actionS text="edit max" style={{width: 120, marginRight: '7%'}}/>
						</View>
					</View>
				</Card>

				{/* Stats */}
				<View row style={{justifyContent: 'flex-start', marginVertical: 15, marginLeft: 6}}>
					<View style={{flex: 0.5}}>
						<Text h5>WORKING WEIGHT</Text>
						<Text h1 color={colors.yellow}>132lb</Text>
					</View>
					<View style={{flex: 0.5}}>
						<Text h5>REP RANGE</Text>
						<Text h1 color={colors.yellow}>5
						<Text h5 color={colors.yellow}>sets</Text>3<Text h5 color={colors.yellow}>reps</Text></Text>
					</View>
				</View>
				<View>
					<Text h5 style={{marginLeft: 4}}>WEIGHT SPLIT</Text>
					<Text h1 color={colors.yellow} style={{marginLeft: 4}}>43.5lb{" "}
					<Text subh>on each side.</Text>
					</Text>
				</View>

				{/* Disclaimer */}
				<Text body style={{marginTop: 40, marginHorizontal: 7}} color={colors.grey}>
					You have started this program on December 12th, 2022. 
					After testing your max weight, you are 75% closer to reaching it. 
					Keep going and you will increase your max weight!
				</Text>
			</View>
		</Background>
	)
}

export default Breakdown
