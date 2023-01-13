import React, {useState} from 'react'
import {FlatList, TouchableOpacity} from 'react-native'
import { View, Text, colors } from '../../style'
import styles from './styles'
import { data } from './constants'

const Ribbon = () => {

	const [currentNum, setCurrentNum] = useState(4)

	const Item = ({item}) => {
		return (
		<TouchableOpacity onPress={() => setCurrentNum(item.num)}>
			<View center style={styles.container}>
				<View style={[styles.ring, {backgroundColor: item.num == currentNum ? colors.yellow : null}]}>
					<Text body color={item.num == currentNum ? colors.green : colors.white}>{item.num}</Text>
				</View>
				<View style={{opacity: item.num > currentNum ? 0.3 : 1}}>
					{item.ring}
				</View>
			</View>
		</TouchableOpacity>
		)
	}

	return (
		<FlatList 
			horizontal 
			data={data} 
			renderItem={Item}
			showsHorizontalScrollIndicator={false}
		/>
	)

}

export default Ribbon