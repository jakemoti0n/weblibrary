import { useMutation } from "@tanstack/react-query";
import api from "../utils/api";

const signIn = async (formData) => {
  const response = await api.post("/api/auth/login", formData);
  return response.data;
};

// 훅 정의
export default function useSignIn() {
  return useMutation({
    mutationFn: signIn,
    //성공
    onSuccess: () => {
      alert("로그인 성공!");
      window.location.href = "/";
    },

    //에러
    onError: (error) => {
      if (error?.response?.status === 401) {
        alert("아이디 또는 비밀번호가 일치하지 않습니다.");
      } else {
        alert("에러 발생: " + (error.response?.data || error.message));
      }
    },

    //요청 종료 시 공통 처리
    onSettled: () => {
      console.log("로그인 요청 종료됨");
    },
  });
}
