import React from 'react'
import Slider from '../components/Slider'
import tractor from '../assets/features-3-1-1.jpg'
import Card from '../components/Card'
import Footer from '../components/Footer'
import image1 from '../assets/hcard1.png'
import image2 from '../assets/hcard2.png'
import image3 from '../assets/hcard3.png'
import image4 from '../assets/hcard4.png'
const Homepage = () => {
  return (
    <div className='overflow-x-hidden mx-auto'>
      
      <Slider/>
      <div className="container mx-auto px-5">
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 p-3 sm:p-8 place-items-center">
        <Card
          background="bg-[#f3faff]"
          width="w-64"
          heading="Technology"
          description="A Mobile unit to convert agro unit into high gvc bio coal briquettes."
          thumbnailSrc={image1}
        />
        <Card
          background="bg-[#fefaf0]"
          width="w-64"
          heading="Best Team"
          description="A team comprising skilled engineers,designers and technicians."
          thumbnailSrc={image2}
        />
        <Card
          background="bg-[#f3faff]"
          width="w-64"
          heading="Certificates"
          description="We are certified by govt.of India i.e :DPIIT, NSIC, EIC,ISO, CE, DYMER."
          thumbnailSrc={image3}
        />
        <Card
          background="bg-[#f5e6ff]"
          width="w-64"
          heading="Our Goal"
          description="We're focused on 'To make our planet a better place to live in.'"
          thumbnailSrc={image4}
        />
      </div>
    </div>
      





      <div className="w-screen h-auto grid grid-cols-2 gap-4 overflow-hidden ">
        <div className="bg-cover bg-center h-dvh rounded-r-xl " style={{backgroundImage: `url(${tractor})`}}> 
            
        </div>
        <div>

        </div>
      </div>
      <div className='w-screen h-auto'>

      </div>
      <Footer/>
      </div>
  );
}

export default Homepage
