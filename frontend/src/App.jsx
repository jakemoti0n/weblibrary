import './App.css'
import {Routes,Route} from 'react-router-dom';
import AppLayout from './layouts/AppLayout.jsx';
import Homepage from './pages/Home/Homepage.jsx';

import SignIn from './pages/Login/SignIn.jsx';
import SignUp from './pages/Login/SignUp.jsx';

import BookDetail from './pages/Book/BookDetail.jsx';
import BookListpage from './pages/Book/BookListpage.jsx';

import Board from './pages/Board/Board.jsx';
import BoardDetail from './pages/Board/BoardDetail.jsx';
import BoardWrite from './pages/Board/BoardWrite.jsx';

import Mypage from './pages/Mypage/Mypage.jsx';

import NotFound from './pages/NotFound/NotFound.jsx';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Homepage />}/>
          {/* 책 관련 라우트 */}
          <Route path="books">
            <Route index element={<BookListpage />} />
            <Route path=":id" element={<BookDetail />} />
          </Route>
         
          {/* 게시판 관련 라우트 */}
          <Route path="board">
            <Route index element={<Board />} />
            <Route path=":id" element={<BoardDetail />} />
            <Route path="write" element={<BoardWrite />} />
          </Route>
          {/* 마이페이지 관련 라우트 */}
          <Route path="mypage" element={<Mypage />} />
        </Route>
         {/* 로그인 관련 라우트 */}
          <Route path="login">
            <Route index element={<SignIn />} />
            <Route path="signup" element={<SignUp />} />
          </Route>

        <Route path='*' element={<NotFound />} />   
      </Routes>
     </div> 
  )
}

export default App
