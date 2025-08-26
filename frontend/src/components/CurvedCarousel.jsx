// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "./CurvedCarousel.css";
// import { EffectCoverflow } from "swiper/modules";
// import { Autoplay } from "swiper/modules";
// import "swiper/css/effect-coverflow";

// export default function CurvedCarousel() {
//   return (
//         <Swiper
//       className="curved-swiper" 
//       effect="coverflow" // ✅ 커버플로우 효과 적용
//       grabCursor={true}
//       centeredSlides={true}
//       slidesPerView={6}
//       spaceBetween={10}
//       modules={[Autoplay, EffectCoverflow]}  // ✅ 모듈 추가
//       autoplay={{ delay: 1500, disableOnInteraction: false }}
//       coverflowEffect={{
//         rotate: 10,     // 좌우 기울기 (20~30 주면 옆 슬라이드가 꺾임)
//         stretch: 0,    // 카드 사이 간격
//         depth: 500,    // ✅ 깊이감 (↑ 키우면 더 깊어짐, 300~500 추천)
//         modifier: 0,   // 효과 강도 (1~3 정도 실험)
//         slideShadows: false,
//       }}
//       onSlideChange={() => console.log("slide change")}
//       onSwiper={(swiper) => console.log(swiper)}
//     >
//       {Array.from({ length: 20 }).map((_, index) => (
//         <SwiperSlide key={index}>
//           <img
//             alt={`slide-${index}`}
            
//             src={`https://picsum.photos/seed/picsum${index}/300`}
//           />
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// }