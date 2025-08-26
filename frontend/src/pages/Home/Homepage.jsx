import React from 'react'
import Banner from './components/Banner/Banner.jsx';
import Section2 from './components/Section2.jsx';
import RecoBooks from './components/RecoBooks.jsx';
import RelayReviews from './components/RelayReviews.jsx';


const Homepage = () => {
  return (
        <div>
          <Banner />
          <Section2 />
          <RecoBooks />  
          <RelayReviews />
        </div>
  )
}

export default Homepage