
import React, { useState } from 'react'

const Shopnow = () => {
    const [activeStep,setActiveStep]=useState(1);
    const[formData,setformData]=useState({
        name:'',
        Phone:'',
        email:'',
        address:'',
        city:'',
        pincode:'',
        items:[],
        paymentMethods:'',
    });
    const items =[
        {name:"Milk",qty:1,price:70},
        {name:"Bread",qty:2,price:80},
        {name:"Apple",qty:5,price:100},
        {name:"Mango",qty:10,price:50},
    ]
    const availablePincode=[
        411001, 
  411005, 
  411014,
  411045,
  411057 
    ]
  return (
    <div>
      
    </div>
  )
}

export default Shopnow
