import React, { useState, useEffect } from 'react'
import style from './list-item.module.css'
import ListItemFull from './ListItemFull'
import ListItemMini from './ListItemMini'
import { useSelector } from 'react-redux'

const ListItem = ({ data }) => {
  const token = useSelector(state => state.token)
  const [isToggle, toggle] = useState(true)
  useEffect(
    () => {
      toggle(!isToggle)
    },
    [token]
  )
  return (
    <div>
      {isToggle ? <ListItemFull {...data} /> : <ListItemMini {...data} />}
    </div>
  )
}

export default ListItem
