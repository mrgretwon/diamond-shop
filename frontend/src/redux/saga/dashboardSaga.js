import {all, fork, put, take} from 'redux-saga/effects';
import {API_URL} from '../../configuration/config';
import request, {GET, PUT} from '../../services/request';
import {createNotification} from '../../services/notifications';
import * as TYPES from '../actions/actionTypes';


export function *getDiamonds() {
    while (true) {
        try {
            yield take(TYPES.FETCH_DIAMONDS);

            const response = yield request(GET, API_URL + 'diamonds/');
            yield put({type: TYPES.FETCH_DIAMONDS_SUCCESS, payload: response.data});
            createNotification('success', 'Diamonds fetched')
        } catch (e) {
            console.error(e);
            yield put({type: TYPES.FETCH_DIAMONDS_FAILED, payload: e});
            createNotification('danger', 'Fetching diamonds failed')
        }
    }
}

export function *saveCart() {
    while (true) {
        try {
            const {payload} = yield take(TYPES.SAVE_CART);
            console.log("payload", payload);
            // const response = yield request(PUT, API_URL + 'diamonds/', );
            // yield put({type: TYPES.SAVE_CART_SUCCESS, payload: response.data});
            createNotification('success', 'Cart changes saved')
        } catch (e) {
            console.error(e);
            yield put({type: TYPES.SAVE_CART_FAILED, payload: e});
            createNotification('danger', 'Saving cart changes failed')
        }
    }
}

export function *addDiamond() {
    while (true) {
        try {
            yield take(TYPES.ADD_DIAMOND);
            createNotification('info', 'Diamond has been added to the cart')
        } catch (e) {
            console.error(e);
        }
    }
}

export function *removeDiamond() {
    while (true) {
        try {
            yield take(TYPES.REMOVE_DIAMOND);
            createNotification('info', 'Diamond has been removed from the cart')
        } catch (e) {
            console.error(e);
        }
    }
}

export default function *dashboardSaga() {
    yield all([
        fork(getDiamonds),
        fork(saveCart),
        fork(addDiamond),
        fork(removeDiamond),
    ]);
}
