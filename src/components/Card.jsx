import React from 'react';


function Card(props) {
  


  return (
    <div className='square-wrapper'>
    <div className={`card-container rounded-lg square shadow-sm h-[35rem] ${props.width}`}>
      <div className={`overflow-hidden rounded-lg `}>
        <img
          className="w-full  cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto"
          src={props.thumbnailSrc}
          alt="image"
        />
      </div>
      <h3 className={`text-[25px] pt-2 pl-6 pr-6 font-GothamBlack text-gray-600 block `}>
        {props.heading}
      </h3>
      <p className={`font-GothamBook text-black p-6 cursor-pointer text-lg duration-300 transition mt-2`}>
        {props.description}
      </p>
      
    </div>
    </div>
  );
  
  
}


export default Card;
