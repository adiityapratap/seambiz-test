import { createStore, combineReducers, applyMiddleware } from 'redux';
import contact from './reducers/contact';

import thunk from 'redux-thunk';

const reducer = combineReducers({
    contact
})

const store = createStore(
    reducer,
    applyMiddleware(thunk),
)

export default store;