import React from 'react'
import Veg from '../assets/veg.png'
import { FaCarrot } from 'react-icons/fa'

const About = () => {
  return (
    <section className=" py-20 scroll-mt-20 bg-green-50">
<div className=" container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center gap-12"> 
<div className=" w-full lg:w-1/2 flex justify-center">
 <img src={Veg} alt="veg" className=" w-80 lg:w-105 rounded-full shadow-md"/>
</div>
<div className=" w-full lg:w-1/2 space-y-6 text-center lg:text-left">
<div className=' flex items-center justify-center lg:justify-start space-x-2'>
< FaCarrot className='text-green-600 w-7 h-7'/>
<h2 className=' text-3xl font-bold text-green-900'>
    About Our Grocery 
</h2>
</div>
<p className='text-gray-700 text-lg leading-relaxed'>
Fresh Mart delivers fresh groceries, daily essentials, and quality products at affordable prices—making shopping easy, quick, and convenient.
</p>
<p className=' text-gray-700 text-lg leading-relaxed'>
Fresh Mart offers fresh groceries, organic produce, and everyday essentials with quality service you can trust.
</p>
</div>
</div>
    </section>
  )
}

export default About
