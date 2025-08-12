import React from 'react'
import axios from 'axios'


const api = axios.create({
  baseURL: '/api',          // 프록시 통해 백엔드로 보낼 거라 상대경로 사용
  timeout: 10000,
  withCredentials: false,   // 세션/쿠키 쓰면 true
});

export default api