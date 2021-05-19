import { ISingleUser } from '../../entities/users';
import { ISinglePhoto } from '../../entities/photos';
import { ISingleComment } from '../../entities/comments';

export const GET_USERS = 'GET_USERS';
export const GET_IMAGE = 'GET_IMAGE';
export const GET_COMMENTS = 'GET_COMMENTS';
export interface IUserTypes {
    GET_USERS: {
        usersList: ISingleUser[];
    };
    GET_IMAGE: {
        someImg: ISinglePhoto[];
    }
    GET_COMMENTS: {
        usersComment: ISingleComment[];
    }

}