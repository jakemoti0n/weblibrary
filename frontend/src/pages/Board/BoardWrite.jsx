import { useState, useMemo } from 'react';

import { Container, Paper, Box, TextField, Button, Stack, Typography } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import { useNavigate } from 'react-router-dom';
import "../../styles/BoardWrite.style.css";
import api from '../../utils/api';


export default function BoardWrite() {
  const navigate = useNavigate();
  const [bookName, setBookName] = useState('');
  const [title, setTitle] = useState('');
  const [boardContent, setBoardContent] = useState('');
  const [bookScore, setBookScore] = useState(0);
  const dummyUserId = 21; // 테스트용
  const dummyUserName = '테스트유저';

    const scoreOptions = useMemo(
    () => Array.from({ length: 11 }, (_, i) => (i * 0.5).toFixed(1)),
    []
  );

  const handleSubmit = async () => {
    if (!title.trim() || !boardContent.trim()) {
      alert('제목과 내용을 입력해 주세요.');
      return;
    }
    try {
      await api.post('/api/board/insert', {
      bookName,
      title,
      boardContent,
      bookScore,
      userId: dummyUserId,     
      userName: dummyUserName 
    });

      alert('작성완료 되었습니다.');
      navigate('/board'); // 게시판 목록 페이지로 이동

    } catch (error) {
      console.error('게시글 작성 실패:', error);
      alert('작성 중 오류가 발생했습니다.');
    }

};
 
  return (
     <Container
          maxWidth={false}
          sx={{ maxWidth: 1200, mx: 'auto', px: 2, mt: 4 }} // ★ CHANGED: 컨테이너 최대폭 커스텀
        >
      <Paper className="write-paper" elevation={0}>
        <Typography variant="h5" className="write-title" 
        sx={{ 
          fontSize: 40,
              marginBottom: 2,
              fontWeight: "bold",
              fontFamily: "'KyoboHand', sans-serif",
         }}>리뷰 작성</Typography>
        

        {/* 책 제목 */}
        <Box className="form-row">
          <Typography 
          className ="dfdfdfdf"
          sx={{ 
            fontSize: 25,
              marginBottom: 1,
              fontWeight: "bold",
              fontFamily: "'KyoboHand', sans-serif",
         }}
         
         >책 제목</Typography>
          <TextField
            value={bookName}
            onChange={(e) => setBookName(e.target.value)}
            placeholder="책 제목을 입력하세요"
            fullWidth
            size="medium"
            className="bookName-input"
            inputProps={{ maxLength: 100 }}
          />
        </Box>
       
        {/* 제목 */}
        <Box className="form-row">
          <Typography className="field-label"
          sx={{ fontSize: 25,
              marginBottom: 1,
              fontWeight: "bold",
              fontFamily: "'KyoboHand', sans-serif",
         }}>제목</Typography>
          <TextField
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="제목을 입력하세요"
            fullWidth
            size="medium"
            className="title-input"
            inputProps={{ maxLength: 100 }}
          />
        </Box>

        {/* 내용 */}
        <Box className="form-row">
          <Typography className="field-label"
          sx={{ fontSize: 25,
              marginBottom: 1,
              fontWeight: "bold",
              fontFamily: "'KyoboHand', sans-serif",
         }}>내용</Typography>
          <TextField
            value={boardContent}
            onChange={(e) => setBoardContent(e.target.value)}
            placeholder="내용을 입력하세요"
            fullWidth
            multiline
            minRows={12}
            className="content-input"
          />
        </Box>

    <Box
      sx={{
        //position: 'sticky',           // 스크롤해도 하단에 고정하고 싶으면 유지
        bottom: 0,
        bgcolor: 'background.paper',
        py: 1.5,
        mt: 2,
        borderTop: (t) => `1px solid ${t.palette.divider}`,
      }}
      className="action-bar"
    >
      {/* 한 줄짜리 컨테이너: 좌/우로 분할 */}
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        {/* 왼쪽: 평점 콤보박스 */}
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography variant="body2">평점</Typography>
          <Autocomplete
            disablePortal
            options={scoreOptions}
            value={bookScore.toFixed(1)}
            onChange={(_, v) => setBookScore(Number(v ?? 0))}
            sx={{ width: 160 }}
            renderInput={(params) => <TextField {...params} label="0.0 ~ 5.0" size="small" />}
          />
        </Stack>

        {/* 오른쪽: 버튼들 */}
        <Stack direction="row" spacing={2} alignItems="center">
          <Button variant="contained" onClick={() => navigate(-1)} style={{ 
            backgroundColor: "#50e054ff"}}>취소</Button>
          <Button variant="contained" onClick={handleSubmit} style={{ 
            backgroundColor: "#4caf50"}}>작성완료</Button>
        </Stack>
      </Stack>
    </Box>

      </Paper>
    </Container>
  );
}   
