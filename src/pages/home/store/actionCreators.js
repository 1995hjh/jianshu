import axios from 'axios';
import { actionTypes } from './';

export const getHomeData = (data) => ({
	type: actionTypes.GET_HOME_DATA,
	data
})

export const addListInfo = (data,nextPage) => ({
	type: actionTypes.ADD_LIST_INFO,
	data,
	nextPage
})

export const changeWriterPage = (page) => ({
	type: actionTypes.CHANGE_WRITER_PAGE,
	page
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

export const getMoreInfo = (page) => {
	return (dispatch) => {
		page = parseInt(page) + 1;
		axios.get('api/homeList.json?page=' + page).then((res) => {
			const result = res.data.data;
			dispatch(addListInfo(result, page));
		}).catch(() => {
			console.warn('homeList request error');
		})
	}
}
