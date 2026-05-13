
import React, { useState } from 'react'
import { FaChevronLeft, FaChevronRight, FaStore } from 'react-icons/fa';

const Categories = () => {
    const [currentIndex,setCurrentIndex]=useState(0)
    const Categories=[
        {
    id: 1,
    title: "Fresh Apples",
    price: "₹120/kg",
    category: "Fruits",
    image:"https://media.istockphoto.com/id/1473676063/photo/red-apples-on-the-market-stall.webp?a=1&b=1&s=612x612&w=0&k=20&c=x0WdCbhPmrsjSpQHrykHIwlm6Wn2_yFzMuBVyAXSn3c= "
  },
  {
    id: 2,
    title: "Milk",
    price: "₹60/litre",
    category: "Dairy",
    image: "https://images.unsplash.com/photo-1771503937636-c0e37bd23517?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
   {
    id: 3,
    title: "Banana",
    price: "₹60",
    category: "Fruits",
    image: "https://media.istockphoto.com/id/2237270821/photo/young-woman-buys-fresh-fruits-and-vegetables-at-the-market.webp?a=1&b=1&s=612x612&w=0&k=20&c=jzDjHU32G-j1GsBF-GSFdAQKBnrojJyhh8wcCPTyBxk="
  },
   {
    id: 4,
    title: "Grapes",
    price: "₹60/kg",
    category: "Fruits",
    image: "https://images.unsplash.com/photo-1580451359753-6f163ed6c244?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
   {
    id: 5,
    title: "Potato",
    price: "₹20/kg",
    category: "Vegetables",
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
   {
    id: 6,
    title: "Spinach",
    price: "₹20",
    category: "Vegetables",
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BpbmFjaHxlbnwwfHwwfHx8MA%3D%3D"
  },

];
    const nextCategories=()=>{
      setCurrentIndex(( prevIndex)=>
      prevIndex === Categories.length-1 ? 0 : prevIndex
    +1);
    };
    const prevCategories=()=>{
      setCurrentIndex((prevIndex)=>
      prevIndex===0 ? Categories.length-1 : prevIndex-1)
    }
  return (
    <section id='Categories' className='scroll-mt-20 relative py-16 bg-linear-to-r from-green-50 to-green-50 overflow-hidden'>
      <div className='absolute inset-0 opacity-10'>
        <div className='absolute inset-y-0 left-0 w-1/2 bg-green-300'></div>
        <div className='absolute inset-y-0 left-0 w-1/2 bg-green-300 right-0'></div>
      </div>
      <div className='relative max-w-7xl mx-auto px-4 sm:pc-6 lg:px-8
      '>
        <div className=' text-center mb-16'>
          <h2 className='text-3xl font-extrabold text-green-800 sm:text-4xl'> Best Categories</h2>
          <p className='mt-4 text-xl text-gray-600'>
            “Discover top grocery categories filled with fresh, healthy, and everyday products to make your shopping simple and convenient.”
          </p>
        </div>
        <div className='relative'>
          <div className='flex transition-transform duration-500 ease-in-out' 
          style={{transform: `translateX(-${currentIndex * 100}%)`}}>
            {Categories.map((category,index)=>(
              <div key={category.id} className='w-full shrink-0 px-4'>
                <div className='bg-white p-8 rounded-3xl shadow-xl flex flex-col md:flex-row items-center'>
                  <div className='md:w-1/3 mb-8 md:mb-0 flex justify-center'>
                  <div className='relative'>
                    <img
                    className='w-40 h-40 rounded-full object-cover border-4 border-green-100 shadow-lg' 
                    src={category.image} alt={category.title} />
                    <div className='absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-medium'>
                    {category.price}
                    </div>
                  </div>
                  </div>
                  <div className='md:w-2/3 md:pl-12'>
                  <div className='relative'>
                    <FaStore  className=' text-green-200 text-4xl absolute -top-2 -left-10 '/>
                    <p className=' text-lg text-gray-700 mb-6 relative z-10'>
                      {category.title}
                    </p>
                  </div>
                  <div className=' flex items-center justify-between'>
                    <div>
                      <h3 className='text-xl font-bold text-green-800'>
                        {category.category}
                      </h3>
                      <div className='flex mt-1'>
                        {[...Array(6)].map((_, i)=>(
  <FaStore key={i} className="text-gray-300" />
))}
                      </div>
                    </div>
                    <div className='hidden md:flex space-x-2'>
                      <button onClick={prevCategories}
                      className='p-2 rounded-full bg-green-100 text-green-600 hover:bg-green-200 transition-colors'>
                        <FaChevronLeft/>
                      </button>
                      <button onClick={nextCategories}
                      className='p-2 rounded-full bg-green-100 text-green-600 hover:bg-green-200 transition-colors '>
                        <FaChevronRight/>
                      </button>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='flex justify-center mt-8 space-x-4 md:hidden'>
            {Categories.map(( _, index)=>(
              <button key={index}
              onClick={()=> setCurrentIndex (index)}
              className={` w-3 h-3 rounded-full ${ currentIndex===index
                ? 'bg-green-600'
                : ' bg-gray-300'
              }`}>
              </button>
            ))}

          </div>
        </div>
        <div className='mt-6 text-center'>
          <button className='px-8 py-3 bg-green-600 text-white rounded-full font-medium hover:bg-green-700 transition-colors duration-300 shadow-lg hover:shadow-xl'>
            Order More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Categories
