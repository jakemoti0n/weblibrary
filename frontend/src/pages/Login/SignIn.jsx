import React, { useState } from "react";
import {
  Box,
  Paper,
  TextField,
  Button,
  Stack,
  Link,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";
import logo from "../../assets/booky.png";

export default function SignIn() {
  const [values, setValues] = useState({ id: "", pw: "", showPw: false });

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  const toggleShowPw = () =>
    setValues((v) => ({ ...v, showPw: !v.showPw }));

  const handleSubmit = (e) => {
    e.preventDefault();
//     try {
//     const res = await axios.post(
//       "/api/auth/login", // Spring Security에서 처리
//       {
//         username: values.id,
//         password: values.pw,
//       },
//       {
//         withCredentials: true, // 세션 쿠키 유지용 (중요)
//       }
//     );

//     alert("로그인 성공!");
//     navigate("/"); // 홈이나 마이페이지 등 이동
//   } catch (err) {
//     alert("로그인 실패: " + (err.response?.data || err.message));
//   }
 };

  const inputStyle = {
    bgcolor: "#f1f3f5",
    borderRadius: 1,
    "& .MuiFilledInput-underline:before, & .MuiFilledInput-underline:after": {
      borderBottom: "none",
    },
    "&:hover": { bgcolor: "#eef0f2" },
    minHeight: 48,
  };

  return (
    <Box
      sx={{
        position: "fixed",
        inset: 0,
        bgcolor: "#f1f3f5",
        display: "grid",
        placeItems: "center",
        p: { xs: 2, sm: 4 },
        overflow: "hidden",
      }}
    >
      <Paper
        elevation={2}
        sx={{
          width: "100%",
          maxWidth: 400,
          p: { xs: 3, sm: 4 },
          borderRadius: 2,
        }}
      >
        {/* 로고 */}
        <Box sx={{ textAlign: "center", mb: 3 }}>
          <Link component={RouterLink} to="/" underline="none">
            <img
              src={logo}
              alt="logo"
              style={{
                maxWidth: "200px",
                height: "auto",
                cursor: "pointer",
              }}
            />
          </Link>
        </Box>

        {/* 폼 */}
        <Box component="form" onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <TextField
              name="id"
              value={values.id}
              onChange={onChange}
              placeholder="아이디를 입력해주세요"
              fullWidth
              size="medium"
              variant="filled"
              InputProps={{ sx: inputStyle }}
            />
            <TextField
              name="pw"
              value={values.pw}
              onChange={onChange}
              placeholder="비밀번호"
              type={values.showPw ? "text" : "password"}
              fullWidth
              size="medium"
              variant="filled"
              InputProps={{
                sx: inputStyle,
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="비밀번호 보기"
                      onClick={toggleShowPw}
                      edge="end"
                    >
                      {values.showPw ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <Button
              type="submit"
              variant="contained"
              sx={{
                mt: 0.5,
                py: 1.2,
                borderRadius: 1,
                bgcolor: "#FFD700",
                "&:hover": { bgcolor: "#FFC300" },
                textTransform: "none",
                fontWeight: 600,
                color: "#4B3F2F",
              }}
              fullWidth
            >
              로그인
            </Button>

            <Box sx={{ textAlign: "center", mt: 1 }}>
              <Link
                component={RouterLink}
                to="/login/signup"
                underline="hover"
                sx={{ color: "#4B3F2F", fontWeight: 500 }}
              >
                아이디가 없으신가요? 회원가입
              </Link>
            </Box>
          </Stack>
        </Box>
      </Paper>
    </Box>
  );
}