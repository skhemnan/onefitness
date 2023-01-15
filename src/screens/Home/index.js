import React from 'react';

// Style
import { View, Text, Background } from '../../style';

// Components
import HomeHeader from '../../components/HomeHeader';
import { SectionList } from 'react-native';

import styles from './styles';
import useConnect from './connect'

const Home = ({navigation}) => {

	const {workoutData} = useConnect({navigation})

	return (
		<Background style={styles.background}>	
			<View style={styles.header} center>
				{/* <Text h4 bold style={styles.headerText}>Monday, Jan 02</Text> */}
			</View>
			<SectionList
				style={styles.container}
				contentContainerStyle={styles.listContainer}
				ListHeaderComponent={<HomeHeader navigation={navigation}/>}
				sections={workoutData}	
				renderSectionHeader={({section}) => <Text sh style={styles.sectionTitle}>{section.title}</Text>}
				renderSectionFooter={({section}) => section.renderSectionFooter}
				stickySectionHeadersEnabled={false}
				renderItem={({section}) => <>{section.renderItem}</>}
			/>
		</Background>
	)
}

export default Home
