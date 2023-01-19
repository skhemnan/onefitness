export const WEB_CLIENT_ID = '366031428236-satc480gk76mkl679rql2l1up49qsrop.apps.googleusercontent.com'

export const PROGRESSION_DATA = {
	0.5 : { week: 0, ring: 'ring50', sets: 5, reps: 5 },
	0.6 : { week: 1, ring: 'ring60', sets: 5, reps: 5 },
	0.625 : { week: 2, ring: 'ring625', sets: 5, reps: 5 },
	0.65 : { week: 3, ring: 'ring65', sets: 5, reps: 5 },
	0.675 : { week: 4, ring: 'ring675', sets: 5, reps: 5 },
	0.7 : { week: 5, ring: 'ring70', sets: 5, reps: 5 },
	0.725 : { week: 6, ring: 'ring725', sets: 5, reps: 5 },
	0.75 : { week: 7, ring: 'ring75', sets: 5, reps: 5 },
	0.775 : { week: 8, ring: 'ring775', sets: 5, reps: 3 },
	0.8 : { week: 9, ring: 'ring80', sets: 5, reps: 3 },
	0.825 : { week: 10, ring: 'ring825', sets: 5, reps: 3 },
	0.85 : { week: 11, ring: 'ring85', sets: 5, reps: 3 },
	0.875 : { week: 12, ring: 'ring875', sets: 5, reps: 3 },
	0.9 : { week: 13, ring: 'ring90', sets: 1, reps: 3 },
	0.925 : { week: 14, ring: 'ring925', sets: 1, reps: 3 },
	0.95 : { week: 15, ring: 'ring95', sets: 1, reps: 3 },
	0.975 : { week: 16, ring: 'ring975', sets: 1, reps: 3 },
	1: { week: 17, ring: 'ring100', sets: 1, reps: 1 }
}

export const WORKOUTDAYS = {
	1: 'Monday',
	2: 'Tuesday',
	3: 'Wednesday',
	4: 'Thursday',
	5: 'Friday',
	6: 'Saturday',
	7: 'Sunday'
}

/* Raw Data for workout 
	return [
	{	title: "today's workout",
		renderItem: SummaryCard,
		data: [
			{
			summary: {
				week: 4, // get from progression data set
				workoutDay: 1, // is this needed?
				workout: "BENCH PRESS",
				maxWeight: 160,
				progression: 0.675,
				ring: 'ring675' // get from progression data set
			},
			stats: {
				workingWeight: 108, // calculate from max
				sets: 5, // get from progression data set
				reps: 5, // get from progression data set
				splitWeight: 31.5 // calculate from max, CONDITIONAL, if the workout type is body weight then this will be "added weight", and calculation will be different
			},
			programStartDate: 'December 10th, 2022'
		}
		]
	},
	{ title: "upcoming workouts",
		renderItem: UpcomingCard,
		data: [
			{
				summary: {
					week: 0,
					workoutDay: 2,
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
				summary: {
					week: 1,
					workoutDay: 3,
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
		data: [{ summary: periodizationSummary }]
	}
	]
*/

