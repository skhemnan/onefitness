import React from 'react';
import styles from './styles';
import useConnect from './connect'

// Style
import { View, Text, Background } from '../../style';

// Components
import HomeHeader from '../../components/HomeHeader';
import { SectionList } from 'react-native';

const Home = () => {

	const {workoutData, handleSectionFooter} = useConnect()

	return (
		<Background style={styles.background}>	
			<View style={styles.header} center>
				{/* <Text h4 bold style={styles.headerText}>Monday, Jan 02</Text> */}
			</View>
			<SectionList
				style={styles.container}
				contentContainerStyle={styles.listContainer}
				ListHeaderComponent={<HomeHeader/>}
				sections={workoutData}	
				renderSectionHeader={({section}) => <Text sh style={styles.sectionTitle}>{section.title}</Text>}
				renderSectionFooter={handleSectionFooter}
				stickySectionHeadersEnabled={false}
				renderItem={({section}) => <>{section.renderItem}</>}
			/>
		</Background>
	)
}

export default Home
