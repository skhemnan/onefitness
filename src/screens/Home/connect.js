import React, {useState, useEffect} from 'react';


// Components
import SummaryCard from '../../components/SummaryCard';
import UpcomingCard from '../../components/UpcomingCard';
import InfoCard from '../../components/InfoCard';
import TrackWorkoutButton from '../../components/TrackWorkoutButton';
import NoWorkoutToday from '../../components/NoWorkoutToday';
import OnboardingCard from '../../components/OnboardingCard';

// Constants
import { periodizationSummary } from './constants';
import { PROGRESSION_DATA } from '../../global';
import moment from 'moment';

// Redux
import { useSelector } from 'react-redux';
import { getWorkoutData } from '../../service/Workout';

// Utils
import { splitWeight, addedWeight } from '../../utils';

export default useConnect = () => {

const [workoutData, setWorkoutData] = useState([])
const [refreshing, setRefreshing] = useState(false)
let WORKOUT = useSelector(state => state.Workout)

const onRefresh = async () => {
	setRefreshing(true)
	await getExercises(true)
	setTimeout(() => {setRefreshing(false)},2000)
}

const getExercises = async (force) => {
	await getWorkoutData()


	// if(WORKOUT.exercises.length == 0 || Object.keys(WORKOUT.workouts).length == 0 || force){
	// 	await getWorkoutData()
	// }
}

useEffect(() => {getExercises()},[])
useEffect(() => {	

	let newData = getData(WORKOUT.exercises, WORKOUT.workouts)
	console.log('NEWDATA', newData)
	setWorkoutData(newData)	

	// if(WORKOUT.exercises.length != 0){
	// 	let newData = getData(WORKOUT.exercises, WORKOUT.workouts)
	// 	console.log('NEWDATA', newData)
	// 	setWorkoutData(newData)	
	// }
},[WORKOUT.exercises])

// Function mutate firebase data
const getData = (exercises, workouts) => {
	try {
		// Mutate each exercise object and add the data necessary
		let currentDay = moment().day()
		let bodyWeight = WORKOUT.bodyWeight
		let todayData = []
		let upcomingDataAfter = []
		let upcomingDataBefore = []

		exercises?.forEach(x => {

			// CODE FOR UPDATING PROGRESS AFTER COMPLETION
			// let curIndex = Object.keys(PROGRESSION_DATA).indexOf(`${x.progress}`)
			// let nextProgress = Object.keys(PROGRESSION_DATA)[curIndex + 1]

			let exerciseData = {
				id: x.id,
				summary: {
					week: PROGRESSION_DATA[x.progress].week,
					workout: workouts[x.wId]?.name,
					workoutDay: moment(x.nextWorkoutDate.toDate()).day(),
					maxWeight: x.max,
					progression: x.progress,
					ring: PROGRESSION_DATA[x.progress].ring
				},
				stats: {
					workingWeight: x.max * x.progress,
					sets: PROGRESSION_DATA[x.progress].sets,
					reps: PROGRESSION_DATA[x.progress].reps,
					...(x.wId == 'kRrYdGp5JqEsF0vI7qEH' ? {addedWeight: Math.ceil((x.max * x.progress) - bodyWeight)} : {splitWeight: splitWeight(x.max * x.progress)})
				},
			}
			moment(x.nextWorkoutDate.toDate()).isBefore(moment()) && moment(x.nextWorkoutDate.toDate()).format('dddd') == moment().format('dddd') ? todayData.push(exerciseData): 
			(x.workoutDay < currentDay ? upcomingDataBefore.push(exerciseData): 
			upcomingDataAfter.unshift(exerciseData))
		})

		// Sorting days before and after today
		upcomingDataAfter.sort((a,b) => a.summary.workoutDay - b.summary.workoutDay)
		upcomingDataBefore.sort((a,b) => a.summary.workoutDay - b.summary.workoutDay)

		// Create and return the section list
		if(WORKOUT.exercises.length > 0){
			return [
					{title: `today's workout${todayData.length > 1 ? 's' : ''}`, renderItem: SummaryCard, data: todayData},
					{title: "upcoming workouts", renderItem: UpcomingCard, data: [...upcomingDataAfter, ...upcomingDataBefore]},
					{title: "learn about periodization", renderItem: InfoCard, data: [{summary: periodizationSummary}]},
			]
		} else {
			return [
					{title: ``, renderItem: OnboardingCard, data: [0]},
					{title: "learn about periodization", renderItem: InfoCard, data: [{summary: periodizationSummary}]},
			]
		}
			
		// return sectionData	
	} catch (error) {
		console.log('ERROR SETTING DATA', error?.message, error)	
	}
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

	return { workoutData, handleSectionFooter, setWorkoutData, onRefresh, refreshing }
}

