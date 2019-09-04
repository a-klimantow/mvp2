import axios from "axios"

export function useRequest() {
  const _baseUrl = "https://transparent-staging.herokuapp.com"

  // аутинтификация пользователя, получает token
  function auth(data, callback) {
    axios
      .post(`${_baseUrl}/ManagingFirmUsers/auth`, { ...data })
      .then(res => res.data.successResponse)
      .then(({ token, refreshToken }) => {
        console.log('connect')
        localStorage.setItem("token", token)
        localStorage.setItem("refreshToken", refreshToken)
        callback()
      })
  }

  // обновление token
  function refresh(method, ...props) {
    const data = {
      token: localStorage.getItem("token"),
      refreshToken: localStorage.getItem("refreshToken")
    }

    axios
      .post(`${_baseUrl}​/ManagingFirmUsers/refreshToken`, { ...data })
      .then(res => res.data.successResponse)
      .then(({ token, refreshToken }) => {
        localStorage.setItem("token", token)
        localStorage.setItem("refreshToken", refreshToken)
        method(...props)
      })
  }

  // запрос на получение данных
  function getData(url, callback) {
    const headers = { Authorization: `Bearer ${localStorage.getItem("token")}` }

    axios
      .get(`${_baseUrl}${url}`, {
        headers: { ...headers }
      })
      .then(res => res.data.successResponse)
      .then(res => {
        if (res.items) {
          callback(res.items)
        } else {
          callback(res)
        }
      })
      .catch(({ response, request }) => {
        if (response.status === 401) {
          refresh(getData, url, callback)
        }
      })
  }

  return { auth, getData }
}