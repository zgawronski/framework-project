import { ISingleUser } from '../entities/users';
import * as actionTypes from '../actions/actionTypes/userTypes';
import { ISinglePhoto } from '../entities/photos'

export interface IUsersReducer {
    usersList: ISingleUser[];
    someData: string;
    someImg: ISinglePhoto[];
}

const defaultState = (): IUsersReducer => ({
    usersList: [],
    someData: 'Ala nie ma kota bo jej podjebali',
    someImg: []
});

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state = defaultState(), action: any) => {
    switch (action.type) {

        case actionTypes.GET_USERS: {
            const data: actionTypes.IUserTypes['GET_USERS'] = action;
            return {
                ...state,
                usersList: data.usersList
            }
        }

        case actionTypes.PUSH_DATA: {
            const data: actionTypes.IUserTypes['PUSH_DATA'] = action;
            return {
                ...state,
                someData: data.someData
            }
        }

        case actionTypes.GET_IMAGE: {
            const data: actionTypes.IUserTypes['GET_IMAGE'] = action;
            return {
                ...state,
                someImg: data.someImg
            }
        }
        default: {
            return state
        }
    }
}