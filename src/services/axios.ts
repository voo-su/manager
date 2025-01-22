import axios from 'axios'

const instance = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_API}/manager`,
  timeout: 1000
})

export default instance
