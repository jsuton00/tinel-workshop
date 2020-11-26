import { all, takeEvery } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import {
	fetchUsersSaga,
	fetchWorkshopsSaga,
	fetchCategoriesSaga,
} from './tinelSagas';

export function* watchTinel() {
	yield all([
		takeEvery(actionTypes.FETCH_WORKSHOPS, fetchWorkshopsSaga),
		takeEvery(actionTypes.FETCH_USERS, fetchUsersSaga),
		takeEvery(actionTypes.FETCH_CATEGORIES, fetchCategoriesSaga),
	]);
}
