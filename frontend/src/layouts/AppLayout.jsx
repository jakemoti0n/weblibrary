import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer.jsx';
import Navbar from './Navbar.jsx';

const AppLayout = () => {
  return (
    <div className="app-layout">
      <header><Navbar /></header>

      {/* 라우팅된 페이지가 여기에 렌더링됨 */}
      <main className="app-main">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default AppLayout;
