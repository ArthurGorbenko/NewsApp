const IP = `http://localhost/`
// Anauthorized requests
export const GET_ALL_NEWS = `${IP}WP-Blog/wp-json/news/v1/published`
export const SUGGEST_NEWS = `${IP}WP-Blog/wp-json/news/v1/published`
export const GET_JWT_TOKEN = `${IP}WP-Blog/wp-json/jwt-auth/v1/token`
export const REGISTER_USER = `${IP}WP-Blog/wp-json/news/v1/user`
// Need authorization
export const GET_SINGLE_NEWS_BY_ID =`${IP}WP-Blog/wp-json/jwt-auth/v1/news/v1/published/`
export const UPDATE_NEWS_BY_ID = `${IP}WP-Blog/wp-json/jwt-auth/v1/news/v1/published/`