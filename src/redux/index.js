import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { createLogger } from 'redux-logger';

import reducers from './reducers';
import RootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const logger = createLogger({
    collapsed: true,
    diff: true
});

export function configureStore(initialState) {

    const store = createStore(
        reducers,
        initialState,
        composeWithDevTools(applyMiddleware(...middlewares, logger))
    );

    sagaMiddleware.run(RootSaga);

    return store;
}
