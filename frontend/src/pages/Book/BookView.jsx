
import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import BookReader from "../../components/BookShelf/BookReader";

export default function BookView() {
  const navigate = useNavigate();
  const [uploadedImages, setUploadedImages] = useState({});

  useEffect(() => {
    // sessionStorage에서 업로드된 이미지 불러오기
    const saved = sessionStorage.getItem('uploadedImages');
    if (saved) {
      setUploadedImages(JSON.parse(saved));
    }
  }, []);

  // 전체 페이지 데이터 생성
  const generatePagesData = () => {
    const pages = [];
    
    // 0~13번 페이지: 기존 이미지들
    for (let i = 0; i <= 29; i++) {
      pages.push({
        image: `/images/books/page${i}.png`,
        text: i % 2 === 0 ? `페이지 ${i}의 텍스트 내용` : null
      });
    }
    
    // 14, 15번 페이지: 업로드된 이미지들
    if (uploadedImages[14]) {
      pages.push({
        image: uploadedImages[14],
        text: '30번 텍스트' 
      });
    }
    
    if (uploadedImages[14]) {
      pages.push({
        image: uploadedImages[14], 
        text: '32번 텍스트' 
      });
    }
    
    return pages;
  };

  const handleBackToEdit = () => {
    navigate('/books/edit');
  };

  return (
    <div>
      <div style={{ textAlign: "center", marginBottom: 20 }}>
        <h2 style={{ color: "green", marginBottom: 10 }}>📖 완성된 동화책</h2>
        <Button 
          variant="contained" 
          onClick={handleBackToEdit}
          style={{ backgroundColor: "green", color: "white" }}
        >
          ← 편집 모드로 돌아가기
        </Button>
      </div>
      
      <BookReader pages={generatePagesData()} />
    </div>
  );
}