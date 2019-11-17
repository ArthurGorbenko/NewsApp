import React from 'react'
import style from './list-item.module.css'
import defaultStyles from '../LoginForm/login-form.module.css'
import {navigate} from '@reach/router'
import {useSelector} from 'react-redux'

const ListItemMini = ({
  attachment_url,
  post_title,
  post_content,
  author_name,
  author_email,
  ID
}) => {
    const login = useSelector(state=>state.login);
    const handleClick = e => {
        navigate(`${login}/updateForm/${ID}`)
    }
  return (
    <div>
      <ul className={style.wrapper_item}>
        <li className={style.title}>{post_title}</li>
        <li className={style.author_info}>ID : {ID}</li>
        <li className={style.author_info}>Author : {author_name}</li>
        <li className={style.author_info}>Email : {author_email}</li>
        <li>
          <p>{post_content}</p>
        </li>
        <li>
          <img className={style.image} src={attachment_url ? attachment_url : ""} alt='page' />
        </li>
        <li>
          <button onClick={e => handleClick(e)} className={defaultStyles.button}>Update</button>
        </li>
      </ul>
    </div>
  )
}

export default ListItemMini
