import axios from 'axios'

export const axiosWithHeader = () => {
  const authToken = localStorage.getItem('key')
  return axios.create({
    headers: {
      Authorization: authToken
    },
    baseURL: 'http://localhost:5000'
  })
}