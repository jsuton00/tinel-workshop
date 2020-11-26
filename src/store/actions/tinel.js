import * as actionTypes from './actionTypes';

export const fetchWorkshops = () => ({
	type: actionTypes.FETCH_WORKSHOPS,
});

export const fetchWorkshopsFail = () => ({
	type: actionTypes.FETCH_WORKSHOPS_FAIL,
});

export const fetchWorkshopsSuccess = (workshops) => ({
	type: actionTypes.FETCH_WORKSHOPS_SUCCESS,
	workshops,
});

export const fetchUsers = () => ({
	type: actionTypes.FETCH_USERS,
});

export const fetchUsersFail = () => ({
	type: actionTypes.FETCH_USERS_FAIL,
});

export const fetchUsersSuccess = (users) => ({
	type: actionTypes.FETCH_USERS_SUCCESS,
	users,
});

export const fetchCategories = () => ({
	type: actionTypes.FETCH_CATEGORIES,
});

export const fetchCategoriesFail = () => ({
	type: actionTypes.FETCH_CATEGORIES_FAIL,
});

export const fetchCategoriesSuccess = (categories) => ({
	type: actionTypes.FETCH_CATEGORIES_SUCCESS,
	categories,
});

export const loadingWorkshops = () => ({
	type: actionTypes.LOADING_WORKSHOPS,
});

export const loadingUsers = () => ({
	type: actionTypes.LOADING_USERS,
});

export const loadingCategories = () => ({
	type: actionTypes.LOADING_CATEGORIES,
});
