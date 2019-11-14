import { SET_TOKEN, DELETE_TOKEN } from './actionTypes';

const reducer = (state, action) => {
    switch (action.type) {
        case SET_TOKEN: return {
            ...state, token: action.payload.token
        };
        case DELETE_TOKEN: return {
            ...state, token: '',
        };
        default: return state;
    }
}

export default reducer;