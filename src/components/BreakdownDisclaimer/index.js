import React from 'react'
import { Text, colors, Button } from '../../style';
import styles from './styles'
import { disclaimer } from './constants';
import moment from 'moment';

export default BreakdownDisclaimer = ({date, progress, handlePress}) => {
	let realDate = moment(date).isSame(moment(), 'day') ? 'today' : `on ${date}`
	return (
		<>
		 <Text body style={styles.disclaimer} color={colors.grey}>{disclaimer(realDate, progress)}</Text>
		 <Button actionS text="delete workout" style={styles.button} textStyle={styles.buttonText} onPress={handlePress}/>
		</>
	)
}
