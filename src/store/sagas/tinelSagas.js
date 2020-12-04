import * as actions from '../actions/index';
import * as api from '../../apis/api';
import { put, call } from 'redux-saga/effects';

export function* fetchWorkshopsSaga(action) {
	try {
		yield put(actions.loadingData());
		const response = yield call(api.fetchWorkshops);
		yield put(actions.fetchWorkshopsSuccess(response.data));
	} catch (err) {
		yield put(actions.fetchWorkshopsFail());
	}
}

export function* fetchUsersSaga(action) {
	try {
		yield put(actions.loadingData());
		const response = yield call(api.fetchUsers);
		yield put(actions.fetchUsersSuccess(response.data));
	} catch (err) {
		yield put(actions.fetchUsersFail());
	}
}

export function* fetchCategoriesSaga(action) {
	try {
		yield put(actions.loadingData());
		const response = yield call(api.fetchCategories);
		yield put(actions.fetchCategoriesSuccess(response.data));
	} catch (err) {
		yield put(actions.fetchCategoriesFail());
	}
}

export function* fetchWorkshopSaga(action) {
	try {
		yield put(actions.loadingData());
		let response;
		if (action.workshopId) {
			response = yield call(api.fetchWorkshop, action.workshopId);
		}
		yield put(actions.fetchWorkshopSuccess(response.data));
	} catch (err) {
		yield put(actions.fetchWorkshopFail());
	}
}

export function* addToCartSaga(action) {
	try {
		yield put(actions.loadingData());
		let response;
		if (action.workshopId) {
			response = yield call(api.fetchWorkshop, action.workshopId);
			yield put(
				actions.addToCartSuccess({
					workshopId: action.workshopId,
					responseData: response.data,
				}),
			);
		}
	} catch (error) {
		yield put(actions.addToCartFail());
	}
}

export function* fetchUserSaga(action) {
	try {
		yield put(actions.loadingData());
		let response;
		if (action.userId) {
			response = yield call(api.fetchUser, action.userId);
		}
		yield put(actions.fetchUserSuccess(response.data));
	} catch (err) {
		yield put(actions.fetchUserFail());
	}
}

export function* fetchOrdersSaga(action) {
	try {
		yield put(actions.loadingData());
		const response = yield call(api.fetchOrders);
		yield put(actions.fetchOrdersSuccess(response.data));
	} catch (err) {
		yield put(actions.fetchOrdersFail());
	}
}
