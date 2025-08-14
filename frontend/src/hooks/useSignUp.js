import { useMutation } from "@tanstack/react-query";
import api from "../utils/api";
import { useNavigate } from "react-router";

const signUp = async (formData) => {
  const res = await api.post("/api/auth/signup", formData);
  return res.data;
};

export default function useSignUp() {
  const navigate = useNavigate();
  return useMutation({ mutationFn: signUp ,
    onSuccess: () => {
      alert("회원가입 성공!");
      navigate('/login');
    },
    
    onError: (error) => {
      if (error?.response?.status === 409) {
        alert("이미 존재하는 아이디입니다.");
      } else {
        alert("에러 발생: " + (error.response?.data || error.message));
      }
    },
    //  무조건 실행됨 (성공/실패 상관없이)
    onSettled: () => {
      console.log("요청 종료됨");
    },
  });
}
