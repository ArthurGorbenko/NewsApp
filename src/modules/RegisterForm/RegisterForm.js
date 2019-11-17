import React from 'react'
import useHandleFormSubmit from '../useHandleFormSubmit'
import { navigate } from '@reach/router'
import style from '../LoginForm/login-form.module.css'
import { sendRegistrationInfo } from '../../lib/api'

const RegisterForm = () => {
  const proceedInfo = async inputsData => {
    sendRegistrationInfo(inputsData)
    navigate('/')
  }

  const [handleFormSubmit, handleChange, inputs] = useHandleFormSubmit(
    proceedInfo
  )
  return (
    <div className={style.wrapper}>
      <form onSubmit={e => handleFormSubmit(e)} className={style.form}>
        <label>
          <span className={style.title}>Username</span>
          <input
            className={style.input}
            type='text'
            name='username'
            value={inputs.username ? inputs.username : ""}
            onChange={e => handleChange(e)}
            required
          />
        </label>
        <label>
          <span className={style.title}>Email</span>
          <input
            className={style.input}
            type='email'
            name='email'
            value={inputs.email ? inputs.email : ""}
            onChange={e => handleChange(e)}
            required
          />
        </label>
        <label>
          <span className={style.title}>Password</span>
          <input
            className={style.input}
            type='password'
            name='password'
            value={inputs.password ? inputs.password : ""}
            onChange={e => handleChange(e)}
            required
          />
        </label>
        <input className={style.button} type='submit' value='Register' />
      </form>
    </div>
  )
}

export default RegisterForm
