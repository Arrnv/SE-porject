import React from 'react'
import Slider from '../components/Slider'
import tractor from '../assets/features-3-1-1.jpg'
import Card from '../components/Card'
import Footer from '../components/Footer'
import img5 from '../assets/rearth_logo.png'
import achivement from '../assets/WhatsApp Image 2024-03-22 at 6.01.42 PM.jpeg'

import per1 from '../assets/per1.webp'
import per2 from '../assets/per2.webp'
import per3 from '../assets/per3.webp'
import per4 from '../assets/per4.webp'
import MyCarousel from '../components/MyCarousel'
import Cards2 from '../components/Cards2'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import Whychooseus from '../components/Whychooseus'




const Homepage = () => {

  const props = [
    {
      url: "bg-[url('https://media.contentapi.ea.com/content/dam/eacom/images/2020/09/ea-featured-image-ea-desktop-beta.jpg.adapt.crop191x100.1200w.jpg')]",
      heading: 'Certificates',
      body: 'We are certified by govt.of India i.e :DPIIT, NSIC, EIC,ISO, CE, DYMER.'
    },
    {
      url: "bg-[url('https://media.contentapi.ea.com/content/dam/eacom/images/2020/09/ea-featured-image-ea-desktop-beta.jpg.adapt.crop191x100.1200w.jpg')]",
      heading: 'Technology',
      body: ' A Mobile unit to convert agriculture unit into high gvc bio coal briquettes.'
    }, {
      url: "bg-[url('https://media.contentapi.ea.com/content/dam/eacom/images/2020/09/ea-featured-image-ea-desktop-beta.jpg.adapt.crop191x100.1200w.jpg')]",
      heading: 'Best Teams',
      body: 'A team comprising skilled engineers,designers and technicians.'
    },
    {
      url: "bg-[url('https://media.contentapi.ea.com/content/dam/eacom/images/2020/09/ea-featured-image-ea-desktop-beta.jpg.adapt.crop191x100.1200w.jpg')]",
      heading: 'Our Goal',
      body: 'We are focused on To make our planet a better place to live in.'
    },
    
  ];

  return (
    <ParallaxProvider>
     <div className='overflow-x-hidden mx-auto'>
    <Slider/>
   
    <Parallax speed={20}>
      <div className="container my-36 mx-auto px-5 z-10">
        <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 p-3 sm:p-8  place-items-center'>
        {props.map((item, index) => (
          <Cards2
            key={index} // It's important to provide a unique key when mapping components
            url={item.url}
            heading={item.heading}
            body={item.body}
          />
          ))}
        </div>
      </div>
    </Parallax>
    

      <div className="w-screen h-auto grid grid-cols-2 gap-5 overflow-hidden text-justify">
        <div className="flex justify-end items-end bg-cover bg-center h-dvh rounded-r-xl" style={{backgroundImage: `url(${tractor})`}}> 
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
      
      {/* <Whychooseus /> */}
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
      <MyCarousel />
      <div className='ml-40 mr-40 my-10 '>
          <h3 className='text-xl mb-2 font-normal tracking-normal'>PROFESSIONAL PEOPLE</h3>
          <h1 className='text-4xl font-bold text-center mt-24 mb-8'>Meet Our Team</h1>
          <div className='flex flex-none hover:flex-1 flex-wrap justify-evenly'>
            <img src={per1} alt="per1" className='w-64 rounded-xl hover:scale-110 ease-in-out duration-300'/>
            <img src={per2} alt="per2" className='w-64 rounded-xl hover:scale-110 ease-in-out duration-300'/>
            <img src={per3} alt="per3" className='w-64 rounded-xl hover:scale-110 ease-in-out duration-300'/>
            <img src={per4} alt="per4" className='w-64 rounded-xl hover:scale-110 ease-in-out duration-300'/>
          </div>
      </div>
      
      <Footer/>
    </div>
    </ParallaxProvider>
   

  );
}

export default Homepage