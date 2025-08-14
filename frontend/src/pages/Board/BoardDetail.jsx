import { useEffect, useState } from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import api from '../../utils/api';

export default function BoardDetail() {
  const { id: boardId } = useParams();
  const [data, setData] = useState(null);
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(true);

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
    bookName,
    bookScore,
    boardContent,
    createdAt,
    views
  } = data;

  const fmtDate = (d) => {
    if (!d) return '';
    // 백엔드 포맷에 따라 조정 (ISO면 이대로 OK)
    const dt = new Date(d);
    if (Number.isNaN(dt.getTime())) return d;
    return `${dt.getFullYear()}.${String(dt.getMonth()+1).padStart(2,'0')}.${String(dt.getDate()).padStart(2,'0')} ${String(dt.getHours()).padStart(2,'0')}:${String(dt.getMinutes()).padStart(2,'0')}`;
  };

  return (
    <Container sx={{ py: 3, maxWidth: 1000 }}>
      <Paper sx={{ p: { xs: 2, md: 3 } }}>
        {/* 제목 */}
        <Typography
          variant="h4"
          sx={{ fontFamily: 'STUNNING-Bd', mb: 1.5, lineHeight: 1.3}}
        >
          {title || '(제목 없음)'}
        </Typography>

        {/* 메타 정보: 작성자 / 책 / 평점 / 날짜 / 조회수 */}
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={1.5}
          justifyContent="space-between"
          alignItems={{ xs: 'flex-start', sm: 'center' }}
          sx={{ color: 'text.secondary', mb: 2 }}
        >
          <Stack direction="row" spacing={1.5} alignItems="center" flexWrap="wrap">
            <Typography variant="body2" sx={{ fontSize: 17}}>작성자 : {userName ?? '-'}</Typography>
            {bookName && <Chip label={`도서: ${bookName}`} size="small" />}
            {typeof bookScore === 'number' && (
              <Chip label={`평점: ${bookScore}`} size="small" />
            )}
          </Stack>

          <Stack direction="row" spacing={2} sx={{ color: 'text.disabled' }}>
            <Typography variant="body2">{fmtDate(createdAt)}</Typography>
            {typeof views === 'number' && (
              <Typography variant="body2">조회 {views}</Typography>
            )}
          </Stack>
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

        {/* 하단 버튼: 목록으로만 (좋아요/공유/댓글 등 전부 제외) */}
        <Stack direction="row" justifyContent="space-between">
          <Button variant="outlined" component={RouterLink} to="/board">
            목록
          </Button>
          {/* 필요 시 권한 있을 때만 수정/삭제 노출 (옵션)
          {data.editable && (
            <Stack direction="row" spacing={1}>
              <Button variant="text">수정</Button>
              <Button variant="text" color="error">삭제</Button>
            </Stack>
          )}
          */}
        </Stack>
      </Paper>
    </Container>
  );
}
