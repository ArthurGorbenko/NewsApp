import React from 'react'
import style from './list-item.module.css'

const ListItemMini = ({ post_content, post_title, attachment_url }) => {
  return (
    <ul className={style.wrapper_item}>
      <li className={style.title}>{post_title}</li>
      <li>
        <p>{post_content}</p>
      </li>
      <li>
        <img className={style.image} src={attachment_url} alt='page' />
      </li>
    </ul>
  )
}

export default ListItemMini
