import { actionTypes } from './';
import { fromJS } from 'immutable';

const defaultState = fromJS({
	focused: false
});

export default (state = defaultState, action) => {
	if (action.type === actionTypes.SEARCH_FOCUS) {
		state = state.set('focused', true);
	} else if (action.type === actionTypes.SEARCH_BLUR) {
		state = state.set('focused', false)
	}
	return state;
}