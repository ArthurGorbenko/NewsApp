import { createStore } from "redux";
import reducer from "./reducer";

const initialStore = {
    token : localStorage.getItem('token'),
    login : localStorage.getItem('login'),
}

export default createStore(
    reducer,
    initialStore,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);