import React, { useState, useEffect } from 'react'
import style from './list-news.module.css'
import { fetchNews } from '../../assets/api'
import ListItem from '../ListItem/ListItem'
import { useSelector } from 'react-redux'

const ListNews = () => {
  const [news, updateNews] = useState([])
  const [isToggle, toggle] = useState()
  const token = useSelector(state => state.token)

  useEffect(() => {
    const handleUpload = async () => {
      const response = await fetchNews()
      updateNews(response.data)
      return response
    }
    handleUpload()
  }, [])

  // const handleClick = e => {
  //   if (token) {
  //     toggle(!isToggle)
  //   }
  // }

  return (
    <div className={style.wrapper_items}>
      {news && news.length ? (
        news.map(item => (
          <ListItem data={item} isToggle={isToggle} key={item.ID} />
        ))
      ) : (
        <h3>Loading....</h3>
      )}
    </div>
  )
}

export default ListNews
