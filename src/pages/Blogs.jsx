// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Cookies from 'js-cookie'
// import axios from 'axios';

// function BlogSection() {

//     const [Blogs, setBlogs] = useState([])

//     const navigate = useNavigate();

//     useEffect(() => {
//         const token = Cookies.get('token');
//         if (token) {
//             // Make a request to the backend with the token to get user details
//             axios.get('http://127.0.0.1:5000/blogs')
//                 .then(response => {
//                     // Reverse the array of blogs to display the latest one first
//                     setBlogs(response.data.reverse());
//                     console.log(response.data)
//                 })
//                 .catch(error => {
//                     setBlogs([]);
//                 });
//         }
//         else {
//             setBlogs([]);
//         }
//     }, []);

//     return (
//         <div className='mt-40'>

//             {/* Latest Blog */}
//             {Blogs.length > 1 && (
//                 <div class="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
//                     {Blogs.slice(0, 1).map(blog => (
//                         <div key={blog.id}>
//                             <a rel="noopener noreferrer" href="#" class="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-gray-50">
//                                 <img src={blog.imageUrl} alt="" class="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 bg-gray-500" />
//                                 <div class="p-6 space-y-2 lg:col-span-5">
//                                     <h3 class="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">{blog.title}</h3>
//                                     <span class="text-xs text-gray-600">{blog.PostDate}</span>
//                                     <span class="text-xs text-gray-600 self-end">{blog.ReadTime}</span>
//                                     <p>{blog.shortDescription}</p>
//                                 </div>
//                             </a>
//                         </div>
//                     ))}
//                 </div>
//             )}

//             {/* Privious Three Blogs */}
//             {Blogs.length > 2 && (
//                 <section className="flex flex-col justify-center max-w-6xl min-h-screen px-4 mx-auto sm:px-6">
//                     <div className="flex flex-wrap -mx-4">
//                         {/* Map through Blogs and render each blog */}
//                         {Blogs.slice(1, 4).map(blog => (
//                             <div key={blog.id} className="w-full max-w-full mb-8 sm:w-1/2 lg:w-1/3 px-4">
//                                 <div className="flex flex-col w-80">
//                                     <img src={blog.imageUrl} alt="Card img" className="object-cover object-center w-full h-48" />
//                                     <div className="flex flex-grow h-auto">
//                                         <div className="flex flex-col justify-between px-4 py-6 bg-white border border-gray-400 text flex-grow">
//                                             <div>
//                                                 <a href="#" className="inline-block mb-4 text-xs font-bold capitalize border-b-2 border-blue-600 hover:text-blue-600">
//                                                     {blog.PostDate} ,{blog.ReadTime}
//                                                 </a>
//                                                 <a href="#" className="block mb-4 text-2xl font-black leading-tight hover:underline hover:text-blue-600">
//                                                     {blog.title}
//                                                 </a>
//                                                 <p className="mb-4">
//                                                     {blog.shortDescription}
//                                                 </p>
//                                             </div>
//                                             <div>
//                                                 <a href="#" className="inline-block pb-1 mt-2 text-base font-black text-blue-600 uppercase border-b border-transparent hover:border-blue-600">
//                                                 Read More ->
//                                                 </a>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </section>
//             )}

//             {Blogs.length > 4 && (
//                 <section className="flex flex-col justify-center max-w-6xl px-4 mx-auto sm:px-6">
//                     <div className="flex flex-wrap -mx-4">
//                         {/* Map through Blogs and render each blog */}
//                         {Blogs.slice(4, Blogs.length).map(blog => (
//                             <div key={blog.id} className="w-full max-w-full mb-8 sm:w-1/2 lg:w-1/3 px-4">
//                                 <div className="flex flex-row-reverse"> {/* Reverse flex direction */}
//                                     <div className="flex flex-col justify-between">
//                                         <div className="flex flex-grow px-4 py-6 bg-white border border-gray-400 text">
//                                             <div>
//                                                 <a href="#" className="inline-block mb-4 text-xs font-bold capitalize border-b-2 border-blue-600 hover:text-blue-600">
//                                                     {blog.PostDate} ,{blog.ReadTime}
//                                                 </a>
//                                                 <a href="#" className="block mb-4 text-xl font-black leading-tight hover:underline hover:text-blue-600">
//                                                     {blog.title}
//                                                 </a>
//                                                 <a href="#" className="inline-block pb-1 mt-2 text-xs font-black text-blue-600 uppercase border-b border-transparent hover:border-blue-600">
//                                                 Read More ->
//                                                 </a>
//                                             </div>
//                                             <div>

//                                             </div>
//                                         </div>
//                                     </div>
//                                     <img src={blog.imageUrl} alt="Card img" className="object-cover w-full h-auto" />
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </section>
//             )}
//         </div>
//     );
// }

// export default BlogSection;


import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'
import axios from 'axios';

function BlogSection() {

    const [Blogs, setBlogs] = useState([])

    const navigate = useNavigate();

    useEffect(() => {
        const token = Cookies.get('token');
        if (token) {
            // Make a request to the backend with the token to get user details
            axios.get('http://127.0.0.1:5000/blogs')
                .then(response => {
                    // Reverse the array of blogs to display the latest one first
                    setBlogs(response.data.reverse());
                    console.log(response.data)
                })
                .catch(error => {
                    setBlogs([]);
                });
        }
        else {
            setBlogs([]);
        }
    }, []);

    return (
        <div className='mt-24'>

            {/* Latest Blog */}
            {Blogs.length > 0 && (
                <div class="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                    {Blogs.slice(0, 1).map(blog => (
                        <div key={blog.id}>
                            <a rel="noopener noreferrer" href="#" class="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-gray-50">
                                <img src={blog.imageUrl} alt="" class="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 bg-gray-500" />
                                <div class="p-6 space-y-2 lg:col-span-5">
                                    <h3 class="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">{blog.title}</h3>
                                    <span class="text-xs text-gray-600">{blog.PostDate}</span>
                                    <span class="text-xs text-gray-600 self-end">{blog.ReadTime}</span>
                                    <p>{blog.shortDescription}</p>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            )}

            {/* Previous Three Blogs */}
            {Blogs.length > 2 && (
                <section className="flex flex-col justify-center max-w-6xl px-4 mx-auto sm:px-6 mt-10">
                    <div className="flex flex-wrap -mx-4">
                        {/* Map through Blogs and render each blog */}
                        {Blogs.slice(1, 4).map(blog => (
                            <div key={blog.id} className="w-full max-w-full mb-8 sm:w-1/2 lg:w-1/3 px-4">
                                <div className="flex flex-col w-80">
                                    <img src={blog.imageUrl} alt="Card img" className="object-cover object-center w-full h-48" />
                                    <div className="flex flex-grow h-auto">
                                        <div className="flex flex-col justify-between px-4 py-6 bg-white border border-gray-400 text flex-grow">
                                            <div>
                                                <a href="#" className="inline-block mb-4 text-xs font-bold capitalize border-b-2 border-blue-600 hover:text-blue-600">
                                                    {blog.PostDate} ,{blog.ReadTime}
                                                </a>
                                                <a href="#" className="block mb-4 text-2xl font-black leading-tight hover:underline hover:text-blue-600">
                                                    {blog.title}
                                                </a>
                                                <p className="mb-4">
                                                    {blog.shortDescription}
                                                </p>
                                            </div>
                                            <div>
                                                <a href="#" className="inline-block pb-1 mt-2 text-base font-black text-blue-600 uppercase border-b border-transparent hover:border-blue-600">
                                                    Read More ->
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Remaining Blogs */}
            {Blogs.length > 4 && (
                <section className="flex flex-col justify-center max-w-6xl px-4 mx-auto sm:px-6 mt-10">
                    <div className="flex flex-wrap -mx-4">
                        {/* Map through Blogs and render each blog */}
                        {Blogs.slice(4, Blogs.length).map(blog => (
                            <div key={blog.id} className="w-full max-w-full mb-8 sm:w-1/2 lg:w-1/3 px-4">
                                <div className="flex flex-row-reverse"> {/* Reverse flex direction */}
                                    <div className="flex flex-col justify-between">
                                        <div className="flex flex-grow px-4 py-6 bg-white border border-gray-400 text">
                                            <div>
                                                <a href="#" className="inline-block mb-4 text-xs font-bold capitalize border-blue-600 hover:text-blue-600">
                                                    {blog.PostDate} ,{blog.ReadTime}
                                                </a>
                                                <a href="#" className="block mb-4 text-xl font-black leading-tight hover:underline hover:text-blue-600">
                                                    {blog.title}
                                                </a>
                                                <a href="#" className="inline-block pb-1 mt-2 text-xs font-black text-blue-600 uppercase border-b border-transparent hover:border-blue-600">
                                                    Read More ->
                                                </a>
                                            </div>
                                            <div>

                                            </div>
                                        </div>
                                    </div>
                                    <img src={blog.imageUrl} alt="Card img" className="object-cover w-full h-auto" />
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
}

export default BlogSection;
