import { call, takeLatest, put } from 'redux-saga/effects';
import { LOAD_PROFILE, loadProfileSucceeded, loadProfileFailed } from './actions';

import { getUserProfile } from '../api';

function *getProfile({ username }) {
    try {
        const { body } = yield call(getUserProfile, { username });
        yield put(loadProfileSucceeded(body));
    } catch (error) {
        console.log(error)
        yield put(loadProfileFailed(error));
    }
}

function *watchGetProfile () {
    yield takeLatest(LOAD_PROFILE, getProfile);
}

export default watchGetProfile;
