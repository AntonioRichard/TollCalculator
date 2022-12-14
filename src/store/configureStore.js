import { createStore, combineReducers } from 'redux';
import accountsReducer from '../reducers/accounts';

export default () => {
    const store = createStore(
        combineReducers({
            accounts: accountsReducer
        })
    );

    return store;
};