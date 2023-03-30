import { normalize } from "../../utils";

export default styles = {
	background: {
		paddingTop: 10,
		marginTop: '10%',
		borderTopRightRadius: 12,
		borderTopLeftRadius: 12
	},
	header: {width: '100%', paddingHorizontal: 25, justifyContent: 'flex-end', alignItems: 'center'},
	headerText: {fontSize: normalize(15)},
	button: {
		minWidth: '80%',
		marginVertical: 8,
		borderRadius: 10
	},
	container: {width: '100%', marginTop: '10%', paddingHorizontal: 15, position: 'absolute', top: '5%'},
	heading: {textAlign: 'center', marginVertical: 10, marginBottom: '30%'},
	subheading: {textAlign: 'center', fontSize: normalize(15)},
	counterContainer: {width: '50%', marginVertical: '10%'},
	counterText: {fontFamily: 'Inter-Bold', fontSize: normalize(25), marginTop: -7},
	counterValue: {fontSize: normalize(45)}
}