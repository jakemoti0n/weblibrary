import React from "react";
import {Box,Container,Typography,Card,CardContent,Divider,} from "@mui/material";


const BEIGE = "#faf6ef";
const GREEN = "#589857";

const dummyReviews = [
    {
    id: 1,
    title: "흥부전",
    author: "양태석 (지은이),안선형 (그림)",
    review:"어려운 형편 속에서도 착한 마음을 잃지 않는 흥부의 삶을 담은 고전 이야기이다. 성격과 행동이 완전히 다른 흥부와 놀부 형제를 통해",
    cover:"https://image.aladin.co.kr/product/36898/35/cover500/8965796148_1.jpg",
    },
    {
    id: 2,
    title: "심청전",
    author: "송윤섭 (지은이),조성경 (그림)",
    review: "앞을 보지 못하는 아버지 심 봉사를 위해 스스로 제물이 되어 인당수에 몸을 던지는 심청의 효심을 그린 고전 이야기이다. ",
    cover:"https://image.aladin.co.kr/product/36595/86/cover500/896579613x_1.jpg",
    },
    {
    id: 3,
    title: "전우치전",
    author: "송재찬 (지은이),신혜원 (그림)",
    review:"백성들을 괴롭히는 임금과 권세 있는 벼슬아치를 혼내 준 서민의 영웅 전우치의 이야기와 어린 몸으로 간신들을 꾸짖고, 나라를 구한 조웅의 이야기",
    cover:"https://image.aladin.co.kr/product/36846/27/cover200/k752030309_1.jpg",
    },
    {
    id: 4,
    title: "홍길동전 : 세상을 뒤집다",
    author: "이영민,황인원 (지은이),김순영 (그림)",
    review: "홍길동전을 읽은 것이 언제였던지 잘 기억조차나지 않는다. 아직 초등학생인 우리 딸이 접하기엔 조금 어려운 고전일텐데 이렇게 아이들 눈높이에 맞춘 홍길동전 이야기가 세상에 나왔다.",
    cover:"https://image.aladin.co.kr/product/1451/30/coversum/8937835371_2.jpg",
    },
];

export default function RelayReviews() {
    return (
        <Box sx={{ bgcolor: BEIGE, py: { xs: 6, md: 8 },fontFamily: "KyoboHand, sans-serif","& .MuiTypography-root": {
            fontFamily: "inherit !important"} }} >
        <Container maxWidth="lg" >
            <Typography
            data-aos="fade-up" data-aos-offset="120"
            align="center"
            sx={{
                fontWeight: 900,
                fontSize: { xs: 24, sm: 28, md: 32 },
                color: GREEN,
                mb: 1,
            }}
            >
            릴레이 독후감
            </Typography>
            <Typography data-aos="fade-up" data-aos-offset="120" align="center" sx={{ color: "rgba(0,0,0,.65)", mb: 4 }}>
            함께 읽은 책을 나누며 성장의 순간을 기록해 보세요.
            </Typography>

        <Box
            data-aos="fade-up" data-aos-offset="120"
            sx={{
                display: "grid",
                gap: 3,
                gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(4, 1fr)",
                },
                alignItems: "stretch",
            }}
            >
            {dummyReviews.map((item) => (
                <Card
                key={item.id}
                sx={{
                    height: 340,            
                    width: "100%",          
                    minWidth: 0,          
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: 3,
                    boxShadow: "0 4px 12px rgba(0,0,0,.08)",
                    "&:hover": { boxShadow: "0 6px 20px rgba(0,0,0,.15)" },
                }}
                >
                <Box
                    sx={{
                    height: 150,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    px: 2,
                    }}
                >
                    <Box
                    component="img"
                    src={item.cover}
                    alt={item.title}
                    sx={{
                        width: 88,
                        height: 120,
                        objectFit: "cover",
                        borderRadius: 1,
                        boxShadow: "0 6px 16px rgba(0,0,0,.12)",
                    }}
                    />
                </Box>

                <Divider sx={{ opacity: 0.15, my: 0 }} />

                <CardContent
                    sx={{
                    flex: 1,
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    gap: 0.5,
                    minWidth: 0,
                    px: 2,
                    }}
                >
                    <Typography
                    sx={{
                        fontWeight: 700,
                        color: "#333",
                        lineHeight: 1.4,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        minWidth: 0,
                    }}
                    title={item.title}
                    >
                    {item.title}
                    </Typography>

                    <Typography variant="caption" sx={{ color: "rgba(0,0,0,.55)" }}>
                    {item.author}
                    </Typography>

                    <Typography
                    variant="body2"
                    sx={{
                        color: "rgba(0,0,0,.78)",
                        lineHeight: 1.6,
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 3,
                        overflow: "hidden",
                        textOverflow: "ellipsis",   
                        whiteSpace: "normal",       
                        wordBreak: "break-word",
                        overflowWrap: "anywhere",
                        minWidth: 0,
                    }}
                    title={item.review}
                    >
                    {item.review}
                    </Typography>
                </CardContent>
                </Card>
            ))}
            </Box>
        </Container>
        </Box>
    );
}
