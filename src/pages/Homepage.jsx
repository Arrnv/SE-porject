import React from 'react'
import Slider from '../components/Slider'
import image1 from '../assets/8.jpg'
import Card3Presentation from '../components/Card3Presentation'
import Footer from '../components/Footer'
const Homepage = () => {
  return (
    <div className='relative'>
      
      <Slider/>
      <Card3Presentation />
      <div className="w-screen h-screen flex- flex-col my-4 gap-10 overflow-hidden ">
        <div className="w-full flex flex-col justify-items-center  gap-10 mb-3">
            <h1 className='w-auto md:w-auto text-center '> Words About Us</h1>
            <p className='w-auto md:w-auto text-center '>Every voice counts! Choose campaign, donate and help us change the world</p>
        </div>
        <div className="w-full h-full flex flex-col md:flex-row">
            <div className='w-4/6 h-full flex items-center'>
                <img src={image1} alt=".." className='h-4/6 ml-24 '/>
            </div>
            <div className='w-2/6 h-full flex flex-col justify-center items-middle pr-10'>
                <h1 className='w-auto md:w-auto text-start mb-5'> Together we can make a difference</h1>
                <p className='w-auto md:w-auto text-start mb-10'>When you give to Our Ecogreen, you know your donation is making a difference. Whether you are supporting one of our Signature Programs or our carefully curated list of Gifts That Give More, our professional staff works hard every day
                to ensure every dollar has impact for the cause of your choice.</p>
                <h1 className='w-auto md:w-auto text-start mb-5'>Our Partner</h1>
                <p className='w-auto md:w-auto text-start '>We partner with over 320 amazing projects worldwide, and have given over $150 million in cash and product grants to other groups since 2011. We also operate our own dynamic suite of Signature Programs.</p>
            </div>
        </div>
      </div>
      
      <Footer/>
    </div>
  )
}

export default Homepage
