import { combineReducers } from 'redux';
import Items from './Items';
import errors from './errors';
import messages from './messages';
import auth from './auth';


export default combineReducers({
    Items,
    errors,
    messages,
    auth
});