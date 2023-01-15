import React, {useState, useEffect} from 'react';
import { Button } from '../../style';
import SummaryCard from '../../components/SummaryCard';
import UpcomingCard from '../../components/UpcomingCard';
import InfoCard from '../../components/InfoCard';
import { periodizationSummary } from './constants';

export default useConnect = ({navigation}) => {

const [workoutData, setWorkoutData] = useState([])
useEffect(() => {setWorkoutData(getData())}, [])

// Firebase function to get and mutate data
const getData = () => {
		return [
		{	title: "today's workout",
			renderItem: SummaryCard,
			data: [{
				navigate: navigation.navigate,
				summary: {
					week: 4,
					day: 'Monday',
					workout: "BENCH PRESS",
					maxWeight: 160,
					progression: 0.675,
					ring: 'ring675'
				},
				stats: {
					workingWeight: 108,
					sets: 5,
					reps: 5,
					splitWeight: 31.5
				},
				programStartDate: 'December 10th, 2022'
			}]
		},
		{ title: "upcoming workouts",
			renderItem: UpcomingCard,
			renderSectionFooter: <Button actionL text="track new workout"/>,
			data: [
				{
					navigate: navigation.navigate,
					summary: {
						week: 0,
						day: 'Wednesday',
						workout: "PULL-UP",
						maxWeight: 170,
						progression: 0.5,
						ring: 'ring50'
					},
					stats: {
						workingWeight: -70,
						sets: 5,
						reps: 5,
						addedWeight: 20
					},
					programStartDate: 'December 12th 2022'
				},
				{
					navigate: navigation.navigate,
					summary: {
						week: 1,
						day: 'Friday',
						workout: "SQUAT",
						maxWeight: 135,
						progression: 0.6,
						ring: 'ring60'
					},
					stats: {
						workingWeight: 81,
						sets: 5,
						reps: 5,
						splitWeight: 17.5
					},
					programStartDate: 'December 14th 2022'
				}
			]
		},
		{ title: "learn about periodization",
			renderItem: InfoCard,
			data: [{
				summary: periodizationSummary
			}]
		}
		]
	}

	return {
		getData,
		workoutData,
		setWorkoutData,
	}
}

