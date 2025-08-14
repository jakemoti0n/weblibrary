import React from "react";
import '../styles/Navbar.style.css'
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
    const navigate = useNavigate();

    return (
    <nav className="navbar">
        
        <div className="nav-left">
        <button onClick={() => navigate('/login')}>로그인</button>
        <button onClick={() => navigate('/board')}>게시판</button>
        </div>

        <div className="nav-center">
            <img src="../assets/booky.png" alt="Logo" />
        </div>

        <div className="nav-right">
            <input
            type="text"
            placeholder="키워드, 강사, 저자를 입력"
            className="search-input"
            />
            <button className="search-btn">🔍</button>
        </div>
        </nav>
    );
}
