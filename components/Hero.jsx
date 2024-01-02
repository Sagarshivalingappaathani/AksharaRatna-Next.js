import React from 'react';
import '../styles/global.css';

function Hero() {
  return (
    <>
      <section className="h-screen bg-cover" style={{ backgroundImage: `url('./hero1.png')` }}>
        <div className="flex h-full w-full items-center justify-center container mx-auto px-8">
          <div className="max-w-5xl text-center">
            <h1 className="text-3xl font-bold mb-2 sm:text-5xl capitalize tracking-widest green lg:text-7xl animate-fade-in">ಒಮ್ಮೆ ಒಬ್ಬ ಬುದ್ಧಿವಂತನು ಹೇಳಿದನು</h1>
            <p id="typing-text" className="mt-6 lg:text-lg font-bold text-white"></p>
            <div className="mt-8 flex flex-col space-y-3 sm:-mx-2 sm:flex-row sm:justify-center sm:space-y-0">
              <h2> "ಪುಸ್ತಕವು ನೀವು ಮತ್ತೆ ಮತ್ತೆ ತೆರೆಯಬಹುದಾದ ಉಡುಗೊರೆಯಾಗಿದೆ."</h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
