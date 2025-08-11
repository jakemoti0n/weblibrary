import React from 'react'
import Banner from './Banner/Banner.jsx';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Banner />
      <button onClick={() => navigate('/login')}>로그인</button>
    </div>
  )
}

export default Homepage