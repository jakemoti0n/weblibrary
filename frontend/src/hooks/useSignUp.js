import { useMutation } from "@tanstack/react-query";
import api from "../utils/api";


export default function useSignUp(opts = {}) {
  const qc = useQueryClient();

  return useMutation({
    mutationKey: ["auth", "signup"],
    mutationFn: async ({ username, password, email }) => {
      const res = await api.post("/api/auth/signup", { username, password, email });
      return res.data; // { userId, username }
    },
    onSuccess: async (data) => {
      await qc.invalidateQueries({ queryKey: ["auth", "me"] });
      opts.onSuccess?.(data);
    },
    onError: (err) => {
      const msg =
        err?.status === 409
          ? err?.message || "이미 존재하는 계정 정보입니다."
          : err?.message || "회원가입 실패";
      opts.onError?.(msg);
    },
  });
}