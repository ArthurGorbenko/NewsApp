const IP = `http://213.111.67.158/`
// Anauthorized requests
export const GET_ALL_NEWS = `${IP}wordpress/wp-json/news/v1/published`
export const SUGGEST_NEWS = `${IP}wordpress/wp-json/news/v1/published`
export const GET_JWT_TOKEN = `${IP}wordpress/wp-json/jwt-auth/v1/token`
export const REGISTER_USER = `${IP}wordpress/wp-json/news/v1/user`
// Need authorization
export const GET_SINGLE_NEWS_BY_ID =`${IP}wordpress/wp-json/jwt-auth/v1news/v1/published/`
export const UPDATE_NEWS_BY_ID = `${IP}wordpress/wp-json/jwt-auth/v1news/v1/published/`

