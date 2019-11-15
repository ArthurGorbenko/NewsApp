import React from 'react'
import { navigate } from '@reach/router'
import defaultStyles from '../LoginForm/login-form.module.css'
import style from './loggined-user.module.css'

const LogginedUser = ({ login }) => {
  const handleClick = e => {
    navigate('/')
    localStorage.removeItem('token')
  }
  return (
    <div className={style.wrapper}>
      <span className={style.greetings}>Hello,{login}</span>
      <button className={defaultStyles.button} onClick={e => handleClick(e)}>
        Exit
      </button>
    </div>
  )
}

export default LogginedUser
