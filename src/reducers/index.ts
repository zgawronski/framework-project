import { combineReducers } from 'redux';

import users, { IUsersReducer } from './userReducers';
import users2, { IUsers2Reducer } from './user2Reducers';

export default combineReducers({
    users,
    users2
})