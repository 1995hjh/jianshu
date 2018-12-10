import { fromJS } from 'immutable';
import { actionTypes } from './';

const defaultState = fromJS({
	detail: {}
});

export default (state = defaultState, action) => {
	switch(action.type) {
		case actionTypes.GET_DETAIL_DATA:
			return state.set('detail', fromJS(action.data.detail));
		default:
			return state;
	}
}