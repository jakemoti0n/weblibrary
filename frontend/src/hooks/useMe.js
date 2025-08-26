import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";
import { useAuthStore } from "../store/useAuthStore";

export default function useMe(enabled = true) {
    const setUser = useAuthStore((s) => s.setUser);
    const clear = useAuthStore((s) => s.clear);

    return useQuery({
        queryKey: ["auth", "me"],
        queryFn: async () => {
        const res = await api.get("/api/auth/me");
        return res.data; // { userId, username }
        },
        enabled,          // 필요할 때만 조회
        retry: false,
        onSuccess: (data) => setUser(data),
        onError: () => clear(),
    });
}
