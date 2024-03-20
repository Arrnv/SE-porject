import React from 'react'
import Slider from '../components/Slider'
import tractor from '../assets/features-3-1-1.jpg'
import Card3Presentation from '../components/Card3Presentation'
import Footer from '../components/Footer'
const Homepage = () => {
  return 
    <div className=''>
      <Navbar />
      <Slider/>
      <Card3Presentation />
      <div className="w-screen h-auto grid grid-cols-2 gap-4 overflow-hidden ">
        <div className="bg-cover bg-center h-dvh rounded-r-xl " style={{backgroundImage: `url(${tractor})`}}> 
            
        </div>
        <div>

        </div>
      </div>
      <div className='w-screen h-auto'>

      </div>
      <Footer/>
  )
}

export default Homepage
