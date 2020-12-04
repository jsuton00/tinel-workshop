import { categoriesList } from '../../utils/categoriesList';
import { inputNumberList } from '../../utils/inputNumberList';
import { updateObject } from '../../utils/reduxUtils';
import * as actionTypes from '../actions/actionTypes';

const initialState = {
	workshops: [],
	filteredWorkshops: [],
	workshopId: '',
	workshop: '',
	selectedWorkshop: '',
	users: [],
	selectedUsers: [],
	user: '',
	selectedUser: '',
	numValue: inputNumberList[0],
	price: 0,
	selectedNum: 0,
	subtotal: 0,
	categories: [],
	selectedCategory: categoriesList[0],
	orders: '',
	cartItems: [],
	total: 0,
	updatedCartList: [],
	updatedTotal: 0,
	loadingData: false,
	postingData: false,
	errorFetchingWorkshops: false,
	errorFetchingUsers: false,
	errorFetchingCategories: false,
	errorFetchingWorkshop: false,
	errorPostingOrders: false,
	errorFetchingOrders: false,
};

/** FETCH WORKSHOPS START */
const setLoadingData = (state, action) => {
	return updateObject(state, { loadingData: true });
};

const fetchWorkshopsFail = (state, action) => {
	return updateObject(state, {
		loadingData: false,
		errorFetchingWorkshops: true,
	});
};

const fetchWorkshopsSuccess = (state, action) => {
	return updateObject(state, {
		loadingData: false,
		errorFetchingWorkshops: false,
		workshops: action.workshops,
		filteredWorkshops: action.workshops,
	});
};
/** FETCH WORKSHOPS END */

/** FETCH CATEGORIES START */
const fetchCategoriesFail = (state, action) => {
	return updateObject(state, {
		loadingData: false,
		errorFetchingCategories: true,
	});
};

const fetchCategoriesSuccess = (state, action) => {
	return updateObject(state, {
		loadingData: false,
		errorFetchingCategories: false,
		categories: action.categories,
	});
};
/** FETCH CATEGORIES END */

/** FETCH USERS START */
const fetchUsersFail = (state, action) => {
	return updateObject(state, {
		loadingData: false,
		errorFetchingUsers: true,
	});
};

const fetchUsersSuccess = (state, action) => {
	return updateObject(state, {
		loadingData: false,
		errorFetchingUsers: false,
		users: action.users,
		selectedUsers: action.users,
	});
};
/** FETCH USERS END */

/** FILTER CATEGORY START */
const filterCategory = (state, action) => {
	let filterCategory = action.category;
	let categoryWorkshops;

	if (filterCategory) {
		categoryWorkshops = state.workshops.filter(
			(w) => w.category === filterCategory.toLowerCase(),
		);
	} else {
		categoryWorkshops = state.workshops;
	}

	return updateObject(state, {
		filteredWorkshops: categoryWorkshops,
		selectedCategory: action.category,
		loadingData: false,
	});
};
/** FILTER CATEGORY END */

/** FETCH WORKSHOP START */
const fetchWorkshopFail = (state, action) => {
	return updateObject(state, {
		loadingData: false,
		errorFetchingWorkshop: true,
	});
};

const fetchWorkshopSuccess = (state, action) => {
	return updateObject(state, {
		loadingData: false,
		errorFetchingWorkshop: false,
		workshop: action.workshop,
		selectedWorkshop: action.workshop,
	});
};

/** FETCH WORKSHOP END */
const fetchUserFail = (state, action) => {
	return updateObject(state, {
		loadingData: false,
		errorFetchingUsers: false,
	});
};

const fetchUserSuccess = (state, action) => {
	return updateObject(state, {
		user: action.user,
		selectedUser: action.user,
		loadingData: false,
		errorFetchingUsers: false,
	});
};

const selectNumberOfTickets = (state, action) => {
	let inputNumberValue = Number(action.numValue);
	let workshop = state.workshop;
	let price;
	let subtotal;

	if (workshop) {
		price = workshop.price;
		if (inputNumberValue) {
			subtotal = price * inputNumberValue;
		} else {
			subtotal = '';
		}
	}

	return updateObject(state, {
		selectedNum: inputNumberValue,
		subtotal: Number(subtotal).toFixed(2),
		price: price,
	});
};

/** ADD_TO_CART START */
const selectWorkshopId = (state, action) => {
	return updateObject(state, {
		workshopId: action.workshopId,
		loadingData: false,
		errorFetchingWorkshop: false,
	});
};

const addToCartFail = (state, action) => {
	return updateObject(state, {
		loadingData: false,
		errorFetchingWorkshop: false,
	});
};

const addToCartSuccess = (state, action) => {
	let cartItems = state.cartItems;
	let cartItem;
	let quantity = 0;

	if (action.workshop.responseData) {
		cartItem = action.workshop.responseData;
		quantity += 1;
		cartItems = [...cartItems, { ...cartItem, quantity: quantity }];
	}

	return updateObject(state, {
		cartItems: cartItems,
		workshopId: action.workshop.workshopId,
		loadingData: false,
		errorFetchingWorkshop: false,
	});
};

const postOrdersFail = (state, action) => {
	return updateObject(state, {
		loadingData: false,
		errorPostingOrders: true,
		postingData: true,
	});
};

const postOrdersSuccess = (state, action) => {
	return updateObject(state, {
		loadingData: false,
		errorPostingOrders: false,
	});
};

const fetchOrdersFail = (state, action) => {
	return updateObject(state, {
		loadingData: false,
		errorFetchingOrders: true,
	});
};

const fetchOrdersSuccess = (state, action) => {
	return updateObject(state, {
		loadingData: false,
		errorFetchingOrders: false,
		orders: action.orders,
	});
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.FETCH_WORKSHOPS_FAIL:
			return fetchWorkshopsFail(state, action);
		case actionTypes.FETCH_WORKSHOPS_SUCCESS:
			return fetchWorkshopsSuccess(state, action);
		case actionTypes.FETCH_CATEGORIES_FAIL:
			return fetchCategoriesFail(state, action);
		case actionTypes.FETCH_CATEGORIES_SUCCESS:
			return fetchCategoriesSuccess(state, action);
		case actionTypes.FETCH_USERS_FAIL:
			return fetchUsersFail(state, action);
		case actionTypes.FETCH_USERS_SUCCESS:
			return fetchUsersSuccess(state, action);
		case actionTypes.FILTER_CATEGORY:
			return filterCategory(state, action);
		case actionTypes.FETCH_WORKSHOP_FAIL:
			return fetchWorkshopFail(state, action);
		case actionTypes.FETCH_WORKSHOP_SUCCESS:
			return fetchWorkshopSuccess(state, action);
		case actionTypes.FETCH_USER_FAIL:
			return fetchUserFail(state, action);
		case actionTypes.FETCH_USER_SUCCESS:
			return fetchUserSuccess(state, action);
		case actionTypes.SELECT_NUMBER_OF_TICKETS:
			return selectNumberOfTickets(state, action);
		case actionTypes.SELECT_WORKSHOP_ID:
			return selectWorkshopId(state, action);
		case actionTypes.ADD_TO_CART_FAIL:
			return addToCartFail(state, action);
		case actionTypes.ADD_TO_CART_SUCCESS:
			return addToCartSuccess(state, action);
		case actionTypes.POST_ORDERS_FAIL:
			return postOrdersFail(state, action);
		case actionTypes.POST_ORDERS_SUCCESS:
			return postOrdersSuccess(state, action);
		case actionTypes.FETCH_ORDERS_FAIL:
			return fetchOrdersFail(state, action);
		case actionTypes.FETCH_ORDERS_SUCCESS:
			return fetchOrdersSuccess(state, action);
		case actionTypes.LOADING_DATA:
			return setLoadingData(state, action);
		default:
			return state;
	}
};

export default reducer;
