import { normalize, normalizeHeight } from "../../utils";

export default styles = {
	background: {
		paddingTop: 25,
	},
	header: {width: '100%', paddingHorizontal: 25, paddingTop: 5, justifyContent: 'flex-end', alignItems: 'center'},
	headerText: {fontSize: normalize(15)},
	lottieContainer: {
		height: '25%',
		width: '50%',
		marginVertical: 20,
		alignSelf: 'center'
	},
	button: {
		maxWidth: '70%',
		marginTop: '45%',
		marginHorizontal: 30
	},
	container: {width: '96%', marginTop: '10%'},
	text: {textAlign: 'center', marginVertical: 10},
	input: {height: normalizeHeight(60), marginVertical: 15, paddingTop: 10} 
}