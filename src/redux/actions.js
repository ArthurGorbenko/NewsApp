import { SET_TOKEN, DELETE_TOKEN, SET_LOGIN,DELETE_LOGIN } from './actionTypes'

export const setToken = token => {
  return {
    type: SET_TOKEN,
    payload: {
      token
    }
  }
}

export const deleteToken = () => {
  return {
    type: DELETE_TOKEN
  }
}

export const setLogin = login => {
  return {
    type: SET_LOGIN,
    payload: {
      login
    }
  }
}

export const deleteLogin = () => {
  return {
    type: DELETE_LOGIN
  }
}
