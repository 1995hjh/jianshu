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
	}],
	contentList: [{
		id: 1,
		title: '吃南瓜胜良药，尤其这做法，营养丰富，色香味俱全',
		content: '现在的天气越来越凉了，经过苦夏的折腾，脾胃都很虚弱。所以，入秋先要健脾。由于南瓜属于温性食物，味甘入脾，特别南瓜粥，非常适合脾虚人群食用哦！',
		name: '名厨之家',
		commonetNum: 1,
		zanNum: 18,
		imgUrl: require('../../../static/list.jpeg')
	},
	{
		id: 2,
		title: '老夫老妻(微小说)',
		content: '清晨，老夫正要起床，被身边的老伴拉住。 老夫:“怎么啦？” 老妻:“你说，你爱不爱我？” 老夫:“神经病，一大早，怎么问这个？”说着推开老伴的手',
		name: '蓝天白云215',
		commonetNum: 23,
		zanNum: 123,
		imgUrl: require('../../../static/list1.jpg')
	},
	{
		id: 3,
		title: '吃南瓜胜良药，尤其这做法，营养丰富，色香味俱全',
		content: '现在的天气越来越凉了，经过苦夏的折腾，脾胃都很虚弱。所以，入秋先要健脾。由于南瓜属于温性食物，味甘入脾，特别南瓜粥，非常适合脾虚人群食用哦！',
		name: '名厨之家',
		commonetNum: 1,
		zanNum: 18,
		imgUrl: require('../../../static/list.jpeg')
	},
	{
		id: 4,
		title: '老夫老妻(微小说)',
		content: '清晨，老夫正要起床，被身边的老伴拉住。 老夫:“怎么啦？” 老妻:“你说，你爱不爱我？” 老夫:“神经病，一大早，怎么问这个？”说着推开老伴的手',
		name: '蓝天白云215',
		commonetNum: 23,
		zanNum: 123,
		imgUrl: require('../../../static/list1.jpg')
	}],
	recommandList: [{
		id: 1,
		imgUrl: require('../../../static/guide1.png')
	},
	{
		id: 2,
		imgUrl: require('../../../static/guide2.png')
	},
	{
		id: 3,
		imgUrl: require('../../../static/guide3.png')
	},
	{
		id: 4,
		imgUrl: require('../../../static/guide4.png')
	},
	{
		id: 5,
		imgUrl: require('../../../static/guide5.png')
	}],
	writerList: [{
		id: 1,
		imgUrl: require('../../../static/writer1.webp'),
		name: '格列柯南',
		wordNum: '665.3k',
		loveNum: '15.4k'
	},
	{
		id: 2,
		imgUrl: require('../../../static/writer2.webp'),
		name: '木青琳',
		wordNum: '265.7k',
		loveNum: '5k'
	},
	{
		id: 3,
		imgUrl: require('../../../static/writer3.webp'),
		name: '琪官KAfka',
		wordNum: '372.9k',
		loveNum: '3.7k'
	},
	{
		id: 4,
		imgUrl: require('../../../static/writer4.webp'),
		name: '念远怀人',
		wordNum: '665.3k',
		loveNum: '7.2k'
	},
	{
		id: 5,
		imgUrl: require('../../../static/writer5.webp'),
		name: '须僧',
		wordNum: '321.3k',
		loveNum: '7k'
	}]
});

export default (state = defaultState, action) => {
	switch(action.type) {
		default:
			return state;
	}
}