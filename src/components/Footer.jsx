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
            <p className="text-md text-justify">We are a DPIIT recognised company by Govt of India, under Clean Tech and Green Technology domain.</p>
          </div>
          {/* Section 2: Contact Information */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <p><span className="font-semibold">Phone:</span> +91 9527903194</p>
            <p><span className="font-semibold">Email:</span> <a href="mailto:habbiomass@gmail.com" className="text-gray-300 underline">habbiomass@gmail.com</a></p>
            <p><span className="font-semibold">Address:</span> Markal Village, Khed, Pune, Maharashtra</p>
          </div>
          {/* Section 3: Products */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Products</h2>
            <ul className="list-disc list-inside">
              <li>Briquettes</li>
              <li>Organic Plant Inputs</li>
              <li>Waste Management</li>
            </ul>
          </div>
          {/* Section 4: Policies */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Policies</h2>
            <ul className="list-disc list-inside">
              <li>Return and Refund Policy</li>
              <li>Privacy Policy</li>
              <li>Terms and Conditions</li>
            </ul>
          </div>
        </div>
        {/* Nested Footer */}
        <footer className="bg-[#199747] text-gray-300 pt-20 mt-8">
          <div className="w-full px-16 pb-8">
            <div className="flex justify-between items-center">
              <p className="text-sm">&copy; 2024 HBPL. All rights reserved.</p>
              <div className="flex space-x-4">
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