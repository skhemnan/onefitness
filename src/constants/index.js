import React from 'react'

/*************************************************************************** SVG CONSTS ****************************************************************************/

// Rings
import Ring50 from '../assets/icons/rings/ring-50.svg'
import Ring60 from '../assets/icons/rings/ring-60.svg'
import Ring625 from '../assets/icons/rings/ring-625.svg'
import Ring65 from '../assets/icons/rings/ring-65.svg'
import Ring675 from '../assets/icons/rings/ring-675.svg'
import Ring70 from '../assets/icons/rings/ring-70.svg'
import Ring725 from '../assets/icons/rings/ring-725.svg'
import Ring75 from '../assets/icons/rings/ring-75.svg'
import Ring775 from '../assets/icons/rings/ring-775.svg'
import Ring80 from '../assets/icons/rings/ring-80.svg'
import Ring825 from '../assets/icons/rings/ring-825.svg'
import Ring85 from '../assets/icons/rings/ring-85.svg'
import Ring875 from '../assets/icons/rings/ring-875.svg'
import Ring90 from '../assets/icons/rings/ring-90.svg'
import Ring925 from '../assets/icons/rings/ring-925.svg'
import Ring95 from '../assets/icons/rings/ring-95.svg'
import Ring975 from '../assets/icons/rings/ring-975.svg'
import Ring100 from '../assets/icons/rings/ring-100.svg'

// Navigation
import ChevRight from '../assets/icons/chev-right.svg'

// Profile
import ProfileIcon from '../assets/icons/profile-icon.svg'


export const SVG_ICONS = (h, w) => {

	return {
		rings: {
			ring50: <Ring50 height={h} width={w}/>,
			ring60: <Ring60 height={h} width={w}/>,
			ring625: <Ring625 height={h} width={w}/>,
			ring65: <Ring65 height={h} width={w}/>,
			ring675: <Ring675 height={h} width={w}/>,
			ring70: <Ring70 height={h} width={w}/>,
			ring725: <Ring725 height={h} width={w}/>,
			ring75: <Ring75 height={h} width={w}/>,
			ring775: <Ring775 height={h} width={w}/>,
			ring80: <Ring80 height={h} width={w}/>,
			ring825: <Ring825 height={h} width={w}/>,
			ring85: <Ring85 height={h} width={w}/>,
			ring875: <Ring875 height={h} width={w}/>,
			ring90: <Ring90 height={h} width={w}/>,
			ring925: <Ring925 height={h} width={w}/>,
			ring95: <Ring95 height={h} width={w}/>,
			ring975: <Ring975 height={h} width={w}/>,
			ring100: <Ring100 height={h} width={w}/>,
		},
		nav: {
			chevRight: <ChevRight height={h} width={w}/>
		},
		profile: {
			profileIcon: <ProfileIcon height={h} width={w}/>
		}
	}
}