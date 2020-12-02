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

export const filterCategory = (category) => ({
	type: actionTypes.FILTER_CATEGORY,
	category,
});

export const fetchWorkshop = (workshopId) => ({
	type: actionTypes.FETCH_WORKSHOP,
	workshopId,
});

export const fetchWorkshopFail = () => ({
	type: actionTypes.FETCH_WORKSHOP_FAIL,
});

export const fetchWorkshopSuccess = (workshop) => ({
	type: actionTypes.FETCH_WORKSHOP_SUCCESS,
	workshop,
});

export const fetchUser = (userId) => ({
	type: actionTypes.FETCH_USER,
	userId,
});

export const fetchUserFail = () => ({
	type: actionTypes.FETCH_USER_FAIL,
});

export const fetchUserSuccess = (user) => ({
	type: actionTypes.FETCH_USER_SUCCESS,
	user,
});

export const selectNumberOfTickets = (numValue) => ({
	type: actionTypes.SELECT_NUMBER_OF_TICKETS,
	numValue,
});

export const addToCart = (workshopId) => ({
	type: actionTypes.ADD_TO_CART,
	workshopId,
});

export const postOrders = (products, total) => ({
	type: actionTypes.POST_ORDERS,
	products,
	total,
});

export const postOrdersFail = () => ({
	type: actionTypes.POST_ORDERS_FAIL,
});

export const postOrdersSuccess = () => ({
	type: actionTypes.POST_ORDERS_SUCCESS,
});

export const fetchOrders = () => ({
	type: actionTypes.FETCH_ORDERS,
});

export const fetchOrdersFail = () => ({
	type: actionTypes.FETCH_ORDERS_FAIL,
});

export const fetchOrdersSuccess = (orders) => ({
	type: actionTypes.FETCH_ORDERS_SUCCESS,
	orders,
});

export const removeFromCart = (workshopId) => ({
	type: actionTypes.REMOVE_FROM_CART,
	workshopId,
});

export const loadingData = () => ({
	type: actionTypes.LOADING_DATA,
});
