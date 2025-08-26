import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import BookCard from '../BookCard/BookCard';
import '../../styles/BookSlider.style.css'

const BookSlider = ({
  title,
  books,
  responsive,
  enableAutoPlay = false,
  fullBleed = false, 
}) => {
  return (
    <section className={`section ${fullBleed ? 'full-bleed' : ''}`}>
      <div className="page-container">
        <div className="main-bestslider">
          {title && <h3 className="main-bestname">{title}</h3>}

          <Carousel
            responsive={responsive}
            centerMode={false}           
            partialVisible={false}
            infinite={true} 
            arrows={false}
            autoPlay={enableAutoPlay}
            autoPlaySpeed={3000}
            slidesToSlide={1}            
            containerClass="carousel-container"
            sliderClass="carousel-track"
            itemClass="book-slider"      
            removeArrowOnDeviceType={['mobile']}
          >
            {books?.map((book,index)=>
              (<BookCard book={book} key={index}/>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default BookSlider;
