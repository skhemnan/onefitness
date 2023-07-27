import React from 'react';
import styles from './styles';
import useConnect from './connect'
import { RefreshControl } from 'react-native';

// Style
import { View, Text, Background, colors } from '../../style';

// Components
import HomeHeader from '../../components/HomeHeader';
import { SectionList } from 'react-native';

const Home = () => {

	const {workoutData, handleSectionFooter, refreshing, onRefresh} = useConnect()

	console.log('WORKOUT DATA', workoutData)

	return (
		<Background style={styles.background}>	
			<View style={styles.header} center>
				{/* <Text h4 bold style={styles.headerText}>Monday, Jan 02</Text> */}
			</View>
			<SectionList
				refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor={colors.white}/>}
				style={styles.container}
				contentContainerStyle={styles.listContainer}
				ListHeaderComponent={<HomeHeader/>}
				sections={workoutData}	
				renderSectionHeader={({section}) => {
					if(section.title != ''){
						return <Text sh style={styles.sectionTitle}>{section.title}</Text>
					}
				}}
				renderSectionFooter={handleSectionFooter}
				stickySectionHeadersEnabled={false}
				renderItem={({section}) => <>{section.renderItem}</>}
			/>
		</Background>
	)
}

export default Home
