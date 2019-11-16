import React, { useState,useEffect } from 'react'
import style from './update-form.module.css'
import PublicForm from '../PublicForm/PublicForm'
import useHandleFormSubmit from '../useHandleFormSubmit'
import { useSelector } from 'react-redux'
import { requestNewsDataToUpdate, sendInfoToUpdatePost } from '../../assets/api'
import defaultStyles from '../LoginForm/login-form.module.css'

const UpdateForm = ({ID}) => {
  const token = useSelector(state => state.token)
  const [currentNews, updateCurrentNews] = useState({})
  const handleRequestedDataToUpdate = async inputData => {
    const data = await requestNewsDataToUpdate(inputData, token)
    updateCurrentNews(data)
  }

  const [handleSubmit, handleInputChange, inputs,setInputs] = useHandleFormSubmit(
    handleRequestedDataToUpdate
  )
  useEffect(()=> {
    setInputs({...inputs,news_id:ID})
  },[ID])

  return (
    <div className={style.wrapper}>
      <div className={style.wrapper_form}>
        <form onSubmit={e => handleSubmit(e)} className={style.form}>
          <span className={defaultStyles.title}>Enter ID</span>
          <input
            type='text'
            name='news_id'
            value={inputs.news_id ? inputs.news_id : ID}
            onChange={e => handleInputChange(e)}
            className={defaultStyles.input}
          />
          <input type='submit' value='Request' className={defaultStyles.button} />
        </form>
        <PublicForm
          callback={sendInfoToUpdatePost}
          defaultInputs={currentNews}
        />
      </div>
      <div className={style.wrapper_image}>
        {currentNews.imageUrl ? (
          <img
            src={currentNews.imageUrl}
            alt='news attachment'
            className={style.image}
          />
        ) : (
          <div className={style.placeholder}>Image</div>
        )}
      </div>
    </div>
  )
}

export default UpdateForm
