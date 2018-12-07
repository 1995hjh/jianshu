import { fromJS } from 'immutable';
import { actionTypes } from './';

const defaultState = fromJS({
	topicList: [],
	contentList: [],
	recommandList: [],
	writerList: [],
	contentPage: 1,
	writerPage: 1,
	wirterTotalPage: 1
});

export default (state = defaultState, action) => {
	switch(action.type) {
		case actionTypes.GET_HOME_DATA:
			return state.merge({
				topicList: fromJS(action.data.topicList),
				contentList: fromJS(action.data.contentList),
				recommandList: fromJS(action.data.recommandList),
				writerList: fromJS(action.data.writerList),
				wirterTotalPage: Math.ceil(action.data.writerList.length / 5)
			})
		case actionTypes.ADD_LIST_INFO:
			return state.merge({
				'contentList': state.get('contentList').concat(fromJS(action.data)),
				'contentPage': action.nextPage
			})
		case actionTypes.CHANGE_WRITER_PAGE:
			let page = action.page + 1;
			page = page > state.get('wirterTotalPage') ? 1 : page;
			return state.set('writerPage', page);
		default:
			return state;
	}
}