import React, { useState } from "react";
import backgroundImage from '../assets/4.jpg';
import { useParams } from 'react-router-dom';
import { Pallates } from '../Data/products';
import { Biochar } from '../Data/products';
import { BioPlastic } from '../Data/products';
import { Briquettes } from '../Data/products';
import { VermiCompost } from '../Data/products';




const Product_view = () => {

    const getProductData = (category, productId) => {

        let productData = [];
        switch (category) {
            case 'Pallates':
                productData = Pallates;
                break;
            case 'Biochar':
                productData = Biochar;
                break;
            case 'BioPlastic':
                productData = BioPlastic;
                break;
            case 'Briquettes':
                productData = Briquettes;
                break;
            case 'VermiCompost':
                productData = VermiCompost;
                break;
        }

        return productData[productId];
    };

    const { productCatagory, ProductId } = useParams();

    const data = getProductData(productCatagory, ProductId);

    const [currentTab, setCurrentTab] = useState('description');
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (imageSrc) => {
        setSelectedImage(imageSrc);
    };

    const features = [
        { name: 'Origin', description: 'Designed by Good Goods, Inc.' },
        { name: 'Material', description: 'Solid walnut base with rare earth magnets and powder coated steel card cover' },
        { name: 'Dimensions', description: '6.25" x 3.55" x 1.15"' },
        { name: 'Finish', description: 'Hand sanded and finished with natural oil' },
        { name: 'Includes', description: 'Wood card tray and 3 refill packs' },
        { name: 'Considerations', description: 'Made from natural materials. Grain and color vary with each item.' },
    ]
    const callouts = [
        {
            name: 'Desk and Office',
            price: '₹ 100',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
            imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
            href: '#',
        },
        {
            name: 'Self-Improvement',
            price: '₹ 200',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
            imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
            href: '#',
        },
        {
            name: 'Travel',
            price: '₹ 300',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
            imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
            href: '#',
        },
    ]

    const people = [
        {
            name: 'Leslie Alexander - Sep 17, 2016',
            message: 'How all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.',
            star: 'https://t3.ftcdn.net/jpg/05/64/75/20/360_F_564752027_D1rFJj6mBywdz0D1Dkp2q5QUr6OWidOq.jpg',
            imageUrl:
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            lastSeen: '2h ago',
            lastSeenDateTime: '2023-01-23T13:23Z',
        },
        {
            name: 'Michael Foster - Sep 12, 2016',
            message: 'there anyone who loves or pursues or desires to obtain pain itself, because it is pain, but because occasionally circumstances occur some great pleasure.',
            star: 'https://t3.ftcdn.net/jpg/05/64/75/20/360_F_564752027_D1rFJj6mBywdz0D1Dkp2q5QUr6OWidOq.jpg',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            lastSeen: '3h ago',
            lastSeenDateTime: '2023-01-23T13:23Z',
        },
        {
            name: 'Dries Vincent - Sep 10, 2016',
            message: 'How all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.',
            star: 'https://t3.ftcdn.net/jpg/05/64/75/20/360_F_564752027_D1rFJj6mBywdz0D1Dkp2q5QUr6OWidOq.jpg',
            imageUrl:
                'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            lastSeen: '6h ago',
        },
        {
            name: 'Lindsay Walton - Sep 9, 2016',
            message: 'there anyone who loves or pursues or desires to obtain pain itself, because it is pain, but because occasionally circumstances occur some great pleasure.',
            star: 'https://t3.ftcdn.net/jpg/05/64/75/20/360_F_564752027_D1rFJj6mBywdz0D1Dkp2q5QUr6OWidOq.jpg',
            imageUrl:
                'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            lastSeen: '7h ago',
            lastSeenDateTime: '2023-01-23T13:23Z',
        },
        {
            name: 'Courtney Henry - Sep 8, 2016',
            message: 'How all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.',
            star: 'https://t3.ftcdn.net/jpg/05/64/75/20/360_F_564752027_D1rFJj6mBywdz0D1Dkp2q5QUr6OWidOq.jpg',
            imageUrl:
                'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            lastSeen: '8h ago',
            lastSeenDateTime: '2023-01-23T13:23Z',
        },
        {
            name: 'Tom Cook - Sep 6, 2016',
            message: 'there anyone who loves or pursues or desires to obtain pain itself, because it is pain, but because occasionally circumstances occur some great pleasure.',
            star: 'https://t3.ftcdn.net/jpg/05/64/75/20/360_F_564752027_D1rFJj6mBywdz0D1Dkp2q5QUr6OWidOq.jpg',
            imageUrl:
                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            lastSeen: '10h ago',
        },
    ]


    const [count, setCount] = useState(1);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    return (
        <div>

            <div className="mt-24 bg-green-200 relative h-1/2 screen">
                <img src={backgroundImage} alt="Background" className="w-full h-1/2 screen object-cover" />
                <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl font-bold">shop product</h1>
            </div>
            <div class="flex font-sans px-12 py-7">
                <div className="flex">
                    <div className="flex-none w-40 py-6 relative flex flex-col items-center">
                        <img className="h-24 w-24 p-2 rounded-2xl cursor-pointer transition duration-500 ease-in-out hover:scale-110" src="https://media.licdn.com/dms/image/D4D22AQGdJlcBQXnakw/feedshare-shrink_800/0/1701083398415?e=2147483647&v=beta&t=PBRtwDSItvaCGNTF3K-h5iy4z6XKMAkta_9_c2x3rjY" alt="Image" onClick={() => handleImageClick('https://media.licdn.com/dms/image/D4D22AQGdJlcBQXnakw/feedshare-shrink_800/0/1701083398415?e=2147483647&v=beta&t=PBRtwDSItvaCGNTF3K-h5iy4z6XKMAkta_9_c2x3rjY')} />
                        <img className="h-20 w-24 p-2 rounded-2xl cursor-pointer transition duration-500 ease-in-out hover:scale-110" src="https://img.freepik.com/premium-photo/renewable-energy-environmental-protection-ai-generated_609002-1411.jpg" alt="Image" onClick={() => handleImageClick('https://img.freepik.com/premium-photo/renewable-energy-environmental-protection-ai-generated_609002-1411.jpg')} />
                        <img className="h-20 w-24 p-2 rounded-2xl cursor-pointer transition duration-500 ease-in-out hover:scale-110" src="https://biomassenergytechniques.com/wp-content/uploads/2023/06/BioMass.jpg" alt="Image" onClick={() => handleImageClick('https://biomassenergytechniques.com/wp-content/uploads/2023/06/BioMass.jpg')} />
                        <img className="h-24 w-24 p-2 rounded-2xl cursor-pointer transition duration-500 ease-in-out hover:scale-110" src="https://www.jessleephotos.com/images/640/Teton-spring.jpg" alt="Image" onClick={() => handleImageClick('https://www.innovationnewsnetwork.com/wp-content/uploads/2023/01/shutterstockOselote-_2014282742.jpg')} />
                    </div>
                    <div className="flex-none mr-96 w-96 relative">
                        <img src={selectedImage || 'https://media.licdn.com/dms/image/D4D22AQGdJlcBQXnakw/feedshare-shrink_800/0/1701083398415?e=2147483647&v=beta&t=PBRtwDSItvaCGNTF3K-h5iy4z6XKMAkta_9_c2x3rjY'} alt="" className="absolute inset-0 w-full h-full object-cover rounded-lg transition duration-500 ease-in-out hover:scale-110" loading="lazy" />
                    </div>
                </div>
                <form class="flex-auto ml-6 p-6">
                    <div class="flex flex-wrap">
                        <h1 class="flex-auto font-medium text-slate-900">
                            {data.name}
                            <div class="flex items-center mt-2">
                                <svg class="h-5 w-5 text-lime-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M18.95 8.224a.75.75 0 0 0-1.1-.802l-5.225-.85L10.15 2.45a.75.75 0 0 0-1.351 0l-2.475 4.122-5.225.85a.75.75 0 0 0-.413 1.281l3.775 3.682-1.125 5.213a.75.75 0 0 0 1.088.837l4.65-2.45 4.65 2.45a.75.75 0 0 0 1.088-.837l-1.125-5.213 3.775-3.682a.75.75 0 0 0 .212-.479z" clip-rule="evenodd"></path>
                                </svg>
                                <svg class="h-5 w-5 text-lime-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M18.95 8.224a.75.75 0 0 0-1.1-.802l-5.225-.85L10.15 2.45a.75.75 0 0 0-1.351 0l-2.475 4.122-5.225.85a.75.75 0 0 0-.413 1.281l3.775 3.682-1.125 5.213a.75.75 0 0 0 1.088.837l4.65-2.45 4.65 2.45a.75.75 0 0 0 1.088-.837l-1.125-5.213 3.775-3.682a.75.75 0 0 0 .212-.479z" clip-rule="evenodd"></path>
                                </svg>
                                <svg class="h-5 w-5 text-lime-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M18.95 8.224a.75.75 0 0 0-1.1-.802l-5.225-.85L10.15 2.45a.75.75 0 0 0-1.351 0l-2.475 4.122-5.225.85a.75.75 0 0 0-.413 1.281l3.775 3.682-1.125 5.213a.75.75 0 0 0 1.088.837l4.65-2.45 4.65 2.45a.75.75 0 0 0 1.088-.837l-1.125-5.213 3.775-3.682a.75.75 0 0 0 .212-.479z" clip-rule="evenodd"></path>
                                </svg>
                                <svg class="h-5 w-5 text-lime-500" fill="currentColor" viewBox="0 0 20 20">
                                    <defs>
                                        <clipPath id="clip-path">
                                            <rect x="0" y="0" width="10" height="20" />
                                        </clipPath>
                                    </defs>
                                    <path fill-rule="evenodd" clip-path="url(#clip-path)" d="M18.95 8.224a.75.75 0 0 0-1.1-.802l-5.225-.85L10.15 2.45a.75.75 0 0 0-1.351 0l-2.475 4.122-5.225.85a.75.75 0 0 0-.413 1.281l3.775 3.682-1.125 5.213a.75.75 0 0 0 1.088.837l4.65-2.45 4.65 2.45a.75.75 0 0 0 1.088-.837l-1.125-5.213 3.775-3.682a.75.75 0 0 0 .212-.479z" clip-rule="evenodd"></path>
                                </svg>
                                <span class="ml-1 text-sm text-gray-600">4.5/5</span>
                            </div>
                        </h1>

                        <div class="w-full flex-none mt-2 order-1 text-3xl font-bold text-lime-500">
                            ₹49.00
                        </div>

                        <div class="text-sm font-medium text-lime-700">
                            In stock
                        </div>
                    </div>

                    <div className="flex items-baseline mt-4 mb-4 pb-0 text-gray-600">
                        Working from home meant we couldsnack and coffee our breaks change our desks or view, good, drink on the job, even spend the weather started getting roughday in pajamas consequences.
                    </div>
                    <div className="pb-3 text-black-1000 text-bold">
                        Check Delivery Option at Your Location:
                        <div class="relative py-2">
                            <input type="text" class="border border-slate-500 rounded-l-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-lime-500" placeholder="Pincode" />
                            <button class="bg-zinc-300 text-black py-2 px-4 rounded-r-lg ml-1 hover:bg-lime-500 hover:text-white">CHECK</button>
                        </div>
                    </div>
                    <div className="pb-3 text-lime-600">
                        Expected Delivery in 4-10 Days
                    </div>

                    <div class="flex space-x-4 mb-5 text-sm font-medium">
                        <div class="flex-auto flex space-x-4">

                            <div className="bg-white border border-2 border-gray-500 rounded-lg h-10 w-24" data-hs-input-number>
                                <div className="flex justify-between items-center h-full px-3">
                                    <div className="grow">
                                        <input className="w-full h-full bg-transparent border-0 text-center" type="text" value={count} readOnly />
                                    </div>
                                    <div className="flex items-center">
                                        <button type="button" className="p-2" onClick={handleDecrement} data-hs-input-number-decrement>
                                            <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /></svg>
                                        </button>
                                        <button type="button" className="p-2" onClick={handleIncrement} data-hs-input-number-increment>
                                            <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <button className="h-10 px-6 font-semibold rounded-full bg-lime-500 text-white hover:text-lime-500 hover:bg-white hover:border-2 hover:border-lime-500" type="submit">
                                ADD TO CART
                            </button>
                        </div>
                        <button class="flex-none flex items-center justify-center w-9 h-9 rounded-full text-lime-500 bg-violet-50" type="button" aria-label="Like">
                            <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                            </svg>
                        </button>
                    </div>
                </form>
            </div>

            <div>

                <div className="product-block py-2 px-20">
                    <div className="button-container">
                        <button
                            className={`font-bold py-2 px-4 ${currentTab === 'description' ? 'bg-lime-500 text-white' : 'bg-zinc-200'}`}
                            style={{ marginRight: '10px' }}
                            onClick={() => setCurrentTab('description')}
                        >
                            Description
                        </button>
                        <button
                            className={`font-bold py-2 px-4 ${currentTab === 'reviews' ? 'bg-lime-500 text-white' : 'bg-zinc-200'}`}
                            onClick={() => setCurrentTab('reviews')}
                        >
                            Reviews
                        </button>
                    </div>
                    <div className="content-container">
                        {currentTab === 'description' ? (
                            <div>
                                <div className="bg-white border border-gray-300">
                                    <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-7 sm:px-6 sm:py-7 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                                        <div>
                                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Technical Specifications</h2>
                                            <p className="mt-4 text-gray-500">
                                                Our product, which is protected by Intellectual Property Rights, addresses this problem and has received numerous accolades,
                                                including a National Award, Birac BIG 21 and a win at the Atal New India Challenge. We are honored to have been selected for
                                                the prestigious Stanford Seed Spark Program 2022 for South Asia Cluster and the Together 23 program, a flagship initiative by Startup
                                                India and Canada.
                                            </p>

                                            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                                                {features.map((feature) => (
                                                    <div key={feature.name} className="border-t border-gray-200 pt-4">
                                                        <dt className="font-medium text-gray-900">{feature.name}</dt>
                                                        <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                                                    </div>
                                                ))}
                                            </dl>
                                        </div>
                                        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8 items-center">
                                            <img
                                                src="https://content.jdmagicbox.com/comp/def_content/biomass-briquette-wholesalers/9c81cf7d51-biomass-briquette-wholesalers-2-5urx5.jpg?impolicy=queryparam&im=Resize=(360,360),aspect=fit"
                                                alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                                                className="rounded-lg bg-gray-100"
                                            />
                                            <img
                                                src="https://media.licdn.com/dms/image/D4D12AQFMyN9bXLZ0YA/article-cover_image-shrink_600_2000/0/1695458361736?e=2147483647&v=beta&t=B9G_s6IBFCa6fHeDQS2Ms3Ssk9ni6_Ych1yUYRIk4tM"
                                                alt="Top down view of walnut card tray with embedded magnets and card groove."
                                                className="rounded-lg bg-gray-100"
                                            />
                                            <img
                                                src="https://content.jdmagicbox.com/rep/b2b/biomass-briquette/biomass-briquette-2.jpg?impolicy=queryparam&im=Resize=(360,360),aspect=fit"
                                                alt="Walnut card tray filled with cards and card angled in dedicated groove."
                                                className="rounded-lg bg-gray-100"
                                            />
                                            <img
                                                src="https://wirralcoalandlogs.co.uk/cdn/shop/articles/mg-8138.webp?v=1663698022&width=1100"
                                                alt="Side of walnut card tray with card groove and recessed card area."
                                                className="rounded-lg bg-gray-100"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="border border-gray-300 mx-auto grid gap-x-8 gap-y-16 px-4 py-7 sm:px-6 sm:py-7 lg:max-w-screen-2xl lg:grid-cols-1 lg:px-16">
                                {/*  reviews content */}
                                <ul role="list" className="divide-y divide-gray-100 bg-white">
                                    <p className="text-2xl">6 Reviews For Hab Biomass</p>
                                    {people.map((person) => (
                                        <li key={person.message} className="flex justify-between gap-x-6 py-5">
                                            <div className="flex min-w-0 gap-x-6">
                                                <img className="h-14 w-14 flex-none rounded bg-gray-50" src={person.imageUrl} alt="" />
                                                <div className="min-w-0 flex-auto">
                                                    <div className="blue-box p-4 py-5 max-w-6xl rounded-lg border border-zinc-400">
                                                        <div className="flex justify-between items-center">
                                                            <div className="flex items-center">
                                                                <p className="text-sm font-semibold leading-6 text-gray-900">{person.name}</p>
                                                                <div className="flex items-center ml-2">

                                                                    <img className="h-8 w-25 flex-none rounded bg-gray-50" src={person.star} alt="" />


                                                                </div>
                                                            </div>
                                                            <p className="text-xs leading-5 text-gray-500">Post Time <time dateTime={person.lastSeenDateTime}>{person.lastSeen}</time></p>
                                                        </div>
                                                        <p className="mt-1 truncate text-xs leading-5 text-gray-500">{person.message}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                                <div className="Review-section">
                                    <p className="text-2xl">Add Your Review</p>
                                    <form>
                                        <div>
                                            <div className="border-b border-gray-900/10 pb-12">
                                                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                                    <div className="sm:col-span-3">
                                                        <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                                            First name*
                                                        </label>
                                                        <div className="mt-2">
                                                            <input
                                                                type="text"
                                                                name="first-name"
                                                                id="first-name"
                                                                autoComplete="given-name"
                                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="sm:col-span-3">
                                                        <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                                            Last name
                                                        </label>
                                                        <div className="mt-2">
                                                            <input
                                                                type="text"
                                                                name="last-name"
                                                                id="last-name"
                                                                autoComplete="family-name"
                                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="sm:col-span-4">
                                                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                                            Email address*
                                                        </label>
                                                        <div className="mt-2">
                                                            <input
                                                                id="email"
                                                                name="email"
                                                                type="email"
                                                                autoComplete="email"
                                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="sm:col-span-4">
                                                        <label htmlFor="text" className="block text-sm font-medium leading-6 text-gray-900">
                                                            Your Review*
                                                        </label>
                                                        <div className="mt-2">
                                                            <textarea
                                                                id="review"
                                                                name="review"
                                                                rows={3}
                                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                                defaultValue={''}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="border-b border-gray-900/10 pb-12">
                                                <h2 className="text-base font-semibold leading-7 text-gray-900">Notifications</h2>
                                                <p className="mt-1 text-sm leading-6 text-gray-600">
                                                    We'll always let you know about important changes, but you pick what else you want to hear about.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="mt-6 flex items-center justify-begin gap-x-6">
                                            <button type='submit' className="h-10 px-6 font-semibold rounded-full bg-lime-500 text-white hover:text-lime-500 hover:bg-white hover:border-2 hover:border-lime-500">
                                                SUBMIT NOW
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* last section */}

            <div className="">
                <div className="mx-auto max-w-7xl px-10 sm:px-10 lg:px-1">
                    <div className="mx-auto max-w-2xl py-7 sm:py-2 lg:max-w-none lg:py-7">
                        <h2 className="text-2xl font-bold text-gray-900">Collections</h2>
                        <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                            {callouts.map((callout) => (
                                <div key={callout.name} className="group relative rounded border border-zinc-400">
                                    <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                                        <img
                                            src={callout.imageSrc}
                                            alt={callout.imageAlt}
                                            className="h-full w-full object-cover object-center"
                                        />
                                    </div>
                                    <div className="mt-2 flex justify-between px-10 py-2">
                                        <div>
                                            <h3 className="text-1xl text-boald">
                                                {callout.name}
                                            </h3>
                                            <p className="mt-1 text-2xl text-lime-500">{callout.price}</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center px-10 py-3 border-dashed border-t-2 border-zinc-300">
                                        <div className="flex items-center">
                                            <img className="h-7" src="https://static.vecteezy.com/system/resources/previews/027/381/351/original/shopping-cart-icon-shopping-trolley-icon-shopping-cart-logo-container-for-goods-and-products-economics-symbol-design-elements-basket-symbol-silhouette-retail-design-elements-vector.jpg"></img>
                                            <p className="hover:text-lime-500">Add to Cart</p>
                                        </div>
                                        <div className="flex items-center">
                                            <img className="h-10 w-30" src="https://t3.ftcdn.net/jpg/05/64/75/20/360_F_564752027_D1rFJj6mBywdz0D1Dkp2q5QUr6OWidOq.jpg"></img>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )

}

export default Product_view