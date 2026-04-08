import axios from 'axios'

const api = axios.create({
  baseURL: '/api',
  timeout: 5000,
  withCredentials: true // 쿠키 httpOnly일때 필수
})

api.interceptors.request.use(
  (response) => {
    // console.log('요청 보내기 전에 실행')
    // 응답 데이터가 문자열이고 "<!DOCTYPE"으로 시작한다면 에러로 처리
    if (typeof response.data === 'string' && response.data.includes('<!DOCTYPE html>')) {
      return Promise.reject(new Error('API 응답이 올바르지 않습니다. (HTML 수신)'))
    }
    return response
  },
  (error) => {
    // console.log('요청 보낼 때 에러 발생')
    return Promise.reject(error)
  },
)

api.interceptors.response.use(
  (config) => {
    // console.log('응답 받아서 화면에 띄우기 전에 실행')
    return config
  },
  (error) => {
    // console.log('응답 받을 때 에러 발생')
    return Promise.reject(error)
  },
)

export default api
