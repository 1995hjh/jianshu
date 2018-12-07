import { fromJS } from 'immutable';
import { actionTypes } from './';

const defaultState = fromJS({
	topicList: [],
	contentList: [],
	recommandList: [],
	writerList: []
});

export default (state = defaultState, action) => {
	switch(action.type) {
		case actionTypes.GET_HOME_DATA:
			return state.merge({
				topicList: fromJS(action.value.topicList),
				contentList: fromJS(action.value.contentList),
				recommandList: fromJS(action.value.recommandList),
				writerList: fromJS(action.value.writerList)
			})
		default:
			return state;
	}
}