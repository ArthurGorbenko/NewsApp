import React from 'react'
import { Link } from '@reach/router'
import axios from 'axios'
import { connect } from 'react-redux'
import defaultStyles from '../LoginForm/login-form.module.css'
import style from './user-menu.module.css'

const UserMenu = login => {
  const sendNewNewsPost = data => {
    const makeRequest = async () => {
      const formData = new FormData()
      for (let key in data) {
        if (key !== 'file') formData.set(key, data[key])
      }
      formData.append('media', data.file)
      console.log(formData.getAll('name'))
      const response = await axios({
        method: 'post',
        url: `http://213.111.67.158/wordpress/wp-json/news/v1/published`,
        data: formData,
        config: { headers: { 'Content-Type': 'multipart/form-data' } }
      })
      console.log(response)
    }
    makeRequest()
  }
  return (
    <div className={style.wrapper}>
      <button className={defaultStyles.button}>
        <Link className={style.link} to='updateForm'>
          Update news
        </Link>
      </button>
      <button className={defaultStyles.button}>
        <Link className={style.link} to='suggestNews'>
          Suggest news
        </Link>
      </button>
    </div>
  )
}
const mapStateToProps = state => {
  const { login } = state
  return { login }
}
export default connect(mapStateToProps)(UserMenu)
