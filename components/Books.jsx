import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/global.css'

const Books = () => {
  return (
    <>
      <h1 className='font-semibold lg:text-5xl my-8 text-center text-orange-600' >Our Books</h1>
      <div className="flex flex-wrap w-full lg:ml-10 lg:mr-10 justify-evenly">
          <div className="md:w-1/2 lg:w-1/4 p-8">
            <div className="bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
              <img
                className="w-full h-60 object-cover rounded-t-lg"
                alt="Card Image"
                src="https://via.placeholder.com/150"
              />
              <div className="p-7">
                <h2 className="text-2xl font-semibold">Beautiful Card</h2>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis ante sit amet
                  tellus ornare tincidunt.
                </p>
                <div className="flex justify-between items-center mt-4">
                  <a href='./Books/Book1' className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400">
                    See More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 lg:w-1/4 p-4">
            <div className="bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
              <img
                className="w-full h-60 object-cover rounded-t-lg"
                alt="Card Image"
                src="https://via.placeholder.com/150"
              />
              <div className="p-7">
                <h2 className="text-2xl font-semibold">Beautiful Card</h2>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis ante sit amet
                  tellus ornare tincidunt.
                </p>
                <div className="flex justify-between items-center mt-4">
                  <a href ='./Books/Book2' className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400">
                    see More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 lg:w-1/4 p-4">
            <div className="bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
              <img
                className="w-full h-60 object-cover rounded-t-lg"
                alt="Card Image"
                src="https://via.placeholder.com/150"
              />
              <div className="p-7">
                <h2 className="text-2xl font-semibold">Beautiful Card</h2>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis ante sit amet
                  tellus ornare tincidunt.
                </p>
                <div className="flex justify-between items-center mt-4">
                  <a href='./Books/Book3' className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400">
                    See More
                  </a>
                </div>
              </div>
            </div>
          </div>
      </div>
    </>
  );
};

export default Books;
