import React, { useState } from 'react';
import Link from 'next/dist/client/link';
import Image from 'next/image';
import "../styles/global.css";

const Navbar = () => {
  const [isNavbarVisible, setNavbarVisibility] = useState(false);

  const handleHamburgerClick = () => {
    setNavbarVisibility(!isNavbarVisible);
  };

  return (
    <header className="header">
          <a href="/">
            <Image
              src="/logo.png" 
              alt="logo"
              width={200}
              height={90}
              className="object-contain"
            />
          </a>

      <nav className={`navbar ${isNavbarVisible ? 'show' : ''}`}>
        <Link href="./" className="log no-underline" onClick={handleHamburgerClick}>Home</Link>
        <Link href="https://akshararatna.vercel.app/#books" className="log no-underline" onClick={handleHamburgerClick}>Books</Link>
        <Link href="https://akshararatna.vercel.app/#contact" className="log no-underline" onClick={handleHamburgerClick}>Contact Us</Link>
      </nav>

      <div className="hamburger" onClick={handleHamburgerClick}>
      <Image
            src="/grid-outline.svg" 
            alt="logo"
            width={180}
            height={90}
      />
      </div>

    </header>
  );
};

export default Navbar;
