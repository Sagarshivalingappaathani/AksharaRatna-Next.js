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
              <img
                className="w-full h-70 object-cover rounded-t-lg"
                alt="Card Image"
                src="./book1.jpg"
              />
              <div className="p-7">
                <h2 className="text-2xl font-semibold">ಪ್ರತ್ಯುತ್ಕ್ರಮ</h2>
                <p className="text-gray-600">
                ಪ್ರತ್ಯುತ್ಕ್ರಮದ ಅರ್ಥ ಆಕ್ರಮಣಕ್ಕಾಗಿ ಸಿದ್ಧತೆ ಮಾಡಿಕೊಳ್ಳುವುದು ಅಥವಾ ಯುದ್ಧಕ್ಕಾಗಿ ಸಿದ್ಧತೆ ಮಾಡಿಕೊಳ್ಳುವುದು.
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
                className="w-full h-70 object-cover rounded-t-lg"
                alt="Card Image"
                src="./book2.jpg"
              />
              <div className="p-7">
                <h2 className="text-2xl font-semibold">ನೇರಳೆ ಅಂಚು ಗಿಣಿಹಸಿರು ಸೀರೆ</h2>
                <p className="text-gray-600">
                ಈ ಕಥಾಸಂಕಲನದಲ್ಲಿರುವ ಒಂಬತ್ತು ಕಥೆಗಳಲ್ಲಿ ಬರುವ ಮುಖ್ಯ ಸ್ತ್ರೀ ಪಾತ್ರಗಳು ನನ್ನೊಳಗೆ ಸೇರಿದ ರೀತಿ ಕುತೂಹಲದ ಸಂಗತಿ.
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
                className="w-full h-70 object-cover rounded-t-lg"
                alt="Card Image"
                src="./book3.jpg"
              />
              <div className="p-7">
                <h2 className="text-2xl font-semibold">ತತ್ತ್ವಮಸಿ</h2>
                <p className="text-gray-600">
                ಸಂಸ್ಕೃತದ ಮೂಲದಲ್ಲಿ ‘ತತ್ತ್ವಮಸಿ’- "ಅದೆಲ್ಲವೂ ನೀನೇ ಆಗಿರುವೆ" ಎನ್ನುವ ಅರ್ಥ ಕೊಡುವ ಪದ. ('ತತ್- ಅದು , ತ್ವಮ್- ನೀನೇ , ಅಸಿ- ಆಗಿರುವೆ ')
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
    </section>
  );
};

export default Books;
