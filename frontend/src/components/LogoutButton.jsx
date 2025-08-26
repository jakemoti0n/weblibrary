import React from "react";
import { Button, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import useSignOut from "../hooks/useSignOut";

const GREEN = "#589857";

export default function LogoutButton({ variant = "outlined", after = "/" }) {
    const navigate = useNavigate();
    const { mutate: signOut, isPending } = useSignOut({
        onSuccess: () => navigate(after, { replace: true }),
    });

    return (
        <Button
        variant={variant}
        onClick={() => signOut()}
        disabled={isPending}
        sx={{
        borderColor: GREEN,
        color: GREEN,
        fontWeight: 600,
        fontFamily:"'KyoboHand','STUNNING-Bd',sans-serif",
        "&:hover": {
            borderColor: GREEN,
          bgcolor: "rgba(88,152,87,0.08)", // 연한 초록 배경 hover 효과
        },
        }}
    >
        {isPending ? <><CircularProgress size={18} sx={{ mr: 1 }} />로그아웃 중...</> : "로그아웃"}
        </Button>
    );
    }
