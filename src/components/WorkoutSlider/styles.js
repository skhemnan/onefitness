import { colors } from "../../style";
import { normalize } from "../../utils";

export default styles = {
	thumb: {width: 50, height: 50, borderRadius: 50},
	end: {alignSelf: 'flex-end', width: 25, height: 25, borderRadius: 50, backgroundColor: colors.green, marginBottom: -32, marginRight: 10},
	trackmark: {width: 25, height: 25, borderRadius: 50, backgroundColor: colors.green},
	sliderContainer: {width: '95%', marginLeft: 5},
	aboveContainer: {
		alignItems: 'center',
		height: 50,
		justifyContent: 'center',
		left: -84 / 2,
		width: 84,
		marginBottom: 10
	},
	aboveSlider: {textAlign: 'center', fontSize: normalize(14), marginLeft: 10}
}