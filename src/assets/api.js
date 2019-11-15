import {
  SUGGEST_NEWS,
  GET_JWT_TOKEN,
  REGISTER_USER,
  UPDATE_NEWS_BY_ID,
  GET_SINGLE_NEWS_BY_ID
} from './URLS'
import axios from 'axios'

export const handleSubmitFormSuggestNews = data => {
  const formedData = processDataToFormData(data)
  const makeRequest = async bodyData => {
    const response = await axios({
      url: SUGGEST_NEWS,
      method: 'post',
      data: bodyData
    })
    console.log(response.data)
    return response
  }
  return makeRequest(formedData)
}

export const sendLoginInfo = inputsData => {
  const makeRequest = async inputsData => {
    const userInfo = processDataToFormData(inputsData)
    console.log(userInfo.getAll('username'))
    console.log(userInfo.getAll('password'))
    const response = await axios({
      method: 'post',
      url: GET_JWT_TOKEN,
      data: userInfo
    })
    console.log(response)
    return response
  }
  return makeRequest(inputsData)
}

export const sendRegistrationInfo = inputsData => {
  console.log(inputsData)
  const formedData = processDataToFormData(inputsData)
  const makeRequest = async formData => {
    const response = await axios({
      method: 'post',
      url: REGISTER_USER,
      data: formData
    })
    console.log(response)
    return response
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
    console.log(response)
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

export const sendInfoToUpdatePost = (data,token='') => {
  const makeRequest = async () => {
    const formedData = processDataToFormData(data)
    formedData.append('file', data.file)
    console.log(token)
    const response = await axios({
      method: 'post',
      url: `${UPDATE_NEWS_BY_ID}${data.ID}`,
      data: formedData,
      headers: { 'Content-Type': 'multipart/form-data',Authorization: `Bearer ${token}` }
    })
    console.log(response)
    return response
  }
  return makeRequest(data)
}

const processDataToFormData = data => {
  const formData = new FormData()
  for (let key in data) {
    if (key === 'file') {
      formData.append(key, data[key])
    }
    formData.set(key, data[key])
  }
  return formData
}
