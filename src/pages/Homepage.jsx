import React from 'react'
import Slider from '../components/Slider'
import tractor from '../assets/features-3-1-1.jpg'
import Card3Presentation from '../components/Card3Presentation'
import Footer from '../components/Footer'
import img5 from '../assets/rearth_logo.png'
import achivement from '../assets/WhatsApp Image 2024-03-22 at 6.01.42 PM.jpeg'
const Homepage = () => {
  return (
    <div className=''>
      
      <Slider/>
      <Card3Presentation />
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
          <div>
             <img src={achivement} alt="" srcset="" />
          </div>
        </div>
        
      </div>
      <Footer/>
    </div>
  );
}

export default Homepage