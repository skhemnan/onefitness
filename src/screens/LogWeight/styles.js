import { normalize } from "../../utils";

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
	explanation: {
		fontSize: normalize(12.5),
		width: '85%',
		marginHorizontal: 25,
		textAlign: 'justify',
		marginBottom: 20
	}
	,
	button: {
		maxWidth: '70%',
		marginVertical: 20,
		marginHorizontal: 30
	}
}