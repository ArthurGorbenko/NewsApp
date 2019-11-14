import { SET_TOKEN, DELETE_TOKEN } from './actionTypes';

export const setToken = token => {
    return {
        type: SET_TOKEN,
        payload: {
            token,
        }
    }
}

export const deleteToken = () => {
    return {
        type: DELETE_TOKEN,
    }
};