import { ISingleUser } from '../entities/users';
import * as actionTypes from '../actions/actionTypes/userTypes';

export interface IUsersReducer {
    usersList: ISingleUser[];
    someData: string;
}

const defaultState = (): IUsersReducer => ({
    usersList: [],
    someData: 'Ala nie ma kota bo jej podjebali'
});

export default (state = defaultState(), action: any) => {
    switch (action.type) {

        case actionTypes.GET_USERS: {
            const data: actionTypes.IUserTypes['GET_USERS'] = action;
            return {
                ...state,
                users: data.usersist
            }
        }

        case actionTypes.PUSH_DATA: {
            const data: actionTypes.IUserTypes['PUSH_DATA'] = action;
            return {
                ...state,
                someData: data.someData
            }
        }
        default: {
            return state
        }
    }
}