import axios from "axios";

const API_KEY = import.meta.env.VITE_APP_API_KEY;

//console.log("Aladin API Key:", API_KEY);

const api = axios.create({
  //baseURL: "https://nnbook-production.up.railway.app/api/aladin",
  baseURL: "/ttb/api", // 로컬 개발용
  timeout: 5000,
  params: {
    ttbkey: API_KEY,
    Output: "js",
    Version: "20131101",
  },
});


// 요청 인터셉터
api.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

// 응답 인터셉터
api.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export default api;