import { categoriesList } from '../../utils/categoriesList';
import { inputNumberList } from '../../utils/inputNumberList';
import { updateObject } from '../../utils/reduxUtils';
import * as actionTypes from '../actions/actionTypes';

const initialState = {
	workshops: [],
	filteredWorkshops: [],
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
	products: [],
	quantity: 0,
	total: 0,
	updatedProducts: [],
	updatedTotal: 0,
	loadingWorkshops: false,
	loadingUsers: false,
	loadingCategories: false,
	errorFetchingWorkshops: false,
	errorFetchingUsers: false,
	errorFetchingCategories: false,
	errorFetchingWorkshop: false,
};

/** FETCH WORKSHOPS START */
const setLoadingWorkshops = (state, action) => {
	return updateObject(state, { loadingWorkshops: true });
};

const fetchWorkshopsFail = (state, action) => {
	return updateObject(state, {
		loadingWorkshops: false,
		errorFetchingWorkshops: true,
	});
};

const fetchWorkshopsSuccess = (state, action) => {
	return updateObject(state, {
		loadingWorkshops: false,
		errorFetchingWorkshops: false,
		workshops: action.workshops,
		filteredWorkshops: action.workshops,
	});
};
/** FETCH WORKSHOPS END */

/** FETCH CATEGORIES START */
const setLoadingCategories = (state, action) => {
	return updateObject(state, { loadingCategories: true });
};

const fetchCategoriesFail = (state, action) => {
	return updateObject(state, {
		loadingCategories: false,
		errorFetchingCategories: true,
	});
};

const fetchCategoriesSuccess = (state, action) => {
	return updateObject(state, {
		loadingCategories: false,
		errorFetchingCategories: false,
		categories: action.categories,
	});
};
/** FETCH CATEGORIES END */

/** FETCH USERS START */
const fetchUsersFail = (state, action) => {
	return updateObject(state, {
		loadingUsers: false,
		errorFetchingUsers: true,
	});
};

const fetchUsersSuccess = (state, action) => {
	return updateObject(state, {
		loadingUsers: false,
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
		loadingWorkshops: false,
	});
};
/** FILTER CATEGORY END */

/** FETCH WORKSHOP START */
const fetchWorkshopFail = (state, action) => {
	return updateObject(state, {
		loadingWorkshop: false,
		errorFetchingWorkshop: true,
	});
};

const fetchWorkshopSuccess = (state, action) => {
	return updateObject(state, {
		loadingWorkshop: false,
		errorFetchingWorkshop: false,
		workshop: action.workshop,
		selectedWorkshop: action.workshop,
	});
};
/** FETCH WORKSHOP END */
const fetchUserFail = (state, action) => {
	return updateObject(state, {
		loadingUsers: false,
		errorFetchingUsers: false,
	});
};

const fetchUserSuccess = (state, action) => {
	return updateObject(state, {
		user: action.user,
		selectedUser: action.user,
		loadingUsers: false,
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

const addToCart = (state, action) => {
	let selectedWorkshopId = action.workshopId;
	let workshops = state.workshops;
	let workshop;
	let existingWorkshop;
	let product;
	let quantity = state.selectedNum;
	let productList = [];
	let sumTotal = 0;
	let total = 0;

	if (workshops) {
		if (quantity === '') {
			quantity = 1;
			if (selectedWorkshopId) {
				workshop = workshops.find((w) => w.id === selectedWorkshopId);
				product = Object.assign(workshop, { quantity: quantity });
				productList.push(product);
				sumTotal = productList.reduce((sum, product) => {
					return sum + product.price * product.quantity;
				}, state.total);
			}
			return updateObject(state, {
				products: productList,
				total: sumTotal,
			});
		} else if (quantity >= 1) {
			if (selectedWorkshopId) {
				workshop = workshops.find((w) => w.id === selectedWorkshopId);
				product = Object.assign(workshop, { quantity: quantity });
				productList.push(product);
				sumTotal = productList.reduce((sum, product) => {
					return sum + product.price * product.quantity;
				}, state.total);
			}
		} else {
			existingWorkshop = workshops.find((w) => w.id === selectedWorkshopId);
			do {
				workshop = workshops.find((w) => w.id === selectedWorkshopId);
				quantity = quantity + 1;
				product = Object.assign(workshop, { quantity: quantity });
				if (workshop !== existingWorkshop) {
					workshop = workshops.find((w) => w.id === selectedWorkshopId);
				}
			} while (selectedWorkshopId);
		}
	}
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
		case actionTypes.LOADING_WORKSHOPS:
			return setLoadingWorkshops(state, action);
		case actionTypes.LOADING_CATEGORIES:
			return setLoadingCategories(state, action);
		default:
			return state;
	}
};

export default reducer;
