/*import React from 'react';
import Link from 'next/dist/client/link';
import Image from 'next/image';
import "../styles/global.css";

const Hero = () => {
  
  return (
    <section class="home" id="home">
      <div class="content">
        <h1><span class="yellow">once wise men said</span></h1>
        <p>
        "A Book is a gift you can open it again and again"
        </p>
      </div>
      <div class="image">
      <Image
            src="/hero.png" 
            alt="logo"
            width={180}
            height={90}
      />
      </div>
    </section>
  );
};

export default Hero;*/
/*
import React from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from './hero.jpg';
import img2 from './hero.jpg';
import img3 from './hero.jpg';

import '../styles/global.css'

const images = [
   img1,
   img2,
   img3,
 
];

function Hero() {
  return (
    <div className="carousel-container">
      <Carousel 
      useKeyboardArrows={true}
      stopOnHover={false}
      showThumbs={false}
      interval={2000}
      transitionTime={800}
      >
        {images.map((URL, index) => (
          <div className="slide">
            <img alt="sample_file" src={URL} key={index} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Hero;*/

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';
import hero1 from '../public/hero.jpg';
import hero2 from '../public/hero.jpg';
import hero3 from '../public/hero.jpg';
import '../styles/global.css';

const images = [hero1, hero2, hero3];

function Hero() {
  return (
    <>
      <section className="h-screen bg-cover" style={{ backgroundImage: `url('./hero1.png')` }}>
        <div className="flex h-full w-full items-center justify-center container mx-auto px-8">
          <div className="max-w-5xl text-center">
            <h1 className="text-3xl font-bold mb-2 sm:text-5xl capitalize tracking-widest green lg:text-7xl animate-fade-in">Once A wise Man Said</h1>
            <p id="typing-text" className="mt-6 lg:text-lg font-bold text-white"></p>
            <div className="mt-8 flex flex-col space-y-3 sm:-mx-2 sm:flex-row sm:justify-center sm:space-y-0">
              <h2>"A book is a gift you can open again and again."</h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
