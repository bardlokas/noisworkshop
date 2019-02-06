import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import navigation from './reducers/navigation';
import app from './reducers/app.reducer';

const identity = x => x;

const logger = createLogger();

const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore);

const reducer = combineReducers({
  navigation,
  app
});

export default () => createStoreWithMiddleware(reducer);
