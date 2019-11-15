import React from 'react'
import { Link } from '@reach/router'
import defaultStyles from '../LoginForm/login-form.module.css'
import style from './user-menu.module.css'

const UserMenu = () => {
  return (
    <div className={style.wrapper}>
      <button className={defaultStyles.button}>
        <Link className={style.link} to='updateForm'>
          Update news
        </Link>
      </button>
      <button className={defaultStyles.button}>
        <Link className={style.link} to='suggestNews'>
          Suggest news
        </Link>
      </button>
    </div>
  )
}

export default UserMenu
