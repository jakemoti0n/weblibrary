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
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
  

const columns = [
  { field: 'id', headerName: 'ID', width: 70, headerClassName: 'header-blue' },
  { field: 'bookName', headerName: '도서정보', width: 130, headerClassName: 'header-blue' },
  { field: 'title', headerName: '제목', width: 300, headerClassName: 'header-blue' },
  { field: 'userName', headerName: '작성자', width: 130, headerClassName: 'header-blue'},
  { field: 'socre', headerName: '평점', width: 60, headerClassName: 'header-blue'},
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const paginationModel = { page: 0, pageSize: 5 };
  // const [list, setList] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [err, setErr] = useState(null);

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       setLoading(true);
  //       // 목서버는 /reviews, 실제는 /reviews 로 맞춰갈 거라 동일
  //       const { data } = await api.get('/reviews');
  //       setList(data); // json-server는 배열 그대로 줌
  //     } catch (e) {
  //       setErr(e.message || '불러오기 실패');
  //     } finally {
  //       setLoading(false);
  //     }
  //   })();
  // }, []);

  // if (loading) return <div>로딩중…</div>;
  // if (err) return <div style={{color:'red'}}>에러: {err}</div>;

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
            backgroundColor: 'lightcyan', // 원하는 색
            color: '#1d924aff',              // 글자색
            fontSize: 16
          }
        }}
      />
    </Paper>
  </div>
);
}