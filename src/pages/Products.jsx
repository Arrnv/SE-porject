import React from 'react';
import backgroundImage from '../assets/4.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart, faLink, faStar } from '@fortawesome/free-solid-svg-icons';
import productsData from '../Data/products';
import { Pallates } from '../Data/products';
import { Biochar } from '../Data/products';
import { BioPlastic } from '../Data/products';
import { Briquettes } from '../Data/products';
import { VermiCompost } from '../Data/products';
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function Product() {
    return (
        <div>
            <div className="mt-24 bg-green-200 relative h-1/2 screen">
                <img src={backgroundImage} alt="Background" className="w-full h-1/2 screen object-cover" />
                <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl font-bold">shop product</h1>
            </div>
            <Breadcumb />
            <ShopSection />
        </div>
    );
}

function Breadcumb() {
    return (
        <div className="breadcumb-wrapper bg-gray-200 bg-opacity-50 py-3 px-0" style={{ fontSize: '14px', fontFamily: 'Gotham' }}>
            <div className="container mx-auto">
                <div className="flex items-center">
                    <ul className="list-none flex ml-36">
                        <li className="mr-2 font-semibold">
                            <a href="/" className="text-black hover:text-blue-700">Home</a>
                            <FontAwesomeIcon icon={faAngleRight} className="mx-2" />
                        </li>

                        <li style={{ color: '#8dc63f' }} className="font-semibold">
                            Shop
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

function ShopSection() {
    return (
        <div className="shop sec-padd">
            <div className="container mx-auto">
                <div className="flex">
                    <Sidebar />
                    <ProductRow />
                </div>
            </div>
        </div>
    );
}

function Sidebar() {
    return (
        <div className="col-md-3 col-sm-12 col-xs-12 sidebar_styleTwo">
            <div className="wrapper shop-sidebar">
                <div className="sidebar_search mt-20" >
                    <form action="#">
                        <input type="text" placeholder="Search...." className="px-4 py-2 w-44 h-10 outline-none  border-gray-300" />
                        <button className="px-4 py-2 h-10" style={{ color: '#000', backgroundColor: '#8dc63f' }}>
                            <FontAwesomeIcon icon={faSearch} className="text-white" />
                        </button>
                    </form>
                </div>
                <br /><br />

                <div className="category-style-one">

                    <div className="p-4">
                        <h2 className="text-lg font-semibold mb-2">Categories</h2>
                        <ul className="list-none">
                            {['Products', 'Services'].map((category, index) => (
                                <li key={index} className="flex justify-between items-center py-2 border-b border-gray-300">
                                    <span className="text-gray-400">{category}</span>
                                    <span className="text-gray-400 text-sm">{'>'}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="best_sellers clearfix wow fadeInUp">
                    <BestSellers />
                </div>
            </div>
        </div>
    );
}

function ProductRow() {
    const navigate = useNavigate();
    const handleProductView = (ProductCategory, ProductId) => {
        const ProductLink = `/productview/${ProductCategory}/${ProductId}`;
        window.open(ProductLink, '_blank');
    };

    const AddProductToCart = (product) => {
        const token = Cookies.get('token')
        if (token) {
            // Make a request to the backend with the token to get user details
            axios.post('http://127.0.0.1:5000/AddToCart', {
                product: product, // Include the product data in the request body
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
                .then(response => {
                    console.log(response.data);
                    window.open('/addcart', '_blank');
                })
                .catch(error => {
                    navigate('/login');
                });
        }
        else {
            navigate('/login');
        }

        // const ProductLink = `/productview/${ProductCategory}/${ProductId}`;
        // window.open(ProductLink, '_blank');
    };


    return (
        <div className=''>

            <a className="m-3 flex justify-center items-center text-xl">Pallates</a>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {Pallates.map((product, index) => (
                    <div className="max-w-sm rounded overflow-hidden shadow-lg m-2 ml-10">
                        <a onClick={() => handleProductView('Pallates', product.id)} rel="noopener noreferrer" className="hover:opacity-75 relative inline-block">
                            <img className="w-64" src={product.imageUrl} alt={product.name} />
                            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300" >
                                <FontAwesomeIcon icon={faLink} className="text-white text-3xl" style={{ color: '#8dc63f' }} />
                            </div>
                        </a>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{product.name}</div>
                            <p className="text-base" style={{ color: '#8dc63f' }}>
                                {product.price}
                            </p>
                        </div>
                        <div className="px-4 pt-4 pb-2 border-gray-300 flex justify-between items-center">
                            <a onClick={() => AddProductToCart(product)} className="cart-btn text-gray-400 hover:text-light-green-500 hover:underline" >
                                <FontAwesomeIcon icon={faShoppingCart} className="mr-1 text-lg" />
                                Add To Cart
                            </a>
                            <div className="flex items-center mt-2">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 " style={{ color: '#8dc63f' }} viewBox="0 0 24 24">
                                        <path d="M12 .587l3.515 7.113 7.485 1.086-5.414 5.277 1.278 7.449-6.864-3.613-6.864 3.613 1.278-7.449-5.414-5.277 7.485-1.086z"></path>
                                    </svg>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}

            </div>


            <a className="m-3 flex justify-center items-center text-xl">Biochar</a>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {Biochar.map((product, index) => (
                    <div className="max-w-sm rounded overflow-hidden shadow-lg m-2 ml-10">
                        <a onClick={() => handleProductView('Biochar', product.id)} rel="noopener noreferrer" className="hover:opacity-75 relative inline-block">
                            <img className="w-64" src={product.imageUrl} alt={product.name} />
                            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300" >
                                <FontAwesomeIcon icon={faLink} className="text-white text-3xl" style={{ color: '#8dc63f' }} />
                            </div>
                        </a>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{product.name}</div>
                            <p className="text-base" style={{ color: '#8dc63f' }}>
                                {product.price}
                            </p>
                        </div>
                        <div className="px-4 pt-4 pb-2 border-gray-300 flex justify-between items-center">
                            <a onClick={() => AddProductToCart(product)} className="cart-btn text-gray-400 hover:text-light-green-500 hover:underline" >
                                <FontAwesomeIcon icon={faShoppingCart} className="mr-1 text-lg" />
                                Add To Cart
                            </a>
                            <div className="flex items-center mt-2">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 " style={{ color: '#8dc63f' }} viewBox="0 0 24 24">
                                        <path d="M12 .587l3.515 7.113 7.485 1.086-5.414 5.277 1.278 7.449-6.864-3.613-6.864 3.613 1.278-7.449-5.414-5.277 7.485-1.086z"></path>
                                    </svg>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <a className="m-3 flex justify-center items-center text-xl">Bio Plastic</a>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {BioPlastic.map((product, index) => (
                    <div className="max-w-sm rounded overflow-hidden shadow-lg m-2 ml-10">
                        <a onClick={() => handleProductView('BioPlastic', product.id)} rel="noopener noreferrer" className="hover:opacity-75 relative inline-block">
                            <img className="w-64" src={product.imageUrl} alt={product.name} />
                            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300" >
                                <FontAwesomeIcon icon={faLink} className="text-white text-3xl" style={{ color: '#8dc63f' }} />
                            </div>
                        </a>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{product.name}</div>
                            <p className="text-base" style={{ color: '#8dc63f' }}>
                                {product.price}
                            </p>
                        </div>
                        <div className="px-4 pt-4 pb-2 border-gray-300 flex justify-between items-center">
                            <a onClick={() => AddProductToCart(product)} className="cart-btn text-gray-400 hover:text-light-green-500 hover:underline" >
                                <FontAwesomeIcon icon={faShoppingCart} className="mr-1 text-lg" />
                                Add To Cart
                            </a>
                            <div className="flex items-center mt-2">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 " style={{ color: '#8dc63f' }} viewBox="0 0 24 24">
                                        <path d="M12 .587l3.515 7.113 7.485 1.086-5.414 5.277 1.278 7.449-6.864-3.613-6.864 3.613 1.278-7.449-5.414-5.277 7.485-1.086z"></path>
                                    </svg>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <a className="m-3 flex justify-center items-center text-xl">Briquettes</a>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {Briquettes.map((product, index) => (
                    <div className="max-w-sm rounded overflow-hidden shadow-lg m-2 ml-10">
                        <a onClick={() => handleProductView('Briquettes', product.id)} rel="noopener noreferrer" className="hover:opacity-75 relative inline-block">
                            <img className="w-64" src={product.imageUrl} alt={product.name} />
                            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300" >
                                <FontAwesomeIcon icon={faLink} className="text-white text-3xl" style={{ color: '#8dc63f' }} />
                            </div>
                        </a>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{product.name}</div>
                            <p className="text-base" style={{ color: '#8dc63f' }}>
                                {product.price}
                            </p>
                        </div>
                        <div className="px-4 pt-4 pb-2 border-gray-300 flex justify-between items-center">
                            <a onClick={() => AddProductToCart(product)} className="cart-btn text-gray-400 hover:text-light-green-500 hover:underline" >
                                <FontAwesomeIcon icon={faShoppingCart} className="mr-1 text-lg" />
                                Add To Cart
                            </a>
                            <div className="flex items-center mt-2">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 " style={{ color: '#8dc63f' }} viewBox="0 0 24 24">
                                        <path d="M12 .587l3.515 7.113 7.485 1.086-5.414 5.277 1.278 7.449-6.864-3.613-6.864 3.613 1.278-7.449-5.414-5.277 7.485-1.086z"></path>
                                    </svg>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}

            </div>
            <a className="m-3 flex justify-center items-center text-xl">Vermi Compost</a>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {VermiCompost.map((product, index) => (
                    <div className="max-w-sm rounded overflow-hidden shadow-lg m-2 ml-10">
                        <a onClick={() => handleProductView('VermiCompost', product.id)} rel="noopener noreferrer" className="hover:opacity-75 relative inline-block">
                            <img className="w-64" src={product.imageUrl} alt={product.name} />
                            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300" >
                                <FontAwesomeIcon icon={faLink} className="text-white text-3xl" style={{ color: '#8dc63f' }} />
                            </div>
                        </a>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{product.name}</div>
                            <p className="text-base" style={{ color: '#8dc63f' }}>
                                {product.price}
                            </p>
                        </div>
                        <div className="px-4 pt-4 pb-2 border-gray-300 flex justify-between items-center">
                            <a onClick={() => AddProductToCart(product)} className="cart-btn text-gray-400 hover:text-light-green-500 hover:underline" >
                                <FontAwesomeIcon icon={faShoppingCart} className="mr-1 text-lg" />
                                Add To Cart
                            </a>
                            <div className="flex items-center mt-2">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 " style={{ color: '#8dc63f' }} viewBox="0 0 24 24">
                                        <path d="M12 .587l3.515 7.113 7.485 1.086-5.414 5.277 1.278 7.449-6.864-3.613-6.864 3.613 1.278-7.449-5.414-5.277 7.485-1.086z"></path>
                                    </svg>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}



function BestSellers() {

    return (
        <div className="p-4">
            <h2 className="text-lg font-semibold ">Best Sellers</h2>
            <div className="mt-2">
                {productsData.map((product, index) => (
                    <div key={index} className="flex items-center mb-4">
                        <img src={product.imageUrl} alt={product.name} className="w-16 h-16 mr-4" />
                        <div>
                            <p className="font-bold">{product.name}</p>
                            <p style={{ color: '#8dc63f' }}>{product.price}</p>
                            <p style={{ color: '#8dc63f' }}>{'★'.repeat(product.rating)}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Product;