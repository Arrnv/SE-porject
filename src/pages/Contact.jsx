import React from 'react'
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import loc from "../assets/google-309741_1280.png"
import Footer from '../components/Footer';
import contactus from '../assets/contactus.avif';
const Contact = () => {
  return (
    <div className='w-screen '>
      <div class="relative mt-14">
            <img src={contactus} alt="Background Image" class="w-full h-[400px] object-cover opacity-70" />
            <div class="absolute inset-0 bg-green-800 bg-opacity-70 flex items-center justify-around">
            <h1 className="text-white text-4xl font-bold font-GothamBold"></h1>
            </div>
        </div>
        <div className='flex flex-col items-center justify-center gap-8 my-5'>
            <h1 className='text-4xl overflow-y-hidden'>Get in touch with us</h1>
            <p className='w-7/12 font-light text-xl '>We recently helped a small business grow from break-even to over $1m profit in less than 2 years. Please find below contact details and contact us today!</p>
        </div>
        <div className='grid md:grid-cols-3 justify-items-center sm:grid-cols-1 sm:gap-4'>
            <div className='grid grid-cols-1 gap-3 w-80 border h-auto p-7 justify-items-center text-center rounded-xl my-4'>
                <img className='h-24' src={loc} alt="" srcset="" />
                <h1>Come see us</h1>
                <p>241/84 Theme Name Discover Street <br />New York, NY 10012, USA</p>
            </div>
            <div className='grid grid-cols-1 gap-3 w-80 border h-auto p-7 justify-items-center text-center rounded-xl my-4'>
                <img className='h-24' src={loc} alt="" srcset="" />
                <h1>Come see us</h1>
                <p>Ph: +321 456 78 9012 <br />Email: Info@Wesupportyou.com</p>
            </div>
            <div className='grid grid-cols-1 gap-3 w-80 border h-auto p-7 justify-items-center text-center rounded-xl my-4'>
                <img className='h-24' src={loc} alt="" srcset="" />
                <h1>Come see us</h1>
                <p>Monday to Saturday: 09.00am to 18.00pm <br />Sunday : Closed</p>
            </div>
        </div>
        <div className='w-screen grid grid-cols-3 gap-4 px-10 h-screen justify-items-center content-center'>
            <div className='col-span-2 h-auto w-full'>
                <form class="w-10/12  grid md:grid-cols-2 justify-items-center gap-8 border sm:grid-cols-1 p-10 rounded-lg justify-self-end"> 
                    <div className='w-full'>
                        <input type="email" id="email" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-16" placeholder="name@flowbite.com" />
                    </div>
                    <div className='w-full'>
                        <input type="text" placeholder="Name" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-16"/>
                    </div>
                    <div className='w-full'>
                        <input type="tel" placeholder="Phone" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-16"/>
                    </div>
                    <div className='w-full'>
                        <input type="text" placeholder="Subject" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-16"/>
                    </div>
                    <div className='md:col-span-2 sm:col-span-1 w-full'>
                        <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
                    </div>
                </form>
            </div>
           
            <div className='col-span-1 bg-slate-400 overflow-hidden flex flex-col items-center w-full gap-2 text-center ' >
                <img src="https://webneel.com/daily/sites/default/files/images/daily/03-2020/7-nature-photography-landscape-mountain-pawel-kucharski.jpg" alt="Background Image" class="h-32 w-24 object-cover rounded-full " />
                <h1>Brown Angelino</h1>
                <h2>Hr Manager</h2>
                <p>How all this mistaken idea of denouncing <br />pleasure and praising pain was born and I will <br />complete account of the system.</p>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Contact
