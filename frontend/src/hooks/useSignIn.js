import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../utils/api";
import { useAuthStore } from "../store/useAuthStore";

export default function useSignIn(opts = {}) {
  const qc = useQueryClient();
  const setUser = useAuthStore((s) => s.setUser);

  return useMutation({
    mutationKey: ["auth", "login"],
    mutationFn: async ({ username, password }) => {
      const res = await api.post("/api/auth/login", { username, password });
      return res.data; // { userId, username }
    },
    onSuccess: async (data) => {
      setUser(data);
      await qc.invalidateQueries({ queryKey: ["auth", "me"] });
      opts.onSuccess?.(data);
    },
    onError: (err) => {
      const msg =
        err?.status === 401
          ? "아이디 또는 비밀번호가 올바르지 않습니다."
          : err?.message || "로그인 실패";
      opts.onError?.(msg);
    },
  });
}

// {
//   mutate,          // 실제로 요청을 실행하는 함수
//   mutateAsync,     // Promise 기반으로 실행하는 함수
//   isPending,       // 요청 중인지 여부
//   isSuccess,       // 성공 여부
//   isError,         // 실패 여부
//   data,            // 결과 데이터
//   error,           // 에러 정보
//   ...
// }