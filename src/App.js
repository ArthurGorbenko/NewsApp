import React from 'react'
import PublicForm from './modules/PublicForm/PublicForm'
import ListAllNews from './modules/ListAllNews/ListAllNews'
import ListSingleNews from './modules/ListSingleNews/ListSignleNews'
import UpdateForm from './modules/UpdateForm/UpdateForm'
import LoginForm from './modules/LoginForm/LoginForm'
import RegisterForm from './modules/RegisterForm/RegisterForm'
import LogginedUser from './modules/LogginedUser/LogginedUser'
import PublicMenu from './modules/PublicMenu/PublicMenu'
import UserMenu from './modules/UserMenu/UserMenu'
import { Router } from '@reach/router'
import style from './app.module.css'
import { connect } from 'react-redux'
import { handleSubmitFormSuggestNews } from './assets/api'
const App = ({ login }) => {
  return (
    <div>
      <span className={style.header}>News App</span>
      <div className={style.main}>
        <div className={style.wrapper}>
          <Router>
            <LoginForm path='/*' />
            <RegisterForm path='register' />
            <LogginedUser path='users/:login/*' />
          </Router>
          <Router>
            <PublicMenu path='/*' />
            <UserMenu path='users/:login/*' />
          </Router>
        </div>
        <Router>
          <ListAllNews path='/*' />
          <ListSingleNews path='users/:login/listSinleNews' />
          <UpdateForm path='users/:login/updateForm' />
          <PublicForm
            path='/suggestNews'
            callback={handleSubmitFormSuggestNews}
          />
          <PublicForm
            path='/users/:login/suggestNews'
            callback={handleSubmitFormSuggestNews}
          />
        </Router>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  const { login } = state
  return { login }
}

export default connect(mapStateToProps)(App)
