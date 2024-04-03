import React from 'react'
import MainCarousel from '../components/HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../components/HomeSectionCarousel/HomeSectionCarousel'
import { mens_data } from '../../Data/mens'

const Home = () => {
  return (
    <div>
      <MainCarousel />
      <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
        <HomeSectionCarousel data={mens_data}/>
      </div>
    </div>
  )
}

export default Home