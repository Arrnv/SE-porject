import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import image1 from '../assets/bg_iamge3.avif';
import image2 from '../assets/plantation-south-east-asia.jpg';
import image3 from '../assets/bg_image1.png';
import { Parallax } from 'react-scroll-parallax';

const Slider = () => {
  const fadeImages = [
    {
      url: image1,
      caption: 'Hab Biomass',
      caption2: 'Private Ltd'
    },
    {
      url: image2,
      caption: 'Hab Biomass',
      caption2: 'Private Ltd'
    },
    {
      url: image3,
      caption: 'Hab Biomass',
      caption2: 'Private Ltd'
    },
  ];
  return (
    <div className="slide-container w-screen relative align-middle h-auto my-24">
      <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div className='w-full h-screen rounded' key={index}>
            <Parallax speed={-30}>
            <img
              className='top-0 left-0 w-full h-screen object-cover '
              src={fadeImage.url}
              alt='/'
            />
            </Parallax>
            
            <div className='bg-black/30 absolute top-0 left-0 w-full h-screen ' />
            
              <div className='absolute z-30 text-3xl md:text-7xl text-center text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <p className='text-xl underline font-Gotham'>NATIONAL AWARD WINNING STARTUP</p>
                <p className='tex-red-700 font-GothamBlack'>{fadeImage.caption}</p>
                <p className='tex-red-700 font-GothamBlack'>{fadeImage.caption2}</p>
              </div>
         
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default Slider;
