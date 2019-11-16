import React from 'react'
import { Link } from '@reach/router'
import defaultStyles from '../LoginForm/login-form.module.css'
import style from './user-menu.module.css'

const UserMenu = () => {
  return (
    <div className={style.wrapper}>
      <Link className={style.link} to=''>
        <button className={defaultStyles.button}>Home</button>
      </Link>
      <Link className={style.link} to='updateForm'>
        <button className={defaultStyles.button}>Update news</button>
      </Link>
      <Link className={style.link} to='suggestNews'>
        <button className={defaultStyles.button}>Suggest news</button>
      </Link>
    </div>
  )
}

export default UserMenu
