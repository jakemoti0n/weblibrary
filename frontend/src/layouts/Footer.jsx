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
            아이와 함께 읽고 나누는 창작동화<br />
            온라인을 통해 독서 모임과 리뷰를 나눠보세요.
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
