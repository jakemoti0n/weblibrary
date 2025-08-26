import { Navigate, Outlet } from "react-router";
import useMe from "../hooks/useMe";
import { useAuthStore } from "../store/useAuthStore";


export default function ProtectedRoute() {
  const cachedUser = useAuthStore((s) => s.user);
  const { data, isLoading, isError } = useMe(!cachedUser);

  if (!cachedUser && isLoading) return null; // 로딩 스피너 UI 넣어도 됨

  const authed = !!(cachedUser || data);
  if (!authed || isError) return <Navigate to="/login" replace />;

  return <Outlet />;
}