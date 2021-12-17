import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger];
//can be used in object but array has more usability

const store = createStore(rootReducer, applyMiddleware(...middlewares));
//store: object holding state of whole app
//can only change through dispatches

export default store;
