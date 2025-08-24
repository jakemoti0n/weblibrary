import * as React from "react";
import { AppBar, Container, Toolbar, Typography, Stack, Link as MLink } from "@mui/material";
import { NavLink } from "react-router-dom";

const BEIGE = "#faf6ef";      
const green = "#589857";     
const green_DIM = "#569955ff";

const linkSx = {
  px: 2,
  py: 1.25,
  fontSize: 15,
  textDecoration: "none",
  color: green,
  borderRadius: 0,                
  transition: "all .15s ease",
  "&:hover": {
    textDecoration: "underline",  
    textUnderlineOffset: "4px",   
    textDecorationThickness: "3px", // 밑줄
  },
};

const activeSx = {
  textDecoration: "underline",
  textUnderlineOffset: "5px",
  textDecorationThickness: "3px",
  fontWeight: 600,
};


export default function NavBar() {
    return (
    <AppBar position="static" elevation={0} sx={{ bgcolor: BEIGE, color: green }}>
        <Container maxWidth="lg" disableGutters>
        <Toolbar disableGutters sx={{ px:0, minHeight: 'auto' }}>
          {/* 좌: 로고/브랜드 */}
            <Typography
            component={NavLink}
            to="/"
            sx={{
                mr: 4,
                fontWeight: 800,
                fontSize: 28,
                letterSpacing: "-0.02em",
                color: green,
                textDecoration: "none",
                "&:hover": { color: green_DIM },
            }}
            >
            logogogo
            </Typography>

            <Stack direction="row"  sx={{ flexGrow: 1 }}>
            {[
                { to: "/board", label: "게시판" },
                { to: "/books/recom", label: "추천 책장" },
                { to: "/", label: "책장 소식" },
                { to: "/books/edit", label: "책 수정" },
            ].map((item) => (
                <MLink
                key={item.to}
                component={NavLink}
                to={item.to}
                sx={({ isActive }) => ({
                    ...linkSx,
                    ...(isActive ? activeSx : null),
                })}
                >
                {item.label}
                </MLink>
            ))}
            </Stack>

            < Stack direction="row" spacing={0.5}>
            <MLink
                component={NavLink}
                to="/login"
                sx={linkSx}
            >
                로그인
            </MLink>
            <MLink
                component={NavLink}
                to="/login/signup"
                sx={linkSx}
            >
                회원가입
            </MLink>
            </Stack>
        </Toolbar>
        </Container>
    </AppBar>
    );
}
