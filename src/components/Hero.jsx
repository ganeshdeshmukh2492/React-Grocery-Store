import {  CalendarCheck } from 'lucide-react'
import React from 'react'
import Grocery from'../assets/grocery.png'
const hero = () => {
  return (
    <div>
      <section id=' Home' className=' scroll-m-20 bg-green-50 py-16 '>
        <div className=' container mx-auto px-20 flex flex-col-reverse lg:flex-row items-center justify-between 
        gap-10'>
            <div className='max-w-xl text-center lg:text-left space-y-6'>
                <h1 className='text-xl sm:text-4xl lg:text-5xl font-bold text-green-900 leading-tight'>
                    Fresh Groceries Delivered  <br/> To Your Door With Care 
                </h1>
                <p className='text-gray-700 text-sm lg:text-lg'>
                    Get farm-fresh fruits,vegetables, and essentials Delivered quickly to your doorstep at affordable prices.
                </p>
                <a href=" #"
                className='inline-flex items-center bg-green-600 text-whitepx-3 py-1 sm:px-6 sm:py-3 rounded-xl hover:bg-green-700 transition text-base font-medium'>
                    <CalendarCheck className='w-5 h-5 mr-2'/>
                    Offers
                </a>
            </div>
            <div className='flex justify-center'>
                <img src={Grocery} alt="Grocery" className='w-80 lg:w-107.29 rounded-4xl' />

            </div>
        </div>
      </section>
    </div>
  )
}

export default hero
