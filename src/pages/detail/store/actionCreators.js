import axios from 'axios';
import { actionTypes } from './index';

const getDetail = (data) => ({
	type: actionTypes.GET_DETAIL_DATA,
	data
})

export const getDetailInfo = (id) => {
	return (dispatch) => {
		axios.get('/api/detail.json?id=' + id).then((res) => {
			dispatch(getDetail(res.data.data));
		}).catch(() => {
			console.warn('detail request error');
		});
	}
}