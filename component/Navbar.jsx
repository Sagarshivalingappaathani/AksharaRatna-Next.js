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

      <Link href="/" className="logo">
      Read<span class="yellow">me</span>
      </Link>

      <nav className={`navbar ${isNavbarVisible ? 'show' : ''}`}>
        <Link href="#home">Home</Link>
        <Link href="#services">Services</Link>
        <Link href="#about">About Us</Link>
        <Link href="#contact">Contact Us</Link>
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
