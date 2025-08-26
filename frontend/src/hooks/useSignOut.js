import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../utils/api";
import { useAuthStore } from "../store/useAuthStore";

export default function useSignOut(opts = {}) {
  const qc = useQueryClient();
  const clear = useAuthStore((s) => s.clear);

  return useMutation({
    mutationKey: ["auth", "logout"],
    mutationFn: async () => {
      await api.post("/api/auth/logout");
    },
    onSuccess: async () => {
      clear();
      await qc.invalidateQueries({ queryKey: ["auth", "me"] });
      opts.onSuccess?.();
    },
  });
}