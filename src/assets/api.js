import {
  SUGGEST_NEWS,
  GET_JWT_TOKEN,
  REGISTER_USER,
  UPDATE_NEWS_BY_ID,
  GET_SINGLE_NEWS_BY_ID,
  GET_ALL_NEWS
} from './URLS'
import axios from 'axios'
import { navigate } from '@reach/router'

export const fetchNews = async () => {
  const response = await axios({
    method: 'get',
    url: GET_ALL_NEWS
  })
  return response
}

export const handleSubmitFormSuggestNews = data => {
  const formedData = processDataToFormData(data)
  const makeRequest = async bodyData => {
    try {
      const response = await axios({
        url: SUGGEST_NEWS,
        method: 'post',
        data: bodyData
      })
      if (response.status === 200) {
        navigate(`success/${response.data.ID}`, { data: response.data })
      }
      return response
    } catch (err) {
      console.log(err)
    }
  }
  return makeRequest(formedData)
}

export const sendLoginInfo = inputsData => {
  const makeRequest = async inputsData => {
    const userInfo = processDataToFormData(inputsData)
    try {
      const response = await axios({
        method: 'post',
        url: GET_JWT_TOKEN,
        data: userInfo
      })
      return response
    } catch (err) {
      console.log(err)
    }
  }
  return makeRequest(inputsData)
}

export const sendRegistrationInfo = inputsData => {
  const formedData = processDataToFormData(inputsData)
  const makeRequest = async formData => {
    try {
      const response = await axios({
        method: 'post',
        url: REGISTER_USER,
        data: formData
      })
      return response
    } catch (err) {
      console.log(err)
    }
  }
  return makeRequest(formedData)
}

export const requestNewsDataToUpdate = (data, token) => {
  const { news_id } = data
  const makeRequest = async news_id => {
    const response = await axios({
      method: 'get',
      url: `${GET_SINGLE_NEWS_BY_ID}${news_id}`,
      headers: { Authorization: `Bearer ${token}` }
    })
    const { data } = response
    return {
      ID: data.ID,
      name: data.author_name,
      email: data.author_email,
      topic: data.post_title,
      category: data.category,
      message: data.post_content,
      imageUrl: data.attachment_url
    }
  }
  return makeRequest(news_id)
}

export const sendInfoToUpdatePost = (data, token = '') => {
  const makeRequest = async () => {
    const formedData = processDataToFormData(data)
    try {
      const response = await axios({
        method: 'post',
        url: `${UPDATE_NEWS_BY_ID}${data.ID}`,
        data: formedData,
        headers: { Authorization: `Bearer ${token}` }
      })
      return response
    } catch (err) {
      console.log(err)
    }
  }
  return makeRequest(data)
}

const processDataToFormData = data => {
  const formData = new FormData()
  for (let key in data) {
    if (key === 'file') {
      formData.append('file', data[key])
      continue
    }
    formData.set(key, data[key])
  }
  return formData
}
