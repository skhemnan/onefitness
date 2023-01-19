import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button } from '../../style';

export default TrackWorkoutButton = () => {
	const navigation = useNavigation()
	return <Button actionL text="track new workout" onPress={() => navigation.navigate('TrackNewWorkout')}/>
}

