import { ISingleUser } from '../entities/users';
import * as actionTypes from '../actions/actionTypes/userTypes';
import { ISinglePhoto } from '../entities/photos';
import { ISingleComment } from '../entities/comments';
import { ISinglePost } from '../entities/posts'

export interface IUsersReducer {
    usersList: ISingleUser[];
    someImg: ISinglePhoto[];
    usersComment: ISingleComment[];
    usersPost: ISinglePost[];
}

const defaultState = (): IUsersReducer => ({
    usersList: [],
    someImg: [],
    usersComment: [],
    usersPost: []
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

        case actionTypes.GET_IMAGE: {
            const data: actionTypes.IUserTypes['GET_IMAGE'] = action;
            return {
                ...state,
                someImg: data.someImg
            }
        }
        case actionTypes.GET_COMMENTS: {
            const data: actionTypes.IUserTypes['GET_COMMENTS'] = action;
            return {
                ...state,
                usersComment: data.usersComment
            }
        }
        case actionTypes.GET_POSTS: {
            const data: actionTypes.IUserTypes['GET_POSTS'] = action;
            return {
            ...state,
            usersPost: data.usersPost
            }
        }
        default: {
            return state
        }
    }
}