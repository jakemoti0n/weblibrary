import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../styles/footer.style.css'

const Footer = () => {
  

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* About */}
        <div className="footer-section">
          <h4>
            도서관 프로젝트
          </h4>
          <p>
            오프라인 서점·도서관의 감성을<br />
            온라인에서 그대로 느껴보세요.
          </p>
        </div>

        {/* Service*/}
        <div className="footer-section">
          <h4>고객 서비스</h4>
          <ul>
            <li><a href="/">자주 묻는 질문</a></li>
            <li><a href="/">이용 가이드</a></li>
            <li><a href="/">문의하기</a></li>
          </ul>
        </div>

        {/* Follow Us */}
        <div className="footer-section">
          <h4>Follow Us</h4>
          <ul className="social-media">
            <li><InstagramIcon /></li>
            <li><YouTubeIcon /></li>
            <li><XIcon /></li>
            <li><GitHubIcon /></li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 도서관 프로젝트</p>
      </div>
    </footer>
  );
};

export default Footer;
