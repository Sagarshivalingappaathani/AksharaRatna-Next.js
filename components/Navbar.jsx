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

      <Link href="/" className="logo no-underline">
        Read<span class="yellow">me</span>
      </Link>

      <nav className={`navbar ${isNavbarVisible ? 'show' : ''}`}>
        <Link href="/" className="log no-underline">Home</Link>
        <Link href="#books" className="log no-underline">Books</Link>
        <Link href="#contact" className="log no-underline">Contact Us</Link>
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
