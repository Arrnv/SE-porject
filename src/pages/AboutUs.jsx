import React from 'react'
import image3 from '../assets/person2.jpg'


function AboutUs() {
  return (
    <div className='w-full h-screen relative mt-14 '>
        <div class="relative">
            <img src="https://webneel.com/daily/sites/default/files/images/daily/03-2020/7-nature-photography-landscape-mountain-pawel-kucharski.jpg" alt="Background Image" class="w-full h-[400px] object-cover opacity-70" />
            <div class="absolute inset-0 flex items-center justify-center">
            <h1 class="text-white text-4xl font-bold">ABOUT US</h1>
        </div>
        </div>

        <div className='flex flex-row '>
            <div className='m-20  ml-40'>
            <h3 className='text-xl mb-2 font-normal tracking-normal'>GET TO KNOW ABOUT US</h3>
            <h1 className='text-5xl font-serif leading-normal font-bold tracking-normal'>We Sell High-Quality<br/>Organic Products</h1>
            <h2 className='text-2xl font-sans mt-6 mb-6 font-semibold tracking-normal'>We’re Leader in Agriculture Market</h2>
            <p className='text-xl font-sans font-normal leading-loose tracking-normal text-justify'>My name is Krunal Jagtap, from Pune India. As we all know climate change is a global problem, adding to which burning of agro waste is a major problem to be addressed.
            I and my mother, are founder of our company HAB BIOMASS PVT LTD. We have developed and innovative mobile unit to convert one ton of agro waste per hour into biocoal briquettes to be used as fuel in industries.
            This is a IPR protected product and we have also received a National Award for the same. Along with this, we are among the few people select by Stanford Seed Spark Program 2022, for South Asia Cluster.</p>
            <p className='text-xl font-sans leading-normal tracking-normal text-right font-semibold'>-From Director's Desk
             <br/>(Agrotech Market)</p>
            </div>
            
            <div className='m-20 mr-40 ' >
                <img src={image3} alt="" className='w-[300%]  h-full '/>
            </div>

        </div>
          
        <div className='ml-40 mr-40'>
        <h1 className='text-4xl font-bold text-center'>What is HAB</h1>
          <h2 className='text-2xl font-sans mt-6 mb-6 font-semibold tracking-normal text-center'> “This company is an outcome of a DREAM” Dream of a WORLD WITHOUT FOSSIL FUELS.</h2>
          <h3 className='text-xl font-sans font-normal leading-loose tracking-normal text-justify '>HAB is an abbreviation used for: “HALCYON AND BONANZA” Halcyon means Happy & Peaceful, Tranquil,Idyllic Bonanza means Wealth, Good Fortune, Profits. HAB Indicates “HALCYON AND BONANZA” which reflects our organisational ideology i.e. ‘Blend of a Happy and Peaceful Phase of life with Wealth and Prosperity’.</h3>
          <h2 className='text-2xl font-sans mt-6 mb-6 font-semibold tracking-normal text-center'>In Short it Means- “Prosperity with Peace”</h2>
        </div>

    </div>
  )
}

export default AboutUs