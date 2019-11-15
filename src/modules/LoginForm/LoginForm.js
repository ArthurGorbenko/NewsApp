import React from 'react'
import style from './login-form.module.css'
import useHandleFormSubmit from '../useHandleFormSubmit'
import { setToken, setLogin } from '../../redux/actions'
import { connect } from 'react-redux'
import { navigate } from '@reach/router'
import defaultStyles from '../LoginForm/login-form.module.css'
import {sendLoginInfo} from '../../assets/api'

const LoginForm = ({ setToken, setLogin }) => {
  const proceedFormLoginSubmit = async inputsData => {
    const response = await sendLoginInfo(inputsData)
    setLogin( await response.data.user_nicename)//TO_DO break into pieces
    setToken( await response.data.token)
    localStorage.setItem('token', response.data.token)
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
            value={inputs.username}
            onChange={e => handleInputChange(e)}
          />
        </label>
        <label>
          <span className={defaultStyles.title}>Password</span>
          <input
            className={defaultStyles.input}
            type='text'
            name='password'
            value={defaultStyles.password}
            onChange={e => handleInputChange(e)}
          />
        </label>
        <input type='submit' className={defaultStyles.button} value='Login' />
      </form>
      <button onClick={e => handleButtonClick(e)} className={defaultStyles.button}>
        Register
      </button>
    </div>
  )
}

export default connect(
  null,
  { setToken, setLogin }
)(LoginForm)
