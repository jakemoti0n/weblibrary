import "./BookShelf.css";

const books = [
  { id: 1, title: "세상에서 혹이 가장 긴사람 ", color: "#d8c8a8" },
  { id: 2, title: "호랑이를 피해 하늘로", color: "#7ca8b8" },
  { id: 3, title: "콩쥐에게 생긴 비밀 신발", color: "#dddddd" },
  { id: 4, title: "🐰토끼 간은 어디로 갔을까", color: "#bdbdbd" },
  { id: 5, title: "다리 없는 사랑 이야기", color: "#e2d6b5" },
  { id: 6, title: "예쁜 누나랑 만나는 법", color: "#c9c1a7" },

  { id: 7, title: "어느 도끼가 진짜일까", color: "#e8d4b5" },
  { id: 8, title: "밤마다 쌀이 사라져요", color: "#b8c9d8" },
  { id: 9, title: "빨간 신발 자매 이야기", color: "#c2c2c2" },
  { id: 10, title: "바보가 장군 된 이유", color: "#9e9e9e" },
  { id: 11, title: "호랑이는 곶감이 무서워", color: "#e5cf95" },
  { id: 12, title: "오빠랑 누나가 하늘에", color: "#d1bfa7" },

  { id: 13, title: "게으른 토끼", color: "#f1dfbf" },
  { id: 14, title: "못생겨서 행복했대요", color: "#b0c7a6" },
  { id: 15, title: "엄마 말을 안듣는 개구리", color: "#ddd5a7" },
  { id: 16, title: "왕이랑 호랑이랑 싸우면", color: "#a9b0c7" },
  { id: 17, title: "요술 방망이", color: "#deb887" },
  { id: 18, title: "아빠가 아닌 아빠", color: "#d2b48c" },
];

export default function BookShelf({ onSelectBook }) {
  const parts = [books.slice(0, 6), books.slice(6, 12), books.slice(12, 18)];

  return (
    <div className="bookshelf-room">
      <div className="cabinet">
        <div className="crown" />
        <div className="backboard">
         <div
          className="cubby"
          style={{ ["--cols"]: 20, ["--rows"]: 2 }}  // ← 칸 수(원하면 바꿔!)
         >
          {Array.from({ length: 20 * 2 }).map((_, i) => <i key={i} />)}
         </div>
          <div className="inner-shadow" />

          <div className="row">
            {parts.map((grp, gi) => (
              <div className="partition" key={gi}>
                <div className="books">
                  {grp.map((b) => {
                    const r = ((b.id % 3) - 1) * 1.2;       // 살짝 기울이기
                    const sx = 0.92 + (b.id % 5) * 0.04;     // 두께 느낌(가로 스케일)
                    return (
                      <div
                        key={b.id}
                        className="book"
                        style={{
                          backgroundColor: b.color,
                          ["--sx"]: sx,
                          ["--r"]: `${r}deg`,
                        }}
                        title={b.title}
                         onClick={() => onSelectBook?.(b.id)} // ✅ 클릭 시 상위로 전달
                      >
                        <span className="spine">{b.title}</span>
                      </div>
                    );
                  })}
                </div>
                {gi < parts.length - 1 && <div className="pillar" />}
              </div>
            ))}
          </div>
        </div>
        <div className="plank" />
      </div>
    </div>
  );
}