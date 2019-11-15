import { SET_TOKEN, DELETE_TOKEN, SET_LOGIN } from './actionTypes';

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

export const setLogin = login => {
    return {
        type: SET_LOGIN,
        payload: {
            login,
        }
    }
}