import { categoriesList } from '../../utils/categoriesList';
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
	categories: [],
	selectedCategory: categoriesList[0],
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

const addToCart = (state, action) => {
	let selectedWorkshop = action.workshopId;
	let cartList;

	if (selectedWorkshop) {
		cartList = state.workshops.find((w) => w.id === selectedWorkshop);
	}

	return updateObject(state, {
		cartList: cartList,
		selectedWorkshop: selectedWorkshop,
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
		case actionTypes.ADD_TO_CART:
			return addToCart(state, action);
		case actionTypes.LOADING_WORKSHOPS:
			return setLoadingWorkshops(state, action);
		case actionTypes.LOADING_CATEGORIES:
			return setLoadingCategories(state, action);
		default:
			return state;
	}
};

export default reducer;
