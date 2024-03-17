import React from 'react';

function Card3({
  heading,
  description,
  thumbnailSrc,
  thumbnailAlt = "Thumbnail",
  className,
}) {
  return (
    <div className={`rounded-lg p-6 shadow-sm w-64 ${className}`}>
      <div className="overflow-hidden rounded-lg">
        <img
          className="w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto"
          src={thumbnailSrc}
          alt={thumbnailAlt}
        />
      </div>
      <h3 className="pt-5 text-[25px] font-bold text-gray-600 block">
        {heading}
      </h3>
      <p className="font-normal text-gray-500 cursor-pointer text-lg duration-300 transition hover:text-[#FA5252] mt-2">
        {description}
      </p>
    </div>
  );
}

function Card3Presentation() {
  return (
    <div className="container mx-auto px-5">
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 p-3 sm:p-8">
        <Card3
          className="bg-[#fcf4ff]"
          heading="Technology"
          description="A Mobile unit to convert agro unit into high gvc bio coal briquettes."
          thumbnailSrc="https://cdn-icons-png.freepik.com/512/5670/5670272.png"
        />
        <Card3
          className="bg-[#fefaf0]"
          heading="Best Team"
          description="A team comprising skilled engineers,designers and technicians."
          thumbnailSrc="https://cdn-icons-png.freepik.com/256/8910/8910584.png?ga=GA1.1.578189848.1710522730&"
        />
        <Card3
          className="bg-[#f3faff]"
          heading="Certificates"
          description="We are certified by govt.of India i.e :DPIIT, NSIC, EIC,ISO, CE, DYMER."
          thumbnailSrc="https://cdn-icons-png.freepik.com/256/3406/3406124.png?ga=GA1.1.578189848.1710522730&"
        />
        <Card3
          className="bg-[#f5e6ff]"
          heading="Our Goal"
          description="We're focused on 'To make our planet a better place to live in.'"
          thumbnailSrc="https://cdn-icons-png.freepik.com/256/11831/11831857.png?ga=GA1.1.578189848.1710522730&"
        />
      </div>
    </div>
  );
}

export default Card3Presentation;
