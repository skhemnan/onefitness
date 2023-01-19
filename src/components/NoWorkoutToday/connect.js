import moment from 'moment'

export const useConnect = () => {
	const exercises = [
		{ max: 160, progress: 0.75, wId: 'JDGZB1SmYW6j73x2tAiG', workoutDay: 3, startDate: 'December 10th, 2022' },
		{ max: 130, progress: 0.5, wId: '0XF0LFX2gXunVk2ctTZi', workoutDay: 1, startDate: 'December 12th, 2022' },
		{ max: 170, progress: 0.8, wId: 'kRrYdGp5JqEsF0vI7qEH', workoutDay: 5, startDate: 'December 14th, 2022' }	
	]
	const workoutDays = exercises.map(x => x.workoutDay)
	const today = moment().day()

	return {workoutDays, today}
}