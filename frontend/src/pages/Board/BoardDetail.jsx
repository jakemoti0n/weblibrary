import Grid from '@mui/material/Grid'
import React from 'react'

const BoardDetail = () => {

  return (
    <Container
          maxWidth={false}
          sx={{ maxWidth: 1200, mx: 'auto', px: 2, mt: 4 }} // ★ CHANGED: 컨테이너 최대폭 커스텀
        >
      <Paper className="write-paper" elevation={0}>
        <Typography variant="h5" className="write-title">리뷰 작성</Typography>
        

        {/* 책 제목 */}
        <Box className="form-row">
          <Typography className="field-label">제목</Typography>
          <TextField
            value={title}
            onChange={(e) => setBookName(e.target.value)}
            placeholder="책 제목을 입력하세요"
            HarfWidth
            size="medium"
            className="bookName-input"
            inputProps={{ maxLength: 100 }}
          />
        </Box>
       
        {/* 제목 */}
        <Box className="form-row">
          <Typography className="field-label">제목</Typography>
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
          <Typography className="field-label">내용</Typography>
          <TextField
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="내용을 입력하세요"
            fullWidth
            multiline
            minRows={12}
            className="content-input"
          />
        </Box>

        {/* 버튼 */}
        <Stack direction="row" spacing={2} justifyContent="center" className="action-bar">
          <Button variant="outlined" onClick={() => navigate(-1)}>취소</Button>
          <Button variant="contained" onClick={handleSubmit}>작성완료</Button>
        </Stack>
      </Paper>
    </Container>
  );
}

export default BoardDetail