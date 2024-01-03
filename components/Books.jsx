import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/global.css'

const Books = () => {
  return (
    <section id="books">
      <h1 className='font-semibold text-5xl my-8 text-center text-orange-600' >Our Books</h1>
      <div className="flex flex-wrap w-full lg:ml-10 lg:mr-10 justify-evenly">
          <div className="md:w-1/2 lg:w-1/4 p-8">
            <div className="bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
              <a href='./Books/Book1'><img
                className="w-full h-70 object-cover rounded-lg"
                alt="Card Image"
                src="./book1.jpg"
              /></a>
            </div>
          </div>
          <div className="md:w-1/2 lg:w-1/4 p-4">
            <div className="bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
              <a href='./Books/Book2'>
                <img
                  className="w-full h-70 object-cover rounded-lg"
                  alt="Card Image"
                  src="./book2.jpg"
                />
              </a>
            </div>
          </div>
          <div className="md:w-1/2 lg:w-1/4 p-4">
            <div className="bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
              <a href='./Books/Book3'>
                <img
                  className="w-full h-70 object-cover rounded-lg"
                  alt="Card Image"
                  src="./book3.jpg"
                />
              </a>
            </div>
          </div>
      </div>
    </section>
  );
};

export default Books;
