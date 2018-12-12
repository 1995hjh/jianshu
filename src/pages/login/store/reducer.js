import { fromJS } from 'immutable';
import { actionTypes } from './';

const defaultState = fromJS({
	login: true,
	checked: true,
	loginIn: false
});

export default (state = defaultState, action) => {
	switch(action.type) {
		case actionTypes.UPDATE_LOGIN:
			return state.set('login', action.login);
		case actionTypes.UPDATE_CHECKED:
			return state.set('checked', action.checked);
		case actionTypes.CHANGE_LOGIN:
			return state.set('loginIn', action.value);
		case actionTypes.LOGOUT:
			return state.set('loginIn', action.value);
		default:
			return state;
	}
}