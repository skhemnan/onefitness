import { normalize, normalizeHeight } from '../../utils';

export default styles = {
	background: {justifyContent: 'space-between', paddingTop: '20%'},
	title: {marginTop: -30, width: '100%', textAlign: 'center'},
	image: {width: normalize(200), height: normalizeHeight(200)},
	underline: {textDecorationLine: 'underline'},
	subtitle: {marginBottom: 20},
	footer: {bottom: '10%'}
}
