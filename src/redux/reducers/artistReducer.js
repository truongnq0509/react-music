import * as ActionTypes from '../constants'

const initState = {
	alias: null,
	artist: {},
	isTooltip: false,
}

const artistReducer = (state = initState, action) => {
	switch (action.type) {
		case ActionTypes.SET_ALIAS:
			return {
				...state,
				alias: action.payload || null
			}
		case ActionTypes.SET_ARTIST:
			return {
				...state,
				artist: action.payload || {}
			}
		case ActionTypes.SET_IS_TOOLTIP:
			return {
				...state,
				isTooltip: action.payload || false
			}

		default:
			return state
	}
}

export default artistReducer




