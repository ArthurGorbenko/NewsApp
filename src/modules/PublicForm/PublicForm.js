import React, { useState, useEffect, useRef } from 'react'
import style from './public-form.module.css'
import useHandleFormSubmit from '../useHandleFormSubmit'
import defaultStyles from '../LoginForm/login-form.module.css'

const PublicForm = ({ callback, defaultInputs }) => {
  const [
    handleSubmit,
    handleInputChange,
    inputs,
    setInputs
  ] = useHandleFormSubmit(callback)
  const [files, setFiles] = useState()
  const myReff = useRef()

  useEffect(
    () => {
      setInputs({ ...defaultInputs })
    },
    [defaultInputs, setInputs]
  )

  useEffect(
    () => {
      setInputs({ ...inputs, file: files })
    },
    [files, setInputs]
  )

  const handleFileUpload = e => {
    e.preventDefault()
    setFiles(myReff.current.files[0])
  }
  return (
    <div className={style.wrapper}>
      <form
        className={style.form}
        onSubmit={e => handleSubmit(e)}
        encType='multipart/form-data'
      >
        <label className={style.label}>
          <span className={defaultStyles.title}>Name</span>
          <input
            type='text'
            name='name'
            value={inputs.name ? inputs.name : ''}
            onChange={e => handleInputChange(e)}
            className={defaultStyles.input}
          />
        </label>
        <label className={style.label}>
          <span className={defaultStyles.title}>Email</span>
          <input
            type='email'
            name='email'
            value={inputs.email ? inputs.email : ''}
            onChange={e => handleInputChange(e)}
            className={defaultStyles.input}
          />
        </label>
        <label className={style.label}>
          <span className={defaultStyles.title}>Topic</span>
          <input
            type='text'
            name='topic'
            value={inputs.topic ? inputs.topic : ''}
            onChange={e => handleInputChange(e)}
            className={defaultStyles.input}
            required
          />
        </label>
        <textarea
          className={style.textarea}
          id=''
          cols='30'
          rows='15'
          name='message'
          placeholder='Enter your message here...'
          onChange={e => handleInputChange(e)}
          value={inputs.message ? inputs.message : ''}
          required
        />
        <label className={style.label}>
          <span className={defaultStyles.title}>Category</span>
          <select
            className={defaultStyles.input}
            onChange={e => handleInputChange(e)}
            value={inputs.category ? inputs.category : 'travel'}
            name='category'
          >
            <option value='travel'>Travel</option>
            <option value='psyhology'>Psyhology</option>
            <option value='relationship'>Relationship</option>
            <option value='sport'>Sport</option>
          </select>
        </label>
        <div className={style.label}>
          <input
            className={style.hidden_input}
            id='file'
            type='file'
            name='file'
            ref={myReff}
            onChange={handleFileUpload}
          />
          <label htmlFor='file' className={style.custom_input}>
            {files ? files.name : 'Upload file'}
          </label>
        </div>
        <input value='Submit' type='submit' className={style.submit} />
      </form>
    </div>
  )
}

export default PublicForm
