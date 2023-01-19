import React, {useState, useEffect} from 'react';


// Components
import SummaryCard from '../../components/SummaryCard';
import UpcomingCard from '../../components/UpcomingCard';
import InfoCard from '../../components/InfoCard';
import TrackWorkoutButton from '../../components/TrackWorkoutButton';
import NoWorkoutToday from '../../components/NoWorkoutToday';

// Constants
import { periodizationSummary } from './constants';
import { PROGRESSION_DATA } from '../../global';
import moment from 'moment';

// Redux
import { useSelector } from 'react-redux';

export default useConnect = () => {

const [workoutData, setWorkoutData] = useState([])
const [exercises, setExercises] = useState([])
let WORKOUT = useSelector(state => state.Workout)


// Sample data from Firebase when querying exercises
useEffect(() => {setExercises([
	{ max: 160, progress: 0.75, wId: 'JDGZB1SmYW6j73x2tAiG', workoutDay: 3, startDate: 'December 10th, 2022' },
	{ max: 130, progress: 0.5, wId: '0XF0LFX2gXunVk2ctTZi', workoutDay: 1, startDate: 'December 12th, 2022' },
	{ max: 170, progress: 0.8, wId: 'kRrYdGp5JqEsF0vI7qEH', workoutDay: 5, startDate: 'December 14th, 2022' }	
])},[])
useEffect(() => {setWorkoutData(getData(exercises))}, [exercises])

// Function mutate firebase data
const getData = (exercises) => {

	// Mutate each exercise object and add the data necessary
	let currentDay = moment().day()
	let bodyWeight = WORKOUT.bodyWeight
	let todayData = []
	let upcomingDataAfter = []
	let upcomingDataBefore = []

	exercises.forEach(x => {
		let exerciseData = {
			summary: {
				week: PROGRESSION_DATA[x.progress].week,
				workout: WORKOUT.workouts[x.wId]?.name,
				workoutDay: x.workoutDay,
				maxWeight: x.max,
				progression: x.progress,
				ring: PROGRESSION_DATA[x.progress].ring
			},
			stats: {
				workingWeight: x.max * x.progress,
				sets: PROGRESSION_DATA[x.progress].sets,
				reps: PROGRESSION_DATA[x.progress].reps,
				...(x.wId == 'kRrYdGp5JqEsF0vI7qEH' ? {addedWeight: Math.ceil((x.max * x.progress) - bodyWeight)} : {splitWeight: (x.max - 45)/2})
			},
			programStartDate: x.startDate
		}
		x.workoutDay == currentDay ? todayData.push(exerciseData) : 
			(x.workoutDay < currentDay ? upcomingDataBefore.push(exerciseData) : upcomingDataAfter.unshift(exerciseData))
	})

	// Sorting days before and after today
	upcomingDataAfter.sort((a,b) => a.summary.workoutDay - b.summary.workoutDay)
	upcomingDataBefore.sort((a,b) => a.summary.workoutDay - b.summary.workoutDay)

	// Create and return the section list
	const sectionData = [
			{title: `today's workout${todayData.length > 1 ? 's' : ''}`, renderItem: SummaryCard, data: todayData},
			{title: "upcoming workouts", renderItem: UpcomingCard, data: [...upcomingDataAfter, ...upcomingDataBefore]},
			{title: "learn about periodization", renderItem: InfoCard, data: [{summary: periodizationSummary}]},
	]
		
	return sectionData
}

// Handling no content or footer
const handleSectionFooter = ({section}) => {
	if(section.title == 'upcoming workouts'){
		return <TrackWorkoutButton/>
	} else {
		if(section.data.length == 0){
			return <NoWorkoutToday/>
		}
	}
}

	return { workoutData, handleSectionFooter }
}

