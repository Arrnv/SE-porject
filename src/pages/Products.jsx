import React from 'react';
import backgroundImage from '../assets/4.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart, faLink, faStar } from '@fortawesome/free-solid-svg-icons';

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
    const products = [
        { id: 1, name: 'Biomass Pellets', price: '₹20/Kg', imageUrl: './images/shop/biomass_pellets1.png' },
        { id: 2, name: 'Vermi Compost', price: '₹119/Kg', imageUrl: './images/shop/VermiCompost.png' },
        { id: 3, name: 'Vermi Wash', price: '₹150/Kg', imageUrl: './images/shop/Vermiwash.png' },
        { id: 4, name: 'Plant Growth booster', price: '₹20/Kg', imageUrl: './images/shop/BioPlastic.png' },
        { id: 5, name: 'Biochar Pellets', price: '₹29.99/Kg', imageUrl: 'images/shop/Biomass Pellets.png' },
        { id: 6, name: 'Biochar', price: '₹24.99/Kg', imageUrl: 'images/shop/Biochar.png' },
        { id: 7, name: 'Briquettes', price: '₹7.5/Kg', imageUrl: './images/shop/biomass_pellets1.png' },
        { id: 8, name: 'Biomass Reinforced Plastic', price: 'Rate : request on demand', imageUrl: './images/shop/biomass_pellets1.png' },
        { id: 9, name: 'Briquettes', price: '₹34.99/Kg', imageUrl: './images/shop/Briquettes.png' },
    ];

    return (
        <div className=''>
            <a className="m-3 flex justify-center items-center text-xl">Vermi Compost</a>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="max-w-sm rounded overflow-hidden shadow-lg m-2 ml-10">
                    <a href="productview" rel="noopener noreferrer" className="hover:opacity-75 relative inline-block">
                        <img className="w-64" src={products[1].imageUrl} alt={products[1].name} />
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300" >
                            <FontAwesomeIcon icon={faLink} className="text-white text-3xl" style={{ color: '#8dc63f' }} />
                        </div>
                    </a>
                    {/* <div className="mt-2"> */}
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{products[1].name}</div>
                        <p className="text-base" style={{ color: '#8dc63f' }}>
                            {products[1].price}
                        </p>
                    </div>
                    <div className="px-4 pt-4 pb-2 border-gray-300 flex justify-between items-center">
                        <a href="addcart" className="cart-btn text-gray-400 hover:text-light-green-500 hover:underline" >
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
                <div className="max-w-sm rounded overflow-hidden shadow-lg m-2 ml-10">
                    <a href="productview" rel="noopener noreferrer" className="hover:opacity-75 relative inline-block">
                        <img className="w-48 h-64" src={products[2].imageUrl} alt={products[2].name} />
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300" >
                            <FontAwesomeIcon icon={faLink} className="text-white text-3xl" style={{ color: '#8dc63f' }} />
                        </div>
                    </a>
                    {/* <div className="mt-2"> */}
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{products[2].name}</div>
                        <p className="text-base" style={{ color: '#8dc63f' }}>
                            {products[2].price}
                        </p>
                    </div>
                    <div className="px-4 pt-4 pb-2 border-gray-300 flex justify-between items-center">
                        <a href="addcart" className="cart-btn text-gray-400 hover:text-light-green-500 hover:underline" >
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

            </div>
            <a className="m-3 flex justify-center items-center text-xl">Pallates</a>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="max-w-sm rounded overflow-hidden shadow-lg m-2 ml-10">
                    <a href="productview" rel="noopener noreferrer" className="hover:opacity-75 relative inline-block">
                        <img className="w-64" src={products[0].imageUrl} alt={products[0].name} />
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300" >
                            <FontAwesomeIcon icon={faLink} className="text-white text-3xl" style={{ color: '#8dc63f' }} />
                        </div>
                    </a>
                    {/* <div className="mt-2"> */}
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{products[0].name}</div>
                        <p className="text-base" style={{ color: '#8dc63f' }}>
                            {products[0].price}
                        </p>
                    </div>
                    <div className="px-4 pt-4 pb-2 border-gray-300 flex justify-between items-center">
                        <a href="addcart" className="cart-btn text-gray-400 hover:text-light-green-500 hover:underline" >
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
                <div className="max-w-sm rounded overflow-hidden shadow-lg m-2 ml-10">
                    <a href="productview" rel="noopener noreferrer" className="hover:opacity-75 relative inline-block">
                        <img className="w-64 h-52" src={products[4].imageUrl} alt={products[4].name} />
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300" >
                            <FontAwesomeIcon icon={faLink} className="text-white text-3xl" style={{ color: '#8dc63f' }} />
                        </div>
                    </a>
                    {/* <div className="mt-2"> */}
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{products[4].name}</div>
                        <p className="text-base" style={{ color: '#8dc63f' }}>
                            {products[4].price}
                        </p>
                    </div>
                    <div className="px-4 pt-4 pb-2 border-gray-300 flex justify-between items-center">
                        <a href="addcart" className="cart-btn text-gray-400 hover:text-light-green-500 hover:underline" >
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
            </div>
            <a className="m-3 flex justify-center items-center text-xl">Biochar</a>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="max-w-sm rounded overflow-hidden shadow-lg m-2 ml-10">
                    <a href="productview" rel="noopener noreferrer" className="hover:opacity-75 relative inline-block">
                        <img className="w-64" src={products[5].imageUrl} alt={products[5].name} />
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300" >
                            <FontAwesomeIcon icon={faLink} className="text-white text-3xl" style={{ color: '#8dc63f' }} />
                        </div>
                    </a>
                    {/* <div className="mt-2"> */}
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{products[5].name}</div>
                        <p className="text-base" style={{ color: '#8dc63f' }}>
                            {products[5].price}
                        </p>
                    </div>
                    <div className="px-4 pt-4 pb-2 border-gray-300 flex justify-between items-center">
                        <a href="addcart" className="cart-btn text-gray-400 hover:text-light-green-500 hover:underline" >
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

            </div>

            <a className="m-3 flex justify-center items-center text-xl">Bio Plastic</a>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="max-w-sm rounded overflow-hidden shadow-lg m-2 ml-10">
                    <a href="productview" rel="noopener noreferrer" className="hover:opacity-75 relative inline-block">
                        <img className="w-64" src={products[3].imageUrl} alt={products[3].name} />
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300" >
                            <FontAwesomeIcon icon={faLink} className="text-white text-3xl" style={{ color: '#8dc63f' }} />
                        </div>
                    </a>
                    {/* <div className="mt-2"> */}
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{products[3].name}</div>
                        <p className="text-base" style={{ color: '#8dc63f' }}>
                            {products[3].price}
                        </p>
                    </div>
                    <div className="px-4 pt-4 pb-2 border-gray-300 flex justify-between items-center">
                        <a href="addcart" className="cart-btn text-gray-400 hover:text-light-green-500 hover:underline" >
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
            </div>

            <a className="m-3 flex justify-center items-center text-xl">Briquettes</a>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="max-w-sm rounded overflow-hidden shadow-lg m-2 ml-10">
                    <a href="productview" rel="noopener noreferrer" className="hover:opacity-75 relative inline-block">
                        <img className="w-64" src={products[8].imageUrl} alt={products[8].name} />
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300" >
                            <FontAwesomeIcon icon={faLink} className="text-white text-3xl" style={{ color: '#8dc63f' }} />
                        </div>
                    </a>
                    {/* <div className="mt-2"> */}
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{products[8].name}</div>
                        <p className="text-base" style={{ color: '#8dc63f' }}>
                            {products[8].price}
                        </p>
                    </div>
                    <div className="px-4 pt-4 pb-2 border-gray-300 flex justify-between items-center">
                        <a href="addcart" className="cart-btn text-gray-400 hover:text-light-green-500 hover:underline" >
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
            
            </div>
        </div>
    );
}



function BestSellers() {
    const products = [
        { name: 'Biomass Pellets', price: '₹20/Kg', image: './images/shop/biomass_pellets1.png', rating: 5 },
        { name: 'Biochar Pellets', price: '$24.00', image: 'images/shop/small_biochar_pellets.jpg', rating: 5 },
        { name: 'Biochar', price: '$20.00', image: 'images/shop/small_biochar.jpg', rating: 5 },
    ];

    return (
        <div className="p-4">
            <h2 className="text-lg font-semibold ">Best Sellers</h2>
            <div className="mt-2">
                {products.map((product, index) => (
                    <div key={index} className="flex items-center mb-4">
                        <img src={product.image} alt={product.name} className="w-16 h-16 mr-4" />
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