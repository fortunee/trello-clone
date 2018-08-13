import { all } from 'redux-saga/effects';
import user from '../dashboard/saga';

export default function *rootSaga() {
    yield all([
        ...user()
    ])
};
