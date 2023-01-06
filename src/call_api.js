import axios from 'axios'

// export const API_URL = 'https://demo-2023.vracex.com.vn'
export const API_URL = 'http://127.0.0.1:8000'

export const getDataAPI = async (url, token) => {
  const res = await axios.get(`${API_URL}/api/${url}`, {
    headers: { Authorization: "Bearer " + token }
  })
  return res
}

export const postDataAPI = async (url, post, token) => {
  const res = await axios.post(`${API_URL}/api/${url}`, post, {
    headers: { Authorization: "Bearer " +  token }
  })
  return res
}

export const putDataAPI = async (url, post, token) => {
  const res = await axios.put(`${API_URL}/api/${url}`, post, {
    headers: { Authorization: "Bearer " +  token }
  })

  return res
}

export const patchDataAPI = async (url, post, token) => {
  const res = await axios.patch(`${API_URL}/api/${url}`, post, {
    headers: { Authorization: "Bearer " +  token }
  })
  return res
}

export const deleteDataAPI = async (url, token) => {
  const res = await axios.delete(`${API_URL}/api/${url}`, {
    headers: { Authorization: "Bearer " +  token }
  })
  return res
}

export const login = async (url, body) => {
  const res = await axios.post('/api/iam/mb/auth/authenticate', body, {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    }
  })
  return res
}