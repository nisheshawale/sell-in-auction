import { combineReducers } from 'redux';
import Items from './Items';
import errors from './errors';
import messages from './messages';
import auth from './auth';
import search from './search';


export default combineReducers({
    Items,
    errors,
    messages,
    auth,
    search
});