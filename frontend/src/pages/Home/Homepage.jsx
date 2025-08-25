import React from 'react'
import Banner from './components/Banner/Banner.jsx';
import BestSeller from './components/Bestseller/Bestseller.jsx';
import NewBook from './components/new/NewBook.jsx';
import Section2 from './components/Section2.jsx';
import RecoBooks from './components/RecoBooks.jsx';



const Homepage = () => {
  return (
        <div>
          <Banner />
          <Section2 />
          <RecoBooks />
          <NewBook />
          <BestSeller />      
        </div>
  )
}

export default Homepage