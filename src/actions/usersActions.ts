import { Dispatch } from 'redux';
import * as actionTypes from '../actions/actionTypes/userTypes';
import { ISingleUser } from '../entities/users';
import { ISinglePhoto } from '../entities/photos';
import { ISingleComment } from '../entities/comments';

export const getUsers = (): Promise<ISingleUser[]> => ((dispatch: Dispatch) => {

    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then((usersList: ISingleUser[]) => {
            dispatch({
                type: actionTypes.GET_USERS,
                usersList
            })
        })
}) as any;

export const getSomeData = (someData: string): Promise<ISingleUser[]> => ((dispatch: Dispatch) => {

    dispatch({
        type: actionTypes.PUSH_DATA,
        someData
    })
}) as any;

export const getSomeImg = (): Promise<ISinglePhoto[]> => ((dispatch: Dispatch) => {

    return fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then((someImg: ISinglePhoto[]) => {
        dispatch({
            type: actionTypes.GET_IMAGE,
            someImg
        })
    })
}) as any;

export const getComments = (): Promise<ISingleComment[]> => ((dispatch: Dispatch) => {

    return fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then((usersComment: ISingleComment[]) => {
        dispatch({
            type: actionTypes.GET_COMMENTS,
            usersComment
        })
    })
}) as any;