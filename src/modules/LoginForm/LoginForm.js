import React from 'react'
import useHandleFormSubmit from '../useHandleFormSubmit'
import { navigate } from '@reach/router'
import defaultStyles from '../LoginForm/login-form.module.css'
import { sendLoginInfo } from '../../lib/api'
import { useDispatch } from 'react-redux'
import { setToken, setLogin } from '../../redux/actions'
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'

const LoginForm = () => {
  const dispatch = useDispatch()
  const proceedFormLoginSubmit = async inputsData => {
    const response = await sendLoginInfo(inputsData)
    if (response) {
      localStorage.setItem('token', response.data.token) // TODO broke into pieces
      localStorage.setItem('login', response.data.user_nicename)
      dispatch(setToken(response.data.token))
      dispatch(setLogin(response.data.user_nicename))
      navigate(`users/${inputsData.username}`)
    }
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
            required
          />
        </label>
        <label>
          <span className={defaultStyles.title}>password</span>
          <input
            className={defaultStyles.input}
            type='password'
            name='password'
            value={inputs.password ? inputs.password : ''}
            onChange={e => handleInputChange(e)}
            required
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

export default function LoginErrorBoundary (props) {
  return (
    <ErrorBoundary>
      <LoginForm {...props} />
    </ErrorBoundary>
  )
}
