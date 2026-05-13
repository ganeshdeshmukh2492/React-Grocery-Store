import React, { useState } from 'react'
import { FaUser,FaMapMarkerAlt, FaMapPin,FaPhone, FaTruck, FaShoppingBasket,FaChevronDown  } from 'react-icons/fa';

const Shopnow = () => {
  const [activeStep, setActiveStep] = useState(1);

  const [formData, setformData] = useState({
    name: '',
    Phone: '',
    email: '',
    address: '',
    city: '',
    pincode: '',
    items: '',
    paymentMethods: '',
  });

  const items = [
    { name: "Milk", qty: 1, price: 70 },
    { name: "Bread", qty: 2, price: 80 },
    { name: "Apple", qty: 5, price: 100 },
    { name: "Mango", qty: 10, price: 50 },
    { name: "Banana", qty: 12, price: 60 },
    { name: "Potato", qty: 1, price: 20 },
    { name: "Watermelon", qty: 1, price: 10 },
    { name: "Spinach", qty: 1, price: 50 },
    { name: "Curd", qty: 1, price: 40 },
    { name: "Paste", qty: 2, price: 80 },
    { name: "chips", qty: 5, price: 50 },
    { name: "Coca cola", qty: 1, price: 30 },
  ];

  const availablePincode = [
    411001,
    411005,
    411014,
    411045,
    411057
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setformData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const nextStep = () => {
  setActiveStep((prev) => prev + 1);
};

const prevStep = () => {
  setActiveStep((prev) => prev - 1);
};

  return (
    <div
      id='shop'
      className='scroll-mt-20 min-h-[70vh] bg-linear-to-br from-green-50 to-green-100 py-12 px-4'
    >
      <div className='max-w-4xl mx-auto'>

        
        <div className='text-center mb-12'>
          <h1 className='text-4xl font-bold text-gray-800 mb-3'>
            Get Fresh Groceries Delivered
          </h1>

          <p className='text-lg text-gray-600'>
            Order fresh fruits, vegetables, dairy products and daily essentials from FreshMart.
          </p>
        </div>

        
        <div className='mb-12'>
          <div className='relative'>

            <div className='absolute top-1/2 left-0 right-0 h-2 bg-gray-100 rounded-full'></div>

            <div
              className='absolute top-1/2 left-0 h-2 bg-green-500 rounded-full transition-all duration-500'
              style={{ width: `${(activeStep - 1) * 50}%` }}
            ></div>

            <div className='flex justify-between relative z-20'>
              {[1, 2, 3].map((step) => (
                <div
                  key={step}
                  className='flex flex-col items-center'
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      activeStep >= step
                        ? 'bg-green-500 text-white'
                        : 'bg-white text-gray-400 border-2 border-gray-200'
                    }`}
                  >
                    {activeStep > step ? (
                      <svg
                        className='w-5 h-5'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M5 13l4 4L19 7'
                        />
                      </svg>
                    ) : (
                      step
                    )}
                  </div>

                  <span className='text-xs mt-2'>
                    {['Customer Details', 'Delivery Details', 'Payment'][step - 1]}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>

        
        <div className='bg-white rounded-3xl shadow-xl p-8'>

          {activeStep === 1 && (
            <>
              <h2 className='text-2xl font-bold text-gray-800 mb-6 flex items-center'>
                <FaUser className='mr-3 text-green-500' />
                Customer Details
              </h2>

              <div className='space-y-6'>

                {/* Name */}
                <div className='relative'>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder='Full Name'
                    className='w-full p-4 pl-12 border-2 border-gray-200 rounded-xl'
                  />

                  <FaUser className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400' />
                </div>

                {/* Phone */}
                <div className='relative'>
                  <input
                    type="tel"
                    name="Phone"
                    value={formData.Phone}
                    onChange={handleInputChange}
                    placeholder='Phone Number'
                    className='w-full p-4 pl-12 border-2 border-gray-200 rounded-xl'
                  />

                  <FaPhone className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400' />
                </div>

              </div>
            </>
          )}
             {activeStep===2 && (
                <div className='p-8'>
                    <h2 className='text-2xl font-bold text-gray-800 mb-6 flex items-center'>
                    <FaMapMarkerAlt  className='mr-3 text-green-500'/>
                    Addresses Details
                    </h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div className='relative'>
                            <input type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            className='w-full p-4 pl-12 border-2 border-gray-200 rounded-xl transition focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none'
                            required
                             />
                            <FaChevronDown  className=' absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400'/>
                        </div>
                        <div className='relative'>
                          <select name="pincode"
                          value={formData.pincode}
                          onChange={handleInputChange}
                          className='w-full p-4 pl-12 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none appearance-none'
                          required>
                            <option value="">Select pincode</option>
                            {
                                availablePincode.map(pincode=>(
                                    <option key={pincode} value={pincode}>{pincode}</option>
                                ))
                            }
                          </select>
                          <FaMapPin className=' absolute left-4 top-1/2 transform -translate-y-1/2 rotate-90 text-gray-400 '/>
                          <FaChevronDown  className='absolute right-4 top-1/2 transform -translate-y-1/2 rotate-90 text-gray-400'/>
                        </div>
                        <div className='relative md:col-span-2'>
                            <select name="items"
                            value={formData.items}
                            onChange={handleInputChange}
                            className='w-full p-4 pl-12 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none appearance-none transition ' required> 
                           {items.map((item) => (
  <option key={item.name} value={item.name}>
    {item.name}
  </option>
))}
                                </select>
                                <FaTruck className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400'/>
                                <FaChevronDown  className='absolute left-4 top-1/2 transform -translate-y-1/2 rotate-90 text-gray-400'/>
                        </div>
                    </div>
                </div>
             )}  
             {activeStep  ===3 &&(
                <div className='p-8 text-center'>
                    <div className='inline-flex items-center justify-center bg-green-100 p-6
                    rounded-full mb-6'>
                        <FaShoppingBasket className='text-4xl text-green-500'/>
                    </div>
                    <h2 className='text-2xl font-bold text-gray-800 mb-4'> Confirm your Order</h2>
                    <div className='bg-green-50 rounded-xl p-6 mb-8 text-left max-w-md mx-auto'>
                        <div className='flex justify-between py-2 border-b border-green-100'>
                            <span className='text-gray-600'>Name</span>
                            <span className='font-medium'>{formData.name}</span>
                        </div>
                         <div className='flex justify-between py-2 border-b border-green-100'>
                            <span className='text-gray-600'>Phone</span>
                            <span className='font-medium'>{formData.
                            Phone}</span>
                        </div>
                         <div className='flex justify-between py-2 border-b border-green-100'>
                            <span className='text-gray-600'>pincode</span>
                            <span className='font-medium'>{formData.pincode}</span>
                        </div>
                         <div className='flex justify-between py-2 border-b border-green-100'>
                            <span className='text-gray-600'>Items</span>
                            <span className='font-medium'>{formData.items}</span>
                        </div>
                         <div className='flex justify-between py-2 border-b border-green-100'>
                            <span className='text-gray-600'>city</span>
                            <span className='font-medium'>{formData.city}</span>
                        </div>
                    </div>
                    <button className='w-full max-w-xs py-4 bg-linear-to-r from-green-500 to-green-500 text-white font-bold rounded-xl shadow-lg hover:shadow transition-all transform hover:scale-105'>
                        Confirm & Pay online 
                    </button>
                </div>
             )}
             <div className='px-8 pb-8 flex justify-between'>
                {activeStep >1 &&(
                    <button onClick={prevStep} className='px-6 py-3 text-gray-600 font-medium rounded-lg hover:bg-gray-100 transition'>
                        Back
                    </button>
                )}
                {activeStep <3 && (
                     <button onClick={nextStep} className='ml-auto px-6 py-3 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition flex items-center'> Next <FaChevronDown  className='ml-2'/></button>
                )}
                
             </div>
        </div>
      </div>
    </div>
  )
}

export default Shopnow