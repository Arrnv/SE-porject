import React from 'react'
import image3 from '../assets/person1.png'
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
import image5 from '../assets/Paddies-image.jpg'
import icon1 from '../assets/agriicon.png'
import absimg from '../assets/aboutus.jpg'
import border1 from '../assets/border1.png'
import {motion} from "framer-motion"




function AboutUs() {
  return (
    <div className='w-full mt-8'>
      <div className='w-screen bg-gray-100'>
          <div class="relative w-full">
              <img src={absimg} alt="Background Image" class="w-full h-[400px] object-cover" />
              <div class="absolute inset-0 bg-gray-800 bg-opacity-70 flex items-center justify-around">
              <h1 class="text-white text-4xl font-bold font-GothamBold">ABOUT US</h1>
          </div>
          </div>

        <div className='flex flex-col lg:flex-row'>

        <div className='w-full lg:w-3/5'>
            <div className='m-16 lg:m-20 lg:ml-28'>
                <h3 className='text-xl mb-2 tracking-normal font-GothamMedium'>GET TO KNOW ABOUT US</h3>
                <h1 className='text-5xl leading-normal font-GothamBold tracking-normal'>We Sell High-Quality<br/>Organic Products</h1>
                <h2 className='text-2xl mt-6 mb-6 tracking-normal font-GothamMedium'>We’re Leader in Agriculture Market</h2>
                <p className='text-xl font-GothamBook leading-loose tracking-normal text-justify'>My name is Krunal Jagtap, from Pune India. As we all know climate change is a global problem, adding to which burning of agro waste is a major problem to be addressed.
                I and my mother, are founder of our company HAB BIOMASS PVT LTD. We have developed and innovative mobile unit to convert one ton of agro waste per hour into biocoal briquettes to be used as fuel in industries.
                This is a IPR protected product and we have also received a National Award for the same. Along with this, we are among the few people select by Stanford Seed Spark Program 2022, for South Asia Cluster.</p>
                <p className='text-xl font-GothamMedium leading-normal tracking-normal text-right font-semibold'>-From Director's Desk
                <br/>(Agrotech Market)</p>
            </div>
        </div>


        <div className='w-full lg:w-2/5 m-16 lg:m-20 lg:mr-28 md:w-full'>
            <img src={image3} alt="" className=' h-full object-cover' />
        </div>
      </div>



        <div className='ml-16 mr-16 lg:ml-28 lg:mr-28 '>
        <h1 className='text-4xl font-GothamBold text-center mt-24 mb-8'>What is HAB</h1>
          <h2 className='text-2xl font-GothamMedium mt-6 mb-6 tracking-normal text-center'> “This company is an outcome of a DREAM” Dream of a WORLD WITHOUT FOSSIL FUELS.</h2>
          <h3 className='text-xl font-GothamBook font-normal leading-loose tracking-normal text-justify '>HAB is an abbreviation used for: “HALCYON AND BONANZA” Halcyon means Happy & Peaceful, Tranquil,Idyllic Bonanza means Wealth, Good Fortune, Profits. HAB Indicates “HALCYON AND BONANZA” which reflects our organisational ideology i.e. ‘Blend of a Happy and Peaceful Phase of life with Wealth and Prosperity’.</h3>
          <h2 className='text-2xl font-GothamMedium mt-6 mb-6 tracking-normal text-center'>In Short it Means- “Prosperity with Peace”</h2>
        </div>
        
        <div className='ml-16 mr-16 lg:ml-28 lg:mr-28'>
         <h1 className='text-4xl font-GothamBold text-center mt-24 mb-8'>Our Products</h1>
         
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

        <div className='ml-16 mr-16 lg:ml-28 lg:mr-28'>
         <h1 className='text-4xl font-GothamBold text-center mt-24 mb-8'>Concept and Objective</h1>
         <p className='text-xl font-GothamBook font-normal leading-loose tracking-normal text-justify'>India is an agro based country. Agricultural is an important pillar of our economy. Yet, a large number of agro waste post harvest is waste. There is a huge value hidden in this post harvest agro waste. Also the use of rdf waste and legacy waste in cement and steel industries is very inefficient.On the other hand our nation is going through coal crises. We at Hab Biomass Pvt Ltd have developed and innovative mobile unit to convert one ton of agro waste per hour into high GCV biocoal briquettes to be used as fuel in industries. Our innovation acts as a bridge between these two points. We not only supports environment but also give second income to farmer.</p>
         <h2 className='text-2xl font-GothamMedium mt-2 mb-2 tracking-normal'>Our innovation revolves around 5 major problems</h2>
          <ul className='text-xl font-GothamBook leading-loose tracking-normal text-justify list-disc ml-6 list-inside'>
            <li>Disposal of Agro waste by burning</li>
            <li>Human Intervention and less availiblity of labour in Handeling of Agro Waste.</li>
            <li>Logistics of loose agro waste, a SCM Error.</li>
            <li>Centralised Place for hoarding/storage of Waste</li>
            <li>Sustainable disposal of agro waste by create value out of waste.</li>

          </ul>
          <h2 className='text-2xl font-GothamMedium mt-2 mb-2 tracking-normal'>Problem Statement</h2>
          <ol className='text-xl font-GothamBook leading-loose tracking-normal text-justify list-inside ml-6 list-decimal'>
            
            <li>Agro waste disposal by burning, which is not only a waste of a useful resource but also causes huge pollution.</li>
            <li>Human intervention and a scarcity of labour in the handling of agricultural waste.</li>
            <li>Inefficient logistics of loose agro-waste waste: an SCM error because agro-waste volume is much greater than weight.</li>
            <li>The availability of storage and hoarding space for agricultural waste.</li>

          </ol>
         </div>

         <div className='ml-16 mr-16 lg:ml-28 lg:mr-28'>
         <h1 className='text-4xl font-GothamBold text-center mt-16 mb-8'>Business Model</h1>
         <p className='text-xl font-GothamBook leading-loose tracking-normal text-justify'>Our current business model is based on a decentralised approach, in which we will manufacture a mobile unit to convert agro waste into high gcv bio briquettes for use in furnaces and boilers for combustion.</p>
         <h2 className='text-2xl font-GothamMedium mt-2 mb-2 tracking-normal'>Our revenue is generated through three channels:</h2>
          <ul className='text-xl font-GothamBook leading-loose tracking-normal text-justify list-disc ml-6 list-inside'>
            <li>Sale of briquettes</li>
            <li>Built to operate/rental</li>
            <li>Sale of machine.</li>
            
          </ul>
          <p className='text-xl font-GothamBook leading-loose tracking-normal text-justify'>Our major savings will be in logistics of raw materials, facility space, space to hoard raw materials, space for finished goods and many more. This money saved will be directly reflected in our profit margin.</p>
         <h2 className='text-2xl font-GothamMedium mt-2 mb-2 tracking-normal'>How is the need currently addressed:</h2>
         <p className='text-xl font-GothamBook leading-loose tracking-normal text-justify'>Most of the time, the agro waste is burned. A few processes use agro waste to manufacture different commodities, but they are not efficient as the logistics and collection of agro waste is a difficult task. A lot of labour work is involved in processing this agro waste. Even the current briquetting unit is always running out of raw materials and other resources as they lack mobility and have heavy investments made in them.</p>
         <h2 className='text-2xl font-GothamMedium mt-2 mb-2 tracking-normal'>Primary Benefits:</h2>
         <p className='text-xl font-GothamBook leading-loose tracking-normal text-justify'>Farmers will be our primary beneficiaries because we will provide them with a door-to-door tool for converting their agro waste into high-GCV bio briquettes. The transparent system will not only help them earn extra money from agricultural waste, but it will also give them a sense of openness and security. Our second beneficiaries would be the farm labourers and rural youth, as we have reduced the human effort of the labour work required and thereby generated BOP employment.Businesses will benefit as well, as we will provide them with biomass briquettes for combustion in boilers and furnaces. Also, the environmental benefits will be shared by the entire ecosystem nearby; the humans, animals, and soil microbes that get affected due to the burning of this agro waste.</p>

         </div>

         <div className='ml-16 mr-16 lg:ml-28 lg:mr-28'>
         <h1 className='text-4xl font-GothamBold text-center mt-16 mb-8'>Customer Persona</h1>
         <p className='text-xl font-GothamBook leading-loose tracking-normal text-justify'>Age, sex, income level, race, employment, location, homeownership, and level of education While creating the customer persona with Standford Seed Spark Programme, we came across a data of 138 probable customers, across Maharashtra. With respect to that we got an ensight about the demographic profile of our customer. Our customer is primarily a 40 to 50 year old male farmer, who takes decision about major farming activities. He is located in rural part of the country. He is moderately educated between 12th standard to graduation. His annual profit is around 3 lakh to 5 lakh, with around 3 to 5 acre of land. Apart from his regular farm income, he is always in search of additional income parallel to farming. He is very emotional but at the same time fears to keep trust on new concepts. He is basically a follower and will get it immediately if the other person in his group buys it. He is loyal and personal connect and appreciation or limelight on him has deep impact on his decision making.</p>
         </div>

         <div className='ml-16 mr-16 lg:ml-28 lg:mr-28'>
         <h1 className='text-4xl font-GothamBold text-center mt-16 mb-8'>Value Proposition</h1>
         <p className='text-xl font-GothamBook leading-loose tracking-normal text-justify'>My name is Krunal Jagtap, from Pune India. As we all know climate change is a global problem, adding to which landfills and incineration of waste is an universal problem to be addressed. I and my mother, are founder of our company HAB BIOMASS PVT LTD. We have developed and innovative mobile unit to convert one ton of waste per hour into bio briquettes to be used as fuel in industries. This is a IPR protected product and we have also received a National Award for the same. Along with this, we are among the few people select by Stanford Seed Spark Program 2022, for South Asia Cluster. We are at a POC Stage. I kindly request you, if you can help me with your mentorship, advices, connections and guidance for private equity and for commercialization of my product.</p>
         <ul className='text-xl font-GothamBook leading-loose tracking-normal text-justify list-disc ml-6 list-inside'>
            <li>We have created a very positive impact on rural development.</li>
            <li>Mobility and flexibility to convert agro waste into bio-coal briquettes.</li>
            <li>Parallel income to farmer from his agro waste, which is now being burned off.</li>
            <li>Avoid pollution by not burning the agro waste.</li>
            <li>Save soil microbes by avoiding the burning of waste.</li>
            <li>Alternative to coal and firewood to be used in boiler and furnaces.</li>
            <li>Lower Cost of operations.</li>
            <li>Better Experience for worker and operator.</li>
            <li>Lower land requirement.</li>
            <li>Energy Efficient.</li>
            <li>Less Human intervention to direct contact with waste.</li>
            <li>Optimum logistics.</li>

          </ul>
         </div>

         <div className='ml-16 mr-16 lg:ml-28 lg:mr-28'>
         <h1 className='text-4xl font-GothamBold text-center mt-16 mb-8'>Market Capacity</h1>
         <p className='text-xl font-GothamBook leading-loose tracking-normal text-justify'>A report from Allied Market Research states that in 2020, the global green tech and sustainability market was valued at over $10 billion. By 2030, it’s expected to reach over $74 billion. Across the globe, investments in green technologies hit a whopping $755 billion in 2021, a significant increase from the previous year.</p>
         <p className='text-xl font-GothamBook leading-loose tracking-normal text-justify'>
        (Ref: <a className="hover:text-blue-700 hover:underline" href="https://www.renewableenergymagazine.com/shannon-flynn/reports-show-huge-growth-potential-for-green-20220517" >https://www.renewableenergymagazine.com/shannon-flynn/reports-show-huge-growth-potential-for-green-20220517</a>).The rapid increase in public and investor awareness, coupled with the emergence of policies driving decarbonization, organizations have begun adopting and promoting environmental, social, and governance (ESG) measures.(Ref: <a className="hover:text-blue-700 hover:underline" href="https://www.mckinsey.com/business-functions/sustainability/our-insights/building-a-green-business-lessons-from-sustainability-start-ups" >https://www.mckinsey.com/business-functions/sustainability/our-insights/building-a-green-business-lessons-from-sustainability-start-ups</a>).</p>

         </div>

         <div className='ml-16 mr-16 lg:ml-28 lg:mr-28'>
         <h1 className='text-4xl font-GothamBold text-center mt-16 mb-8'>What motivated us :</h1>
         <p className='text-xl font-GothamBook leading-loose tracking-normal text-justify'>India is an agro based country. Agricultural is an important pillar of our economy. Yet, a large number of agro waste post harvest is waste. There is a huge value hidden in this post harvest agro waste. Also the use of rdf waste and legacy waste in cement and steel industries is very inefficient. On the other hand our nation is going through coal crises. We have developed and innovative mobile unit to convert one ton of agro waste per hour into high GCV biocoal briquettes to be used as fuel in industries. Our innovation acts as a bridge between these two points. We not only supports environment but also give second income to farmer.</p>
         </div>

         <br/>
          <hr/>
          <div className='ml-16 mr-16 lg:ml-28 lg:mr-28'>
          <h1 className='text-4xl font-GothamBold text-center mt-24 mb-8'>Our Advisory</h1>
          <div className='flex flex-none hover:flex-1 flex-wrap justify-evenly '>
            <img src={adv1} alt="adv1" className='w-60'/>
            <img src={adv2} alt="adv2" className='w-60'/>
            <img src={adv3} alt="adv3" className='w-60'/>
            <img src={adv4} alt="adv4" className='w-60'/>

          </div>

          </div>


      <div className='ml-16 mr-16 lg:ml-28 lg:mr-28 '>
      <h3 className='text-xl mb-2 mt-24 font-GothamBook text-center tracking-normal'>PROFESSIONAL PEOPLE</h3>
      <h1 className='text-4xl font-GothamBold text-center mt-4 mb-8'>Meet Our Team</h1>
      <div className='grid md:grid-cols-4 sm:grid-cols-2 gap-4 place-items-center'>
      <figure>
      <img src={per1} className='w-64 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:brightness-75'/>
      <figcaption className='text-xl mb-4 mt-2 font-GothamMedium text-center tracking-normal'>CEO & FOUNDER HBPL<br/>Krunal Jagtap</figcaption>
      </figure>
      <figure>
      <img src={per2} className='w-64 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:brightness-75'/>
      <figcaption className='text-xl mb-4 mt-2 font-GothamMedium text-center tracking-normal'>AI & IOT <br/>Harshada Kamble</figcaption>
      </figure>
      <figure>
      <img src={per3} className='w-64 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:brightness-75' />
      <figcaption className='text-xl mb-4 mt-2 font-GothamMedium text-center tracking-normal'>DIRECTOR & CRM <br/>Sheetal Jagtap</figcaption>
      </figure>
      <figure>
      <img src={per4} className='w-64 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:brightness-75' />
      <figcaption className='text-xl mb-4 mt-2 font-GothamMedium text-center tracking-normal'>MICROBIOLOGIST <br/>Dr. Shibani Sukhi</figcaption>
      </figure>
      </div>
      </div>
   
  
  <div className="relative">
    <img src={image5} alt="Description of the image" className="w-full h-96" />
    <div className="absolute inset-0 bg-[#E5C32A] bg-opacity-80 flex items-center justify-around ">
    <img src={icon1} className="h-20 w-50" alt=""/>
    <h1 class="text-black text-4xl font-GothamBlack ">We’re Leader in Agriculture Market</h1>
    <button className="bg-[#199747] hover:bg-green-700 text-green-900 font-semibold hover:text-white py-4 px-8 border border-green-700 hover:border-transparent rounded w-50 h-50 text-xl font-GothamBook">Shop Now</button>
    </div>
  </div>


  </div>

         <Footer/>



    </div>
  )
}

export default AboutUs