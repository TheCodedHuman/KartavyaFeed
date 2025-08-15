import React from 'react'
import Carousel from '../components/views/homeViews/Carousel.jsx'
import PromoBanner from '../components/views/homeViews/PromoBanner.jsx'
import Insights from '../components/views/homeViews/Insights.jsx'

function Home() {
  return (
    <div className='bg-gradient-to-br from-[#fff4a1] to-[#c5fffa]'>
      <Carousel />
      <PromoBanner />
      <Insights />
    </div>
  )
}

export default Home