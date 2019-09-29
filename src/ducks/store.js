import { compose, createStore, applyMiddleware } from 'redux';
import reducers from './reducers.js';
import rootSaga from './sagas.js';
import createSagaMiddleware from 'redux-saga';

const DEV = process.env.NODE_ENV !== 'production';
const composeEnhancers = (DEV && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducers(),
  {},
  composeEnhancers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);

export default store;
