import React from 'react'
import ListItemFull from './ListItemFull'
import ListItemMini from './ListItemMini'
import { useSelector } from 'react-redux'

const ListItem = ({ data }) => {
  const token = useSelector(state => state.token)

  return (
    <div>
      {token ? <ListItemFull {...data} /> : <ListItemMini {...data} />}
    </div>
  )
}

export default ListItem
