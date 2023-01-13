import {colors, screenWidth} from '../../style'
import { normalize, normalizeHeight } from '../../utils'

export default styles = {
		view: {paddingVertical: 0, paddingHorizontal: 0, marginVertical: normalizeHeight(5)},
		day: {width: '92%', textAlign: 'right', marginBottom: 3},
		action: {
			borderWidth: 1,
			borderColor: colors.darkGrey,
			width: normalize(screenWidth * 0.79),
			height: normalizeHeight(170),
			backgroundColor: colors.darkGrey,
			borderRadius: 12,
			alignSelf:'flex-start',
		},
		actionFooter: {
			backgroundColor: colors.green,
			width: '100%',
			height: '25%',
			position: 'absolute',
			bottom: 0,
			borderBottomRightRadius: 12,
			borderBottomLeftRadius: 12
		},
		actionS: {
			borderWidth: 1,
			borderColor: colors.darkGrey,
			width: normalize(screenWidth * 0.79),
			height: normalize(90),
			backgroundColor: colors.darkGrey,
			borderRadius: 12,
			alignSelf:'flex-start',
		},
		info: {
			borderWidth: 1,
			borderColor: colors.darkGrey,
			width: normalize(screenWidth * 0.79),
			height: normalize(200),
			backgroundColor: colors.darkGrey,
			borderRadius: 12,
			alignSelf:'flex-start',
		},
		button: {
			width:normalize(200), 
			marginLeft: 10, 
		},
		footer: {position: 'absolute', bottom: 2, right: 15}
	}
