import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer.jsx';

const AppLayout = () => {
  return (
    <div>
      <header>네비 추가</header>

      {/* 라우팅된 페이지가 여기에 렌더링됨 */}
      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default AppLayout;
