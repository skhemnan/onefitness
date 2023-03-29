import { normalize, normalizeHeight } from "../../utils";

export default styles = {
	background: {
		paddingTop: 10,
	},
	header: {width: '100%', paddingHorizontal: 25, justifyContent: 'flex-end', alignItems: 'center'},
	headerText: {fontSize: normalize(15)},
	button: {
		maxWidth: '70%',
		marginTop: '25%',
		marginHorizontal: 30
	},
	container: {width: '96%', marginTop: '15%'},
	text: {textAlign: 'center', marginVertical: 10},
	input: {height: normalizeHeight(60), marginVertical: 15, paddingTop: 10} 
}