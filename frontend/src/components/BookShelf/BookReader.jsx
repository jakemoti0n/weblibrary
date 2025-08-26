import React from "react";
import HTMLFlipBook from "react-pageflip";

export default function BookReader({ pages }) {
  return (
    <HTMLFlipBook
      width={600}
      height={500}
      showCover={true}
      style={{ margin: "0 auto" }}
    >
      {pages.map((p, i) => (
        <div key={i} className="page">
          <div
            style={{
              height: "100%",
              background: "#fffaf0",
              fontFamily: "'KyoboHand', cursive",
              fontSize: 30,
              lineHeight: 1.8,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding:10,
              border: "4px solid #d78a255b",      // 책 테두리 색 (연한 갈색)
              borderRadius: "6px",               // 모서리 둥글게
              boxShadow: "0 4px 10px rgba(0,0,0,0.2)", // 책자 같은 그림자
            }}
          >
            {/* 첫 두 페이지는 이미지 */}
            {i === 0 || i === 1 ? (
              <img
                src={p.image}
                alt={`page-${i}`}
                style={{ maxWidth: "100%", maxHeight: "100%",  objectFit: "contain" }}
              />
            ) : i % 2 === 1 ? (
              // 홀수 페이지 → 이미지
              <img
                src={p.image}
                alt={`page-${i}`}
                style={{ maxWidth: "100%", maxHeight: "100%" }}
              />
            ) : (
              // 짝수 페이지 → 텍스트
              <div style={{ whiteSpace: "pre-line" }}>{p.text}</div>
            )}
          </div>
        </div>
      ))}
    </HTMLFlipBook>
  );
}