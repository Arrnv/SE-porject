import React from 'react'
import image3 from '../assets/person2.jpg'
import Card from '../components/Card'
import image1 from '../assets/briquettes.webp'
import image2 from '../assets/pellets.webp'
import image4 from '../assets/woodlog.webp'
import Footer from '../components/Footer'
import adv1 from '../assets/adv1.webp'
import adv2 from '../assets/adv2.webp'
import adv3 from '../assets/adv3.webp'
import adv4 from '../assets/adv4.webp'
import per1 from '../assets/per1.webp'
import per2 from '../assets/per2.webp'
import per3 from '../assets/per3.webp'
import per4 from '../assets/per4.webp'



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
        <h1 className='text-4xl font-bold text-center mt-24 mb-8'>What is HAB</h1>
          <h2 className='text-2xl font-sans mt-6 mb-6 font-semibold tracking-normal text-center'> “This company is an outcome of a DREAM” Dream of a WORLD WITHOUT FOSSIL FUELS.</h2>
          <h3 className='text-xl font-sans font-normal leading-loose tracking-normal text-justify '>HAB is an abbreviation used for: “HALCYON AND BONANZA” Halcyon means Happy & Peaceful, Tranquil,Idyllic Bonanza means Wealth, Good Fortune, Profits. HAB Indicates “HALCYON AND BONANZA” which reflects our organisational ideology i.e. ‘Blend of a Happy and Peaceful Phase of life with Wealth and Prosperity’.</h3>
          <h2 className='text-2xl font-sans mt-6 mb-6 font-semibold tracking-normal text-center'>In Short it Means- “Prosperity with Peace”</h2>
        </div>
        <div className='ml-40 mr-40'>
         <h1 className='text-4xl font-bold text-center mt-24 mb-8'>Our Products</h1>
         
         <div className="container mx-auto ">
      <div className="grid gap-14 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-3 sm:p-6 place-items-center ">
        <div className='onHover hover:bg-[#199747] rounded-lg'>
        <Card
          // hover="bg-green-600"
          width="w-80"
          heading="Briquettes"
          description="Briquettes are bricks madeof leftover bits of wood and sawdust mixed with crop husk, additives and then compressed to give desired shape. These are widely used by industries in boilers . (CV:3800Cal/g)"
          thumbnailSrc={image1}
        />
        </div>
        <div className='onHover hover:bg-[#199747] rounded-lg'>
        <Card
          // hover="bg-green-600"
          width="w-80"
          heading="Pellets"
          description="A Bio Pellet is a small block of flammable biomass that can be used to produce heat as a fuel,mostly is smaller than briquettes widely used for Restaurants and domestic application.
          (3800Cal/g)"
          thumbnailSrc={image2}
        />
        </div>
        <div className='onHover hover:bg-[#199747] rounded-lg'>
        <Card
          // hover="bg-green-600"
          width="w-80"
          heading="Cowdung Woodlogs"
          description="It is a wood look alike log made by combination of cow dung and crop residues is fed into the hopper of the machine. These are widely used for last rituals and prayers.
          (CV:2000Cal/g)"
          thumbnailSrc={image4}
        />
        </div>
      </div>
      </div>

        </div >

        <div className='ml-40 mr-40'>
         <h1 className='text-4xl font-bold text-center mt-24 mb-8'>Concept and Objective</h1>
         <p className='text-xl font-sans font-normal leading-loose tracking-normal text-justify'>India is an agro based country. Agricultural is an important pillar of our economy. Yet, a large number of agro waste post harvest is waste. There is a huge value hidden in this post harvest agro waste. Also the use of rdf waste and legacy waste in cement and steel industries is very inefficient.On the other hand our nation is going through coal crises. We at Hab Biomass Pvt Ltd have developed and innovative mobile unit to convert one ton of agro waste per hour into high GCV biocoal briquettes to be used as fuel in industries. Our innovation acts as a bridge between these two points. We not only supports environment but also give second income to farmer.</p>
         <h2 className='text-2xl font-sans mt-2 mb-2 font-semibold tracking-normal'>Our innovation revolves around 5 major problems</h2>
          <ul className='text-xl font-sans font-normal leading-loose tracking-normal text-justify list-disc ml-6 list-inside'>
            <li>Disposal of Agro waste by burning</li>
            <li>Human Intervention and less availiblity of labour in Handeling of Agro Waste.</li>
            <li>Logistics of loose agro waste, a SCM Error.</li>
            <li>Centralised Place for hoarding/storage of Waste</li>
            <li>Sustainable disposal of agro waste by create value out of waste.</li>

          </ul>
          <h2 className='text-2xl font-sans mt-2 mb-2 font-semibold tracking-normal'>Problem Statement</h2>
          <ol className='text-xl font-sans font-normal leading-loose tracking-normal text-justify list-inside ml-6 list-decimal'>
            
            <li>Agro waste disposal by burning, which is not only a waste of a useful resource but also causes huge pollution.</li>
            <li>Human intervention and a scarcity of labour in the handling of agricultural waste.</li>
            <li>Inefficient logistics of loose agro-waste waste: an SCM error because agro-waste volume is much greater than weight.</li>
            <li>The availability of storage and hoarding space for agricultural waste.</li>

          </ol>
          


         


         </div>
         <br/>
          <hr/>
          <div className='ml-40 mr-40'>
          <h1 className='text-4xl font-bold text-center mt-24 mb-8'>Our Advisory</h1>
          <div className='flex flex-none hover:flex-1 flex-wrap justify-evenly'>
            <img src={adv1} alt="adv1" className='w-60'/>
            <img src={adv2} alt="adv2" className='w-60'/>
            <img src={adv3} alt="adv3" className='w-60'/>
            <img src={adv4} alt="adv4" className='w-60'/>

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

          



         <Footer/>



    </div>
  )
}

export default AboutUs