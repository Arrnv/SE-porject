import React, { useState, useEffect } from 'react';
import backgroundImage from '../assets/4.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';

function CheckoutPage() {

  const [ProductDetails, setProductDetails] = useState([])

  const navigate = useNavigate();

  

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      // Make a request to the backend with the token to get user details
      axios.get('http://127.0.0.1:5000/CartView', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then(response => {
          const groupedProducts = groupProducts(response.data);
          setProductDetails(groupedProducts);
          console.log(groupedProducts)
        })
        .catch(error => {
          setProductDetails([]);
        });
    }
    else {
      navigate('/login');
    }
  }, []);

  const groupProducts = (products) => {
    const grouped = {};
    products.forEach(product => {
      const { name } = product;
      if (grouped[name]) {
        grouped[name].count++;
      } else {
        grouped[name] = { ...product, count: 1 };
      }
    });
    return Object.values(grouped);
  };

  const calculateTotalPrice = (price, quantity) => {
    const numericPrice = parseFloat(price.replace('₹', '').replace('/Kg', ''));
    return (numericPrice * quantity).toFixed(2);
  };

  const handleQuantityChange = (productId, newQuantity) => {
    // setCart(prevCart => prevCart.map(item =>
    //   item.id === productId ? { ...item, quantity: newQuantity } : item
    // ));
  };
  const handleRemoveItem = (productId) => {
    // setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const calculateSubtotal = () => {
    return ProductDetails.reduce((total, item) => {
      const numericPrice = parseFloat(item.price.replace('₹', '').replace('/Kg', ''));
      return total + (numericPrice * item.count);
    }, 0).toFixed(2);
  };

  
  return (

    <div>
      
      <div className="mt-24 bg-green-200 relative">
        <img src={backgroundImage} alt="Background" className="w-full h-52 object-cover" />
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl font-bold">shop product</h1>
      </div>
      {/* {ProductDetails.map(item => (
        <tr key={item.id}>
              {item.name} , {item.price} , {item.count}
        </tr>
      ))} */}
      <div className="container mx-auto px-4">
        <div className="bg-blue-100 rounded-lg p-8 mt-6">
          <div className="relative flex items-center justify-center" style={{ height: "150px", backgroundColor: "rgb(217, 249, 157)", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" }}>
            <div className="text-center">
              <h1 className="text-3xl font-semibold mb-2 text-gray-800">Shopping Cart</h1>
              <p className="text-lg text-gray-600">Your one-stop shop for all your favorite items!</p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="table-auto w-full border-collapse border border-yellow-800 p-8 mt-6">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-4 py-2 text-left">Product</th>
                  <th className="px-4 py-2 text-center">Quantity</th>
                  <th className="px-4 py-2 text-center">Price</th>
                  <th className="px-4 py-2 text-center">Total</th>
                  <th className="px-4 py-2 text-center">Availability</th>
                  <th className="px-4 py-2 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {ProductDetails.map(item => (
                  <tr key={item.id}>
                    <td className="border px-4 py-2">
                      <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
                      {item.name}
                    </td>
                    <td className="border px-4 py-2 text-center">
                      <input
                        type="number"
                        value={item.count}
                        onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                        className="w-16 px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400"
                      />
                    </td>
                    <td className="border px-4 py-2 text-center">{item.price}</td>
                    <td className="border px-4 py-2 text-center">{calculateTotalPrice(item.price, item.count)}</td>
                    <td className="border px-4 py-2 text-center">
                      
                        <span className="text-green-500"> Available</span>
                      
                    </td>
                    <td className="border px-4 py-2 text-center">
                      <button className="text-red-500 hover:text-red-600 focus:outline-none" onClick={() => handleRemoveItem(item.id)}>
                        <FontAwesomeIcon icon={faTrash} className="mr-2" />
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex justify-between mt-8">
            {/* Input field and Apply Coupon button */}
            <div className="flex flex-col w-1/2">
              <div className="flex justify-start"> {/* Changed from 'justify-between' to 'justify-start' */}
                <div className="mr-2">
                  <input
                    type="text"
                    placeholder="Enter coupon code..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-blue-400"
                  />
                </div>
                <div>
                  <button
                    className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-400"
                  >
                    APPLY COUPON
                  </button>
                </div>
              </div>
            </div>

            <div className="flex justify-end w-1/2">
              <button
                className="px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring-1 focus:ring-green-400"
              >
                UPDATE CART
              </button>
            </div>
          </div>
        </div>
        <div className="bg-gray-200 rounded-lg p-8 mt-8">
          <div className="flex justify-between">
            <div className="w-full md:w-1/3 pr-4 bg-orange-100 rounded-lg p-4">
              <h2 className="text-xl font-semibold">Calculate Shipping</h2>
              <div className="mt-4">
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Enter address..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400"
                  />
                </div>
                <div className="mb-4 flex">
                  <div className="w-1/2 mr-2">
                    <input
                      type="text"
                      placeholder="Enter city..."
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400"
                    />
                  </div>
                  <div className="w-1/2 ml-2">
                    <input
                      type="text"
                      placeholder="Enter zip code..."
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <button
                    className="px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring-1 focus:ring-green-400"
                  >
                    Update Totals
                  </button>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/2 pl-4 bg-purple-100 rounded-lg p-4">
              <div class="flex items-center mb-4">
                <i class="fas fa-shopping-cart text-purple-600 mr-2"></i>
                <h2 class="text-xl font-semibold">Cart Totals</h2>
              </div>
              <div class="overflow-x-auto">
                <table class="w-full mt-4 table-auto border-collapse border border-gray-400">
                  <tbody>
                    <tr class="bg-gray-300">
                      <th class="px-4 py-2">Description</th>
                      <th class="px-4 py-2">Amount</th>
                    </tr>
                    <tr>
                      <td class="border px-4 py-2">Cart Subtotal</td>
                      <td class="border px-4 py-2">{calculateSubtotal()}</td>
                    </tr>
                    <tr>
                      <td class="border px-4 py-2">Shipping and Handling</td>
                      <td class="border px-4 py-2">Free Shipping</td>
                    </tr>
                    <tr>
                      <td class="border px-4 py-2">Order Total</td>
                      <td class="border px-4 py-2">{calculateSubtotal()} + Shipping</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="flex justify-end mt-4">
                <button class="px-4 py-2 text-white bg-green-500 rounded-r-md hover:bg-green-600 focus:outline-none focus:ring-1 focus:ring-green-400">
                  Proceed to checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
