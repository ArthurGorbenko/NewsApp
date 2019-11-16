import React from 'react'
import { Link } from '@reach/router'
import defaultStyles from '../LoginForm/login-form.module.css'
import style from './public-menu.module.css'

const PublicMenu = () => {
  return (
    <div className={style.wrapper}>
    <Link className={style.link} to='/'>
        <button className={defaultStyles.button}>List All News</button>
      </Link>
      <Link className={style.link} to='/suggestNews'>
        <button className={defaultStyles.button}>Suggest news</button>
      </Link>
    </div>
  )
}
export default PublicMenu
