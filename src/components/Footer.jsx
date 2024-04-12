import React from 'react';
import logo from '../assets/rearth_logo.png'

function Footer() {
  return (
    <footer className="bg-[#034329] text-gray-300 pt-16  mt-0">
      <div className=" mx-auto  pt-16">
        <div className="grid grid-cols-4 gap-16 pb-16 max-w-7xl mx-auto">
          {/* Section 1: HAB Image and Description */}
          <div>
            <img src={logo} alt="HAB Logo" className="w-24 h-16 " />
            <p className="text-md text-justify font-GothamBook">We are a DPIIT recognised company by Govt of India, under Clean Tech and Green Technology domain.</p>
          </div>
          {/* Section 2: Contact Information */}
          <div>
            <h2 className="text-xl font-GothamMedium mb-4">Contact Us</h2>
            <p className='font-GothamBook'><span className="font-GothamMedium">Phone:</span> +91 9527903194</p>
            <p className='font-GothamBook'><span className="font-GothamMedium">Email:</span> <a href="mailto:habbiomass@gmail.com" className="text-gray-300 underline">habbiomass@gmail.com</a></p>
            <p className='font-GothamBook'><span className="font-GothamMedium">Address:</span> Markal Village, Khed, Pune, Maharashtra</p>
          </div>
          {/* Section 3: Products */}
          <div>
          <a href="/products" className="text-xl font-GothamMedium mb-4">Products</a>
            <ul className="list-disc list-inside font-GothamBook">
              <li>Pellets</li>
              <li>Biochar</li>
              <li>Bio Plastic</li>
              <li>Briquettes</li>
              <li>Vermi Compost</li>
            </ul>
          </div>
          {/* Section 4: Policies */}
          <div>
            <h2 className="text-xl font-GothamMedium mb-4">Policies</h2>
            <ul className="list-disc list-inside font-GothamBook">
              <li><a href="/Retrefpolicy">Return and Refund Policy</a></li>
              <li>Privacy Policy</li>
              <li>Terms and Conditions</li>
            </ul>
          </div>
        </div>
        {/* Nested Footer */}
        <footer className="bg-[#199747] text-gray-300 box-border mt-8">
          <div className="w-full box-border px-36 py-16">
            <div className="flex justify-between items-center">
              <p className="text-sm font-GothamBook">&copy; 2024 HBPL. All rights reserved.</p>
              <div className="flex space-x-4 font-GothamBook">
                <a href="#" className="text-gray-300 hover:text-white">
                  Facebook
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  Twitter
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </footer>
  );
}

export default Footer;