import React from 'react'
import { Router, Link } from '@reach/router'
import defaultStyles from '../LoginForm/login-form.module.css'
import style from './public-menu.module.css'

const PublicMenu = () => {
  return (
    <div className={style.wrapper}>
      <button className={defaultStyles.button}>
        <Link className={style.link} to='/'>
          List All News
        </Link>
      </button>
      <button className={defaultStyles.button}>
        <Link className={style.link} to='/suggestNews'>
          Suggest news
        </Link>
      </button>
    </div>
  )
}
export default PublicMenu
