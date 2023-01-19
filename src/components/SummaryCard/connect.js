import { useNavigation } from '@react-navigation/native';


export const useConnect = ({item}) => {

	const navigation = useNavigation()
	const navParams = {
		summary: item.summary,
		stats: item.stats,
		programStartDate: item.programStartDate
	}

	const breakDown = () => {
		navigation.navigate('Breakdown', navParams)
	}

	const markComplete = () => {
		console.log('COMPLETED')
	}
	return {markComplete, breakDown}
}