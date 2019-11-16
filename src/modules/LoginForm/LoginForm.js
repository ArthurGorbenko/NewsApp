import React, { useCallback } from 'react'
import style from './login-form.module.css'
import useHandleFormSubmit from '../useHandleFormSubmit'
import { navigate } from '@reach/router'
import defaultStyles from '../LoginForm/login-form.module.css'
import { sendLoginInfo } from '../../assets/api'
import { useDispatch } from 'react-redux'
import { setToken, setLogin } from '../../redux/actions'

const LoginForm = () => {

  const dispatch = useDispatch()
  const proceedFormLoginSubmit = async inputsData => {
    const response = await sendLoginInfo(inputsData)
    localStorage.setItem('token', response.data.token)//TODO broke into pieces
    localStorage.setItem('login', response.data.user_nicename)
    dispatch(setLogin(response.data.user_nicename))
    dispatch(setToken(response.data.token))
    navigate(`users/${inputsData.username}`)
  }

  const handleButtonClick = e => {
    navigate('register')
  }

  const [handleSubmit, handleInputChange, inputs] = useHandleFormSubmit(
    proceedFormLoginSubmit
  )

  return (
    <div className={defaultStyles.wrapper}>
      <form onSubmit={e => handleSubmit(e)} className={defaultStyles.form}>
        <label>
          <span className={defaultStyles.title}>username</span>
          <input
            className={defaultStyles.input}
            type='text'
            name='username'
            value={inputs.username ? inputs.username : ''}
            onChange={e => handleInputChange(e)}
          />
        </label>
        <label>
          <span className={defaultStyles.title}>password</span>
          <input
            className={defaultStyles.input}
            type='text'
            name='password'
            value={inputs.password ? inputs.password : ''}
            onChange={e => handleInputChange(e)}
          />
        </label>
        <input type='submit' className={defaultStyles.button} value='Login' />
      </form>
      <button
        onClick={e => handleButtonClick(e)}
        className={defaultStyles.button}
      >
        Register
      </button>
    </div>
  )
}

export default LoginForm
