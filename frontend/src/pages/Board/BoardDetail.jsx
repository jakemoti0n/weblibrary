import { useEffect, useState } from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import {Typography, Divider, Box} from "@mui/material";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import api from '../../utils/api';
import Rating from '@mui/material/Rating';
import { useNavigate } from 'react-router-dom'
import Comments from "../../components/Comments";
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

export default function BoardDetail() {
  const navigate = useNavigate();
  const { id: boardId } = useParams();
  const [data, setData] = useState(null);
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(true);

    // 취소 useEffect
    const handleDelete = async () => {
      const ok = window.confirm("정말 삭제하시겠습니까?");
      if (!ok) return; 
    
      try {
      await api.delete(`/api/board/${boardId}`, {
    });
      alert('삭제완료 되었습니다.');
      navigate(`/board`); 

    } catch (error) {
      console.error('삭제 오류:', error);
      alert('삭제 중 오류가 발생했습니다.');
    }

};

    // 내용 받아오는 useEffect
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await api.get(`/api/board/${boardId}`);
        setData(res.data);
      } catch (e) {
        setErr(e.message || '불러오기 실패');
      } finally {
        setLoading(false);
      }
    })();
  }, [boardId]);

  if (loading) return <Container sx={{ py: 3 }}>로딩중…</Container>;
  if (err) return <Container sx={{ py: 3, color: 'error.main' }}>에러: {err}</Container>;
  if (!data) return null;

  const {
    title,
    userName,
    bookScore,
    boardContent,
    createdAt,
  } = data;

  const fmtDate = (d) => {
    if (!d) return '';
    const dt = new Date(d);
    if (Number.isNaN(dt.getTime())) return 'type error';
    return `${dt.getFullYear()}.${String(dt.getMonth()+1).padStart(2,'0')}.${String(dt.getDate()).padStart(2,'0')} ${String(dt.getHours()).padStart(2,'0')}:${String(dt.getMinutes()).padStart(2,'0')}`;
  };

  return (
    console.log({createdAt}),
    <Container sx={{ py: 3, maxWidth: 1000 }}>
      <Paper sx={{
         p: { xs: 2, md: 3 },
         border: '1px solid rgba(0, 0, 0, 0.2)', // 테두리 색 & 두께
         boxShadow: '0px 2px 8px rgba(0,0,0,0.1)' // 그림자 유지
         }}>
        {/* 제목 */}
        <Typography
          variant="h4"
          sx={{ fontFamily: 'STUNNING-Bd', mb: 1.5, lineHeight: 1.3}}
        >
          {title || '(제목 없음)'}
        </Typography>

        {/* 메타 정보: 작성자 / 책 / 평점 / 날짜 / 조회수 */}
            <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between" // ✅ 좌-우 끝 배치
                sx={{ width: '100%' }}
              >
                {/* 왼쪽: 작성자 */}
                <Typography variant="body1" sx={{ fontSize: 20 }}>
                  작성자: {userName ?? '-'}
                </Typography>

                {/* 오른쪽: 평점 */}
                {typeof bookScore === 'number' && (
                  <Chip
                    label={
                      <Stack direction="row" alignItems="center" spacing={0.5}>
                     <Rating value={Number(bookScore) || 0} precision={0.5} readOnly size="small" />
                      </Stack>
                    }
                    size="small"
                  />
                )}
              </Stack>
  {/* 날짜 / 조회수 */}
       <Stack direction="row" spacing={2} sx={{ color: 'text.disabled' }}>
    
          <Typography variant="body2">작성일: {fmtDate(createdAt)}</Typography>
          {/* 조회수 */}
          {/* {typeof views === 'number' && (
            <Typography variant="body2">조회 {views}</Typography>
          )} */}
         
        {/* {typeof views === 'number' && (
          <Typography variant="body2" sx={{ color: 'text.disabled' }}>
          조회 {views}
          </Typography>)} */}
       </Stack>
  

        <Divider sx={{ mb: 2 }} />

        {/* 본문 */}
        <Typography
          component="div"
          sx={{
            whiteSpace: 'pre-wrap',
            lineHeight: 1.85,
            fontSize: 16,
            minHeight: 160
          }}
        >
          {boardContent || '(내용 없음)'}
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* 하단 버튼: 목록 */}
        <Stack direction="row" justifyContent="space-between">
          <Button variant="contained" component={RouterLink} to="/board"
          style={{ 
            backgroundColor: "#4caf50", }}>
            목록
          </Button>
        <Stack direction="row" spacing={2} alignItems="center">
          <Button
           variant="outlined" 
           onClick={() => navigate(`/board/${boardId}/update`)}
           style={{ 
            backgroundColor: "#50e054ff",   
            color: "white",
            padding: "15px 25px",
            fontSize: "15px",
            fontWeight: "bold",
            border: "none",
            borderRadius: "8px",
          }}>수정</Button>
          <Button variant="contained"
           onClick={handleDelete}
           style={{ 
            backgroundColor: "#4caf50", 
            color: "white",
            padding: "15px 25px",
            fontSize: "15px",
            fontWeight: "bold",
            border: "none",
            borderRadius: "8px",
          }}>삭제</Button>
        </Stack>
        </Stack>

    <Stack direction="row" alignItems="center" justifyContent="center" >
      <button variant="outlined"><ThumbUpOutlinedIcon/>추천</button>
      <button variant="contained">공감<FavoriteBorderOutlinedIcon/></button>
    </Stack>

       {/* 댓글 영역 */}
      <Comments boardId={boardId} />    
      </Paper>
    </Container>
  );
}

