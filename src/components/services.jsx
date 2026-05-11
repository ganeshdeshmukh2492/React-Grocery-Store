import React from "react";
import { motion } from "framer-motion";
import { FaTruck, FaLeaf, FaBreadSlice, FaBoxOpen } from "react-icons/fa";

const serviceData = [
  {
    Icon: <FaTruck className="w-10 h-10 text-green-500" />,
    title: "Reliable Shipping",
    desc: "Get your groceries delivered on time with our trusted delivery service.",
  },
  {
    Icon: <FaLeaf className="w-10 h-10 text-green-500" />,
    title: "Fresh Organic Products",
    desc: "We provide fresh organic vegetables and fruits daily.",
  },
  {
    Icon: <FaBreadSlice className="w-10 h-10 text-green-500" />,
    title: "Bakery Items",
    desc: "Fresh bread, cakes, and bakery products available every day.",
  },
  {
    Icon: <FaBoxOpen className="w-10 h-10 text-green-500" />,
    title: "Easy Packaging",
    desc: "Safe and secure packaging for all grocery items.",
  },
];

const Services = () => {
  return (
    <section
      id="Services"
      className="scroll-mt-20 bg-linear-to-br from-white to-green-50 py-20"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-green-900 mb-4">
            Fresh Mart Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Fresh Mart provides high-quality groceries and daily essentials
            delivered with convenience and care.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceData.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-3xl p-6 shadow-md hover:shadow-lg transition-all border border-green-100 hover:border-green-300"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="mb-4">{service.Icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;