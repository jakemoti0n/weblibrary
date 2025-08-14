import { useMutation } from "@tanstack/react-query";
import api from "../utils/api";

const signInApi = async ({ username, password }) => {
  const res = await api.post("/api/auth/login", { username, password });
  return res.data;
};

export default function useSignIn(opts) {
  return useMutation({
    mutationFn: signInApi,
    onSuccess: (data) => {
      opts?.onSuccess?.(data);
    },
    onError: (error) => {
      const msg = error?.response?.data || error.message;
      opts?.onError?.(msg);
    },
  });
}
