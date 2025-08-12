import { useEffect, useState } from 'react';
//import api from '../../utils/api';
import { Link } from 'react-router-dom';
import * as React from 'react';
import { DataGrid,  } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import "../../styles/Board.style.css"
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';


export default function Board() {

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white ,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
  

const columns = [
  { field: 'id', headerName: 'ID', width: 100, headerClassName: 'header-blue', align: 'center', headerAlign: 'center' },
  { field: 'bookName', headerName: '도서정보', width: 360, headerClassName: 'header-blue', headerAlign: 'center' },
  { field: 'title', headerName: '제목', width: 1000, headerClassName: 'header-blue', headerAlign: 'center' },
  { field: 'userName', headerName: '작성자', width: 200, headerClassName: 'header-blue', align: 'center', headerAlign: 'center'},
  { field: 'socre', headerName: '평점', width: 100, headerClassName: 'header-blue', align: 'center', headerAlign: 'center'},
];

const rows = [
  { id: 1, bookName: 'abc', title: 'Jon', userName: '모준영', socre: '★' },
  { id: 2, bookName: 'dragon', title: 'Cersei', userName: '홍길동', socre: '★' },
  { id: 3, bookName: 'apple', title: 'Jaime', userName: '이순신' , socre: '★' },
];

const paginationModel = { page: 0, pageSize: 10 };
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        // 목서버는 /reviews, 실제는 /reviews 로 맞춰갈 거라 동일
        const { data } = await api.get('/reviews');
        setList(data); // json-server는 배열 그대로 줌
      } catch (e) {
        setErr(e.message || '불러오기 실패');
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) return <div>로딩중…</div>;
  if (err) return <div style={{color:'red'}}>에러: {err}</div>;

 return (
  <div className="board">
    <Paper sx={{ height: 700, width: '100%' }}>
      <h1 className='reviewHead'> 도서리뷰 </h1>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{
          border: 0,
          '& .header-blue': {
            backgroundColor: '#f0c4104a', 
            color: '#333',           
            fontSize: 16
          }
        }}
      />
    </Paper>
  </div>
);
}