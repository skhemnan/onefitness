import {useEffect, useState} from 'react'
import { useSelector } from 'react-redux';
import { useIsFocused } from '@react-navigation/native';
import { Alert } from 'react-native';


// Constants
import { PROGRESSION_DATA } from '../../global';

// Utils
import { splitWeight, addedWeight } from '../../utils';
import moment from 'moment';

export default useConnect = ({route}) => {
	const isFocused = useIsFocused()
	
	const {bodyWeight} = useSelector(state => state.Workout)
	const [currentNum, setCurrentNum] = useState(route?.params?.summary?.week)
	const [data, setData] = useState({
				summary: route?.params?.summary,
				stats: route?.params?.stats,
			})

	useEffect(() => {
		if(isFocused){
			setData({
				summary: route?.params?.summary,
				stats: route?.params?.stats,
			})
		}
	},[isFocused])

	/* 

	{
		"stats": {
			"reps": 5, 
			"sets": 5, 
			"splitWeight": 57.5, 
			"workingWeight": 120
		}, 
		"summary": {
			"maxWeight": 160, 
			"progression": 0.75, 
			"ring": "ring75", 
			"week": 7, 
			"workout": "BENCH PRESS", 
			"workoutDay": 1
		}
	}
	SUMMARY
	- max - can stay the same
	- progression - from globals for the week num
	- ring - from globals for the week num
	- week - changes when user clicks
	- workout - can stay the same
	- workoutDay - can stay the same

	STATS 
	- reps - from globals for the week num
	- sets - from globals for the week num
	- workingWeight - get progression from globals based on selected week, multiply by max from summary
	- splitWeight - perform the formula based on workout type found on summary and the working weight
	*/

	const updateBreakdown = () => {
		// FIND NEW DATA FROM GLOBALS
		let found = Object.entries(PROGRESSION_DATA).findIndex((key) => key[1].week == currentNum)
		let foundEntry = Object.entries(PROGRESSION_DATA)[found]

		// UPDATE EXISTING DATA
		let newData = {
			summary: {
				...data.summary,
				progression: parseFloat(foundEntry[0]), 
				ring: foundEntry[1].ring
			},
			stats: {
				...data.stats,
				bodyWeight: bodyWeight,
				sets: foundEntry[1].sets,
				reps: foundEntry[1].reps,
				workingWeight: Math.ceil(data.summary.maxWeight * parseFloat(foundEntry[0])),
				...(route?.params?.stats.splitWeight && {splitWeight: splitWeight(data.summary.maxWeight * parseFloat(foundEntry[0]))}),
				...(route?.params?.stats.addedWeight && {addedWeight: addedWeight((data.summary.maxWeight * parseFloat(foundEntry[0])), bodyWeight)})
			}
		}
		setData(newData)
	}

	const handleAlert = () => {
		Alert.alert('Are you sure you want to delete this workout?', 'You will lose all your progress.', [
			{ text: 'No', style: 'cancel' }, { text: 'Yes', onPress: handleDelete}
		])
	}

	const handleDelete = () => {
		// Delete locally
		// Delete on Firebase
		// Navigate back
	}

	useEffect(() => { updateBreakdown() },[currentNum, data.summary.maxWeight])
	useEffect(() => { setCurrentNum(data.summary.week) }, [data.summary.maxWeight])

	let startDate = moment()
									.subtract(route?.params?.summary?.week, 'weeks')
									.startOf('week')
									.add(route?.params?.summary?.workoutDay, 'days')
									.format('dddd, MMMM DD YYYY')

	return {startDate, currentNum, setCurrentNum, data, handleAlert}
}
