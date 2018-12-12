import axios from 'axios';
import { actionTypes } from './';

export const updateLoginInfo = (login) => ({
	type: actionTypes.UPDATE_LOGIN,
	login: !login
})

export const updateCheacked = (checked) => ({
	type: actionTypes.UPDATE_CHECKED,
	checked: !checked
})

const changeLogin = () => ({
	type: actionTypes.CHANGE_LOGIN,
	value: true
})

export const logout = () => ({
	type: actionTypes.LOGOUT,
	value: false
})

export const register = () => ({
	type: actionTypes.CHANGE_REGISTER,
	value: false
})

export const handleSubmit = (account, pwd) => {
	return (dispatch) => {
		axios.get('/api/login.json?account=' + account + '&pwd=' + pwd).then((res) => {
			if (res.data.data) {
				dispatch(changeLogin());
			} else {
				alert('登录失败');
			}
		}).catch(() => {
			console.warn('login request error');
		})
	}
}