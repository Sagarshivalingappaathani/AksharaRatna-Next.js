import React, { useState } from 'react';
import '../styles/global.css'

const Footer = () => {

  return (
    <>
      <footer className="bg-black rounded-lg shadow m-4 ">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-xl text-white sm:text-center dark:text-gray-400">
          © 2024 <a href="./" className="hover:underline">Readme</a>. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-xl font-medium text-white sm:mt-0">
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">About</a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">Books</a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">Privacy and policy</a>
          </li>
          <li>
            <a href="#" className="hover:underline">Contact</a>
          </li>
        </ul>
      </div>
    </footer>
    </>
  );
};

export default Footer;
