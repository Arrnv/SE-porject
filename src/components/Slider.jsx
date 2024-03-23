import React from 'react'
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import image1 from '../assets/slide1.jpg'
import image2 from '../assets/slide2.jpg'
import image3 from '../assets/slide3.jpg'
const Slider = () => {
  const fadeImages = [
    {
      url: image1,
      caption: 'First Slide'
    },
    {
      url: image2,
      caption: 'Second Slide'
    },
    {
      url: image3,
      caption: 'Third Slide'
    },
  ];
  return (
    <div className="slide-container w-screen relative  align-middle h-auto rounded-3xl px-10 m-auto mt-14">
    <Fade>
      {fadeImages.map((fadeImage, index) => (
         <div className='w-full h-screen rounded' key={index}>
         <img
           className='top-0 left-0 w-full h-screen object-cover rounded-3xl'
           src={fadeImage.url}
           alt='/'
         />
         <div className='bg-black/30 absolute top-0 left-0 w-full h-screen rounded-3xl' />
         <div className='absolute text-2xl md:text-7xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
           <p className='tex-red-700'>{fadeImage.caption}</p>
         </div>
       </div>
      ))}
    </Fade>
  </div>
  )
}

export default Slider
