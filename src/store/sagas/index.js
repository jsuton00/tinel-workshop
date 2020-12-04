import { all, takeEvery, takeLatest } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import {
	fetchUsersSaga,
	fetchWorkshopsSaga,
	fetchCategoriesSaga,
	fetchWorkshopSaga,
	fetchUserSaga,
	addToCartSaga,
} from './tinelSagas';

export function* watchTinel() {
	yield all([
		takeEvery(actionTypes.FETCH_WORKSHOPS, fetchWorkshopsSaga),
		takeLatest(actionTypes.FETCH_USERS, fetchUsersSaga),
		takeEvery(actionTypes.FETCH_CATEGORIES, fetchCategoriesSaga),
		takeEvery(actionTypes.FETCH_WORKSHOP, fetchWorkshopSaga),
		takeEvery(actionTypes.ADD_TO_CART, addToCartSaga),
		takeLatest(actionTypes.FETCH_USER, fetchUserSaga),
	]);
}
