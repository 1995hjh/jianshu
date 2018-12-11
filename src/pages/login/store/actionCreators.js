import { actionTypes } from './';

export const updateLoginInfo = (login) => ({
	type: actionTypes.UPDATE_LOGIN,
	login: !login
})

export const updateCheacked = (checked) => ({
	type: actionTypes.UPDATE_CHECKED,
	checked: !checked
})