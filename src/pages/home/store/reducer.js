import { fromJS } from 'immutable';

const defaultState = fromJS({
	topicList: [{
		id: 1,
		title: '社会热点',
		imgUrl: require('../../../static/redian.jpg')
	},
	{
		id: 2,
		title: '手绘',
		imgUrl: require('../../../static/shouhui.jpg')
	}]
});

export default (state = defaultState, action) => {
	switch(action.type) {
		default:
			return state;
	}
}