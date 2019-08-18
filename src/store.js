import { compose, applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';
import watcherSaga from './sagas/rootSaga';
import { initialState } from './config';

// create saga middleware
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers();

const store = createStore(
  rootReducer,
  initialState,
  compose(applyMiddleware(sagaMiddleware), enhancer)
);

// run the saga
sagaMiddleware.run(watcherSaga);

export default store;