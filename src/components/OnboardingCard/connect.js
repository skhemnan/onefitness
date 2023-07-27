import { useNavigation } from '@react-navigation/native';


export const useConnect = () => {
	let navigation = useNavigation()

	const trackNew = () => navigation.navigate('TrackNewWorkout')

	return {trackNew}
}