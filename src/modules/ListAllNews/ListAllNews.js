import React, { useState, useEffect } from 'react'
import style from './list-news.module.css'
import { fetchNews } from '../../lib/api'
import ListItem from '../ListItem/ListItem'
import Loader from 'react-loader-spinner'
import {navigate} from '@reach/router'

const ListNews = () => {
  const [news, updateNews] = useState([])

  useEffect(() => {
    const handleUpload = async () => {
      try {
        const response = await fetchNews()
        if(!response.data.length){
          navigate('/error/404')
          return;
        }
        updateNews(response.data)
        return response
      } catch (err) {
        console.log(err)
        navigate('/error/401')
      }
    }
    handleUpload()
  }, [])

  return (
    <div className={style.wrapper_items}>
      {news && news.length ? (
        news.map(item => <ListItem data={item} key={item.ID} />)
      ) : (
        <div className={style.loader_wrapper}>
          <div className={style.loader_item}>
            <Loader
              type='Puff'
              color='#00BFFF'
              height={300}
              width={300}
              timeout={5000}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default ListNews
