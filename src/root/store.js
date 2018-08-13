import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer';

const store = createStore(
    reducer,
    compose(
        applyMiddleware(),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;
