import axios from 'axios'
import { localCache } from './Cache'

let baseURL = ''

if (import.meta.env.PROD) {
  baseURL = 'http://152.136.185.210:4000'
} else {
  baseURL = 'http://152.136.185.210:5000'
}

const service = axios.create({
  baseURL,
  timeout: 10000
})

service.interceptors.request.use(config => {
  const token = localCache.getItem('token')
  if (token && typeof config.headers?.set === 'function') {
    config.headers.set('Authorization', 'Bearer ' + token)
  }

  return config
})

service.interceptors.response.use(
  res => {
    return res.data
  },
  err => {
    console.error(err)
  }
)

export default service
