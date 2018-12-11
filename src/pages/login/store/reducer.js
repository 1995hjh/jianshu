import { fromJS } from 'immutable';
import { actionTypes } from './';

const defaultState = fromJS({
	login: true,
	checked: true
});

export default (state = defaultState, action) => {
	switch(action.type) {
		case actionTypes.UPDATE_LOGIN:
			return state.set('login', action.login);
		case actionTypes.UPDATE_CHECKED:
			return state.set('checked', action.checked);
		default:
			return state;
	}
}