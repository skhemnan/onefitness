import React from 'react'
import { Text, colors } from '../../style';
import styles from './styles'
import { disclaimer } from './constants';

export default BreakdownDisclaimer = ({date, progress}) => {
	return (<Text body style={styles.disclaimer} color={colors.grey}>{disclaimer(date, progress)}</Text>)
}
