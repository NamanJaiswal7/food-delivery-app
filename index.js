import React from "react"
import ReactDOM from "react-dom/client";
import { motion } from 'framer-motion';
import React from 'react';
import './index.css'
const Navbar = () => {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-white">Logo</span>
            </div>
          </div>
          <div className="flex">
            <motion.a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              whileHover={{ scale: 1.1 }}
            >
              Home
            </motion.a>
            <motion.a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              whileHover={{ scale: 1.1 }}
            >
              About
            </motion.a>
            <motion.a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              whileHover={{ scale: 1.1 }}
            >
              Services
            </motion.a>
            <motion.a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              whileHover={{ scale: 1.1 }}
            >
              Contact
            </motion.a>
          </div>
        </div>
      </div>
    </nav>
  );
};

const RestaurantCard = ({isLoading}) => {
  if (isLoading) {
    return <Shimmer />;
  }

  return (
    <motion.div
      className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden m-4"
      whileHover={{ scale: 1.05 }}
    >
      <img
        className="w-full h-48 object-cover"
        src="restaurant-image.jpg"
        alt="Restaurant"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">Restaurant Name</h3>
        <p className="text-gray-700">Description of the restaurant...</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm text-gray-600">Location</span>
          <span className="text-sm text-gray-600">Rating: 4.5/5</span>
        </div>
      </div>
    </motion.div>
  );
};

const Shimmer = () => (
  <div className="bg-gray-200 animate-pulse">
    <div className="h-48 w-full"></div>
    <div className="p-4">
      <div className="h-4 bg-gray-300 mb-2"></div>
      <div className="h-4 bg-gray-300"></div>
    </div>
  </div>
);

const AppLayout=()=>
{
    return (<>
    <Navbar/>
   <RestaurantCard/></>)
}
const root =ReactDOM.createRoot(document.getElementById('root'));
root.render(AppLayout())