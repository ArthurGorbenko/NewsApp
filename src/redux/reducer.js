import { SET_TOKEN, DELETE_TOKEN, SET_LOGIN } from './actionTypes';

const initialState = {
    token: '',
    login: '',
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TOKEN: return {
            ...state, token: action.payload.token
        };
        case DELETE_TOKEN: return {
            ...state, token: '',
        };
        case SET_LOGIN: return {
            ...state, login: action.payload.login
        }
        default: return state;
    }
}

export default reducer;