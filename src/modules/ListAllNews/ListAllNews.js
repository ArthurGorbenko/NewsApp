import React, { useState, useEffect } from 'react'
import style from './list-news.module.css'
import { fetchNews } from '../../assets/api'
import ListItem from '../ListItem/ListItem'
import Loader from 'react-loader-spinner'

const ListNews = () => {
  const [news, updateNews] = useState([])

  useEffect(() => {
    const handleUpload = async () => {
      const response = await fetchNews()
      updateNews(response.data)
      return response
    }
    handleUpload()
  }, [])

  return (
    <div className={style.wrapper_items}>
      {news && news.length ? (
        news.map(item => (
          <ListItem data={item} key={item.ID} />
        ))
      ) : (
        <Loader
          type='Puff'
          color='#00BFFF'
          height={300}
          width={300}
          timeout={4000}
        />
      )}
    </div>
  )
}

export default ListNews
