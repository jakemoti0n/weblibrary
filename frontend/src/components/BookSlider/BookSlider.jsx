import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import BookCard from '../BookCard/BookCard';
import '../../styles/BookSlider.style.css'

const BookSlider = ({ title, books, responsive }) => {
  return (
    <section className='section'>
      <div className="page-container"> 
        <div className="main-bestslider">
          {title && <h3 className="main-bestname">{title}</h3>}

          <Carousel
            responsive={responsive}
            centerMode={false}           
            partialVisible={false}
            swipeable
            draggable
            infinite={true} 
            arrows
            autoPlay
            autoPlaySpeed={3000}
            slidesToSlide={1}            
            containerClass="carousel-container"
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
