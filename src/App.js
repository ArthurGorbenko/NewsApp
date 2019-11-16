import React from 'react'
import PublicForm from './modules/PublicForm/PublicForm'
import ListAllNews from './modules/ListAllNews/ListAllNews'
import UpdateForm from './modules/UpdateForm/UpdateForm'
import LoginForm from './modules/LoginForm/LoginForm'
import RegisterForm from './modules/RegisterForm/RegisterForm'
import LogginedUser from './modules/LogginedUser/LogginedUser'
import PublicMenu from './modules/PublicMenu/PublicMenu'
import UserMenu from './modules/UserMenu/UserMenu'
import { Router } from '@reach/router'
import style from './app.module.css'
import { handleSubmitFormSuggestNews } from './assets/api'

const App = () => {
  return (
    <div>
      <div className={style.header}>News App</div>
      <div className={style.main}>
        <div className={style.wrapper_menu}>
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
        <div className={style.wrapper_items}>
          <Router>
            <ListAllNews path='/*' />
            <UpdateForm path='users/:login/updateForm/:ID' />
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
    </div>
  )
}

export default App
