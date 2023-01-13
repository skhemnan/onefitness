import { normalize } from '../../utils';

export default styles = {
	ribbonView: {height: 75, marginVertical: 10},
	summaryCard: {height: normalize(180)},
	summaryView: {paddingHorizontal: 10},
	summaryRingRow: {width: '91%', marginTop:5},
	summaryRing: {flex: 0.4, margin: 15},
	summaryInfo: {flex: 0.45},
	summaryButtonRow:{width: '91%', justifyContent: 'space-between', marginTop: -15},
	summaryWorkout:{textAlign: 'center', width: '48%'},
	editMaxButton:{width: 120, marginRight: '7%'},
	statsRow: {justifyContent: 'flex-start', marginVertical: 15, marginLeft: 6},
	statsCol: {flex: 0.5},
	weightSplit: {marginLeft: 4},
	disclaimer: {marginTop: 40, marginHorizontal: 7}
}
