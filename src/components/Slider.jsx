import React, { useState, useEffect } from "react";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const goToPrevSlide = () => {
    const prevSlide = currentSlide === 1 ? 3 : currentSlide - 1;
    setCurrentSlide(prevSlide);
  };

  const goToNextSlide = () => {
    const nextSlide = currentSlide === 3 ? 1 : currentSlide + 1;
    setCurrentSlide(nextSlide);
  };

  useEffect(() => {
    const interval = setInterval(goToNextSlide, 7000); 
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <>
      <div
        id="default-carousel"
        className="relative w-full h-screen"
        data-carousel="slide"
      >
        <div className="relative h-screen overflow-hidden md:h-screen">
          {[1, 2, 3].map((index) => (
            <div
              key={index}
              className={`duration-1000 ease-in-out ${
                currentSlide === index ? "opacity-100" : "opacity-0"
              } absolute top-0 left-0 w-full h-full md:h-full`}
              data-carousel-item
            >
              <div
                className={`h-full w-full md:h-full md:w-full bg-cover ${
                  currentSlide === index
                    ? `bg-myImage${index}`
                    : "bg-transparent"
                }`}
              >
                <div className="bg-black h-full w-full md:h-full md:w-full bg-cover bg-opacity-50 flex justify-center items-center">
                  <h1 className="text-white w-auto md:w-auto">
                    Slide {index}
                  </h1>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          {[1, 2, 3].map((index) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-3 rounded-full ${
                currentSlide === index ? "bg-black" : "bg-gray-300"
              }`}
              aria-current={currentSlide === index ? "true" : "false"}
              aria-label={`Slide ${index}`}
              data-carousel-slide-to={index}
            />
          ))}
        </div>

        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
          onClick={goToPrevSlide}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>

        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
          onClick={goToNextSlide}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </>
  );
};

export default Slider;
