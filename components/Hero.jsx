import React from 'react';
import '../styles/global.css';

function Hero() {
  return (
    <>
      <section className="h-screen bg-cover" style={{ backgroundImage: `url('./hero1.png')` }}>
        <div className="flex h-full w-full items-center justify-center container mx-auto px-8">
          <div className="max-w-5xl text-center">
            <div className="mt-8 flex flex-col space-y-3 sm:-mx-2 sm:flex-row sm:justify-center sm:space-y-0">
              <h2 className='text-black font-bold'> "ನಾನು ಸ್ವರ್ಗ ಹೇಗಿರುತ್ತದೆ ಎಂದು ಊಹಿಸಿಕೊಂಡಾಗ, ಅದೊಂದು ಪುಸ್ತಕಾಲಯದಂತೆ ಕಾಣಿಸುತ್ತದೆ' ಎಂಬ ಜಾರ್ಜ್‌ ಲೂಯಿಸ್‌ ಬೋರ್ಜಸ್‌ರ ಮಾತಿನಲ್ಲಿ ಅತಿಶಯವೇನಿಲ್ಲ! ಪುಸ್ತಕಗಳು ನೀಡುವ ಸುಖ, ಓದುಗನಿಗೆ ಮಾತ್ರ ಅರ್ಥವಾಗಲು ಸಾಧ್ಯ"</h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
