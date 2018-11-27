import { actionTypes } from './';

const defaultState = {
	focused: false
};

export default (state = defaultState, action) => {
	const newState = JSON.parse(JSON.stringify(state));
	if (action.type === actionTypes.SEARCH_FOCUS) {
		newState.focused = true;
	} else if (action.type === actionTypes.SEARCH_BLUR) {
		newState.focused = false;
	}
	return newState;
}