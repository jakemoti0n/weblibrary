import React from 'react'
import axios from 'axios'


const api = axios.create({
  baseURL: 'http://localhost:8070',         
  timeout: 10000,
  withCredentials: false, 
});

export default api