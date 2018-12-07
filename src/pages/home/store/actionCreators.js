import axios from 'axios';
import { actionTypes } from './';

export const getHomeData = (data) => ({
	type: actionTypes.GET_HOME_DATA,
	value: data
})

export const getHomeInfo = () => {
	return (dispatch) => {
		axios.get('api/home.json').then((res) => {
			const result = res.data.data;
			const action = getHomeData(result);
			dispatch(action);
		}).catch(() => {
			console.warn('home request error');
		})
	}
}
