import React from "react";
import { useNavigate } from "react-router-dom";
import '../../styles/BookCard.style.css'

const NO_IMAGE = `${import.meta.env.BASE_URL || ""}noimg.png`;

export default function BookCard({ book }) {
  const navigate = useNavigate();

  const cover = book?.cover || NO_IMAGE;
  const title = book?.title || "제목 없음";
  const author = book?.author || "작자 미상";

  const goToDetail = () => {
    navigate(`/books/${book.itemId}`);
  }

  return (
    <div
      className="book-card"
      onClick={goToDetail}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          goToDetail();
          
        }
      }}
      aria-label={`${title} 상세 보기`}
    >
      <div className="book-inner">
        <div className="book-face book-front">
          <img src={cover} alt={title} className="book-cover" />
        </div>

        <div className="book-face book-back">
          <h3 className="book-title">{title}</h3>
          <p className="book-author">{author}</p>
        </div>
      </div>
    </div>
  );
}