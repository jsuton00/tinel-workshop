import { categoriesList } from '../../utils/categoriesList';
import { updateObject } from '../../utils/reduxUtils';
import * as actionTypes from '../actions/actionTypes';

const initialState = {
	workshops: [],
	filteredWorkshops: [],
	users: [],
	categories: [],
	selectedCategory: categoriesList[0],
	loadingWorkshops: false,
	loadingUsers: false,
	loadingCategories: false,
	errorFetchingWorkshops: false,
	errorFetchingUsers: false,
	errorFetchingCategories: false,
};

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
		case actionTypes.LOADING_WORKSHOPS:
			return setLoadingWorkshops(state, action);
		case actionTypes.LOADING_CATEGORIES:
			return setLoadingCategories(state, action);
		default:
			return state;
	}
};

export default reducer;
