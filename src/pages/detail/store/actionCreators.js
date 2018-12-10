import axios from 'axios';
import { actionTypes } from './index';

const getDetail = (data) => ({
	type: actionTypes.GET_DETAIL_DATA,
	data
})

export const getDetailInfo = () => {
	return (dispatch) => {
		axios.get('api/detail.json').then((res) => {
			dispatch(getDetail(res.data.data));
		}).catch(() => {
			console.warn('detail request error');
		});
	}
}