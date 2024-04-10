import React from 'react'
import Slider from '../components/Slider'
import tractor from '../assets/features-3-1-1.jpg'
import Card from '../components/Card'
import Footer from '../components/Footer'
import img5 from '../assets/rearth_logo.png'
import achivement from '../assets/WhatsApp Image 2024-03-22 at 6.01.42 PM.jpeg'
import image1 from '../assets/hcard1.png'
import image2 from '../assets/hcard2.png'
import image3 from '../assets/hcard3.png'
import image4 from '../assets/hcard4.png'
import per1 from '../assets/per1.webp'
import per2 from '../assets/per2.webp'
import per3 from '../assets/per3.webp'
import per4 from '../assets/per4.webp'
import MyCarousel from '../components/MyCarousel'
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

   <div className="w-screen h-auto grid grid-cols-2 gap-5 overflow-hidden text-justify">
        <div className="flex justify-end items-end bg-cover bg-center h-dvh rounded-r-xl " style={{backgroundImage: `url(${tractor})`}}> 
          <div className='h-52 w-40 bg-[#e5c32a] flex items-center justify-center text-center rounded-tl-xl rounded-br-xl' style={{ fontFamily: 'Gotham, sans-serif' }}>
              <h3 className="text-2xl font-bold">Agriculture Professional Leaders</h3>
          </div>
        </div>
        <div className='grid grid-flow-row gap-2 justify-center' >
          <h1 className='text-3xl font-bold'>Why Choose Us</h1>
          <div>
            <a href="#" class="block max-w-sm p-6 bg-white border-gray-200 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Increased Productivity</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">Conversion of Agro Waste into Bio Briquettes</p>
            </a>
          </div>
          <div>
            <a href="#" class="block max-w-sm p-6 bg-white border-gray-200 rounded-lg  hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Less Human intervention</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">A Mobile unit for treatment of agro waste operated with minimum Human Intervention</p>
            </a>
          </div>
          <div>
            <a href="#" class="block max-w-sm p-6 bg-white border-gray-200 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Energy Efficient</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">Compaction of Waste at Source to make it efficient SCM.</p>
            </a>
          </div>
          <div>
            <a href="#" class="block max-w-sm p-6 bg-white border-gray-200 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Optimum logistics</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">Our mobile unit does processing at source, so does not require hoarding/storage.</p>
            </a>
          </div>
        </div>
      </div>
      <div className='w-screen h-auto flex justify-center my-20'>
        <div className='grid grid-cols-1 justify-items-center'>
          <img className='w-24' src={img5} alt="" srcset="" />
          <p>GLOBAL WELFARE CONTRIBUTION</p>
          <p className='text-4xl'>UNO Sustainability Development Goals</p>
        </div>
      </div>
      <div className='w-screen h-auto flex justify-center'>
        <div className='grid grid-cols-1 justify-items-center'>
          <img className='w-24' src={img5} alt="" srcset="" />
          <p>MEDIA INSIGHTS</p>
          <p className='text-4xl'>Our Achievements</p>
          <div className='h-3/4 w-3/4'> 
             <img src={achivement} alt="" srcset="" />
          </div>
        </div>
        
      </div>
      <div className='ml-40 mr-40'>
          <h3 className='text-xl mb-2 font-normal tracking-normal'>PROFESSIONAL PEOPLE</h3>
          <h1 className='text-4xl font-bold text-center mt-24 mb-8'>Meet Our Team</h1>
          <div className='flex flex-none hover:flex-1 flex-wrap justify-evenly'>
            <img src={per1} alt="per1" className='w-64 rounded-xl hover:scale-110 ease-in-out duration-300'/>
            <img src={per2} alt="per2" className='w-64 rounded-xl hover:scale-110 ease-in-out duration-300'/>
            <img src={per3} alt="per3" className='w-64 rounded-xl hover:scale-110 ease-in-out duration-300'/>
            <img src={per4} alt="per4" className='w-64 rounded-xl hover:scale-110 ease-in-out duration-300'/>
          </div>
      </div>
      <MyCarousel />
      <Footer/>
    </div>

  );
}

export default Homepage