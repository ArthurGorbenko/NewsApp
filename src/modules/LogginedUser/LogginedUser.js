import React from 'react'
import { navigate } from '@reach/router'
import defaultStyles from '../LoginForm/login-form.module.css'
import style from './loggined-user.module.css'
import { useDispatch } from 'react-redux'
import { deleteLogin, deleteToken } from '../../redux/actions'

const LogginedUser = ({ login }) => {
  const dispatch = useDispatch()
  const handleClick = e => {
    navigate('/')
    localStorage.removeItem('token')//TODO : broke into pieces
    localStorage.removeItem('login')
    dispatch(deleteLogin())
    dispatch(deleteToken())
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
