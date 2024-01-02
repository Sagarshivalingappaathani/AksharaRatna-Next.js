"use client";
import React from 'react';
import Image from 'next/image';
import Navbar from '../../../components/Navbar';

const Page= () => {
  return (
    <>
      <Navbar/>
      <div className="mt-44 lg:mr-44 flex flex-col md:flex-row items-center">
        <div className="lg:1/3 lg:ml-24 mb-4 md:mr-8 md:w-1/2 hover:scale-105 transition-transform duration-300 ease-in-out">
          <Image
              src="/book1.jpg"
              className="rounded-lg object-cover"
              alt="Author Photo"
              width={400}
              height={225}
          />
        </div>
        <div className="lg:w-2/3 md:w-1/2 p-3">
          <h2 className="text-3xl font-bold mb-4"></h2>
          <p className="text-gray-700 ">
            ಕಥೆಯ ಆರಂಭ ಮಂಗಳೂರಿನಲ್ಲಿ. ಪಿಯುಸಿಯಲ್ಲಿ ಮೊದಲ ರ್ಯಾನ್ಕ್ ಗಳಿಸಿದ್ದ ಪ್ರತಿಭಾವಂತ ತರುಣ ಪ್ರಥಮ್ ಸಾವಿನ ಸುದ್ದಿ ಹೇಳುವ ಮೂಲಕ ಓದುಗರನ್ನು ಸೆಳೆಯುವ ಕತೆ, ಅದೇ ಸಮಯಕ್ಕೆ ಅಲ್ಲಿದ್ದ ಶಿಕ್ಷಣ ಮಂತ್ರಿ ಜಯಚಂದ್ರ ಸಾಗರ್ ನಡುವಳಿಕೆಯ ಮೇಲೆ ಅನುಮಾನ ಮೂಡಿಸುತ್ತದೆ. ಮೇಲ್ನೋಟಕ್ಕೆ ಅದು ಆತ್ಮಹತ್ಯೆ ಎನ್ನುವಂತೆ ಕಾಣಿಸಿದರು, ಅದರ ಬಗ್ಗೆ ಅನುಮಾನ ಪಟ್ಟ ಪ್ರಥಮ್ ಗೆಳೆಯ ಸಮೀರ್ ತಂದೆ ಸಾವಿಗೆ ಕಾರಣ ಹುಡುಕುತ್ತಾ ಹೋಗುತ್ತಾರೆ. ಅವರಿಗೆ ಅದೊಂದು ಹತ್ಯೆ ಎಂದು ತಿಳಿಯುತ್ತದೆ. ಅದರ ಬಗ್ಗೆ ಇನ್ನಷ್ಟು ವಿಷಯ ತಿಳಿಯಲು ಮುಂದಾದಾಗ ಅವರು, ರಸ್ತೆ ಅಪಘಾತದಲ್ಲಿ ಸಾವನ್ನಪ್ಪುತ್ತಾರೆ. ಅಲ್ಲಿಗೆ ಪ್ರಥಮ್ ಹತ್ಯೆಯಾಗಿರುವುದು ನಿಜ ಎನ್ನುವ ಕೌತುಕದ ಬೀಜ ಬಿತ್ತುವ ಕಥೆ, ಮೌನಯುದ್ಧವನ್ನು ಸಾರುತ್ತದೆ. 

            ನಂತರ ಕಥೆ ಒಂಬತ್ತು ವರ್ಷ ಮುಂದಕ್ಕೆ ಸಾಗಿ, ಬೆಂಗಳೂರಿನಲ್ಲಿ ಮುಂದುವರೆಯುತ್ತದೆ. ಅಲ್ಲಿಂದ ಶುರುವಾಗುವುದು ಮೌನಯುದ್ಧದ ಅನಾವರಣ.

            ಅಂದಿನ ಶಿಕ್ಷಣ ಮಂತ್ರಿ ಪ್ರಸ್ತುತ ಮುಖ್ಯಮಂತ್ರಿಯಾಗಿರುತ್ತಾರೆ, ಅವರ ಮಗ ಪ್ರೇಮ್ ಚಂದ್ರಸಾಗರ್ ಯುವಜನ ಹಾಗೂ ಕ್ರೀಡಾ ಶಿಕ್ಷಣ ಸಚಿವನಾಗಿರುತ್ತಾನೆ. ಅವನ ಆಡಳಿತ ಸಲಹೆಗಾರ್ತಿ ಪ್ರತಿಕ್ಷಾ ಹಾಗೂ ಯುವಜನ, ಕ್ರೀಡಾ ಮಂಡಳಿಯ ಆಯುಕ್ತ ಪ್ರಣೀತ್ ಒಂದೇ ಬ್ಯಾಚ್'ನಲ್ಲಿ ತರಬೇತಿ ಪಡೆದ ಐಎಎಸ್ ಅಧಿಕಾರಿಗಳು. ಪ್ರಣೀತ್'ಗೆ ಪ್ರತಿಕ್ಷಾ ಮೇಲೆ ಪ್ರೀತಿ ಇದ್ದರು, ಅವಳ ಮದುವೆ ಪ್ರೇಮ್ ಜೊತೆ ನಿಶ್ಚಯವಾಗಿರುವುದು ತಿಳಿದು ದೂರ ಉಳಿಯುವ ನಿರ್ಧಾರ ಮಾಡುತ್ತಾನೆ. ಆದರೆ ಸದಾ ಗಂಭೀರವಾಗಿರುವ ಪ್ರತಿಕ್ಷಾ ಮನಸ್ಸಿನಲ್ಲಿ ಏನಿದೆ ಎನ್ನುವುದು ಕೊನೆಯ ವರೆಗೂ ನಿಗೂಢವಾಗಿ ಉಳಿಯುವಂತೆ ನೋಡಿಕೊಂಡಿದ್ದಾರೆ ಲೇಖಕಿ.

            ಕಥೆಯಲ್ಲಿ ಮನ ಸೆಳೆಯುವ ವಿಷಯಗಳು ತುಂಬಾ ಇವೆ. ಅಲ್ಲಿ ಮುಖ್ಯವಾಗಿ ಕಾಣಿಸಿಕೊಳ್ಳುವುದು ಭಾರತ ಆಡಳಿತ ವರ್ಗದ ಅಧಿಕಾರಿಗಳ ಕಾರ್ಯವ್ಯಾಪ್ತಿಯ ಪರಿಚಯ. ವಿವಿಧ ಇಲಾಖೆಗಳ ಕಾರ್ಯವೈಖರಿ, ಅಲ್ಲಿನ ಮುಖ್ಯ ಆಡಳಿತ ಅಧಿಕಾರಿಯ ನಡೆ, ಕ್ರೀಡಾ ವಸತಿ ಶಾಲೆಯಲ್ಲಿ ನಡೆಯುವ ಅವ್ಯವಹಾರಗಳ ಅನಾವರಣ ಹೀಗೆ ಬಹಳಷ್ಟು ವಿಷಯಗಳನ್ನು ತೆರೆದಿಡುವ ಕತೆ ಚುರುಕಾಗಿ ಸಾಗುತ್ತದೆ. 

            ಸರ್ಕಾರಿ ಕಛೇರಿಗಳಲ್ಲಿ ಕೆಲಸ ಹೇಗೆ ಸಾಗುತ್ತದೆ, ಅಲ್ಲಿನ ಉದ್ಯೋಗಿಗಳ ನಡುವಳಿಕೆ ಹೇಗಿರುತ್ತದೆ,  ರಾಜಕೀಯ ವ್ಯಕ್ತಿಗಳು ಅಧಿಕಾರಿಗಳನ್ನು ಹೇಗೆಲ್ಲಾ ನಡೆಸಿಕೊಳ್ಳುತ್ತಾರೆ, ಅಧಿಕಾರಿಗಳು ರಾಜಕೀಯ ಮುಖಂಡರ ಕಪಿಮುಷ್ಠಿಗೆ ಸಿಲುಕಿದರೆ, ಅದರಿಂದ ಹೊರ ಬರಲು ಏನೇನು ತೊಂದರೆ ಅನುಭವಿಸುತ್ತಾರೆ ಎನ್ನುವುದನ್ನು ಎಳೆಎಳೆಯಾಗಿ ಬಿಡಿಸಿ ಬರೆದಿದ್ದಾರೆ. ಕತೆಯುದ್ದಕ್ಕೂ ಕಾಡುವುದು ಪ್ರತಿಕ್ಷಾ ಮೌನ, ಪ್ರೇಮ್'ನ ನಿಗೂಢ ನಡುವಳಿಕೆ. ಅವನು ಸದಾ ಪ್ರತಿಕ್ಷಳ ಮೇಲೆ ಕಣ್ಣಿಟ್ಟು ಕಾಯುವ ರೀತಿ ನೋಡಿದರೆ ಅವನೊಬ್ಬ ಶ್ರೀಮಂತ ಮನೆತನದ ಹಾಳುಬಿದ್ದ, ಸ್ತ್ರೀಲೋಲ ಮಗ ಇರಬೇಕು ಎನ್ನುವ ಅನುಮಾನ ಮೂಡಿಸುತ್ತದೆ.

            ಕಥೆಯಲ್ಲಿ ಬರುವ ದಸರಾ ಉತ್ಸವದ ಉದ್ಘಾಟನೆ, ಅಲ್ಲಿನ ಅನೇಕ ಕಾರ್ಯಕ್ರಮಗಳ ವಿವರಣೆಗಳು, ಅದರ ಉಸ್ತುವಾರಿ ವಹಿಸಿದ್ದ ತಂಡದ ಓಡಾಟ, ಮುಂಜಾನೆಯಲ್ಲಿ ಕಾಣಿಸುವ ಚಾಮುಂಡಿ ಬೆಟ್ಟದ ವರ್ಣನೆ ಓದುತ್ತಿದ್ದರೆ, ಈ ಎಲ್ಲಾ ಘಟನೆಗಳಲ್ಲಿ ನಾವು ಕೂಡ ಭಾಗಿಯಾಗಿದ್ದೇವೆ ಎನ್ನುವ ಅನುಭೂತಿ ಮೂಡಿಸುತ್ತವೆ.ಕಥೆಯಲ್ಲಿ ಸದಾ ಚೈತನ್ಯದ ಚಿಲುಮೆಯಾಗಿ ಕಾಣಿಸಿಕೊಳ್ಳುವ ಪ್ರಣೀತ್ ತನ್ನ ಗುರುವಿಗಾದ ಅವಮಾನಕ್ಕೆ ಸೂಕ್ತ ಪರಿಹಾರ ಹುಡುಕುತ್ತಾ ಬುದ್ಧಿವಂತ ಅಧಿಕಾರಿಯಾಗಿ ಕಾಣಿಸಿದರೆ, ಅವನ ಆತ್ಮಸಖಿಯ ಮುಖದಲ್ಲಿ ನಗು ಮೂಡಿಸುವ ಗುಳಿಕೆನ್ನೆಯ ತುಂಟನಾಗಿ ಮನಸೆಳೆಯುವಲ್ಲಿ ಸಫಲನಾಗಿದ್ದಾನೆ.
          </p>
        </div>
      </div>
      <div className='lg:mx-20'>
          <p className='text-gray-700'>
            ಇನ್ನು ಕಥೆಯಲ್ಲಿ 'ಪ್ರ' ಅಕ್ಷರದ ಹೆಸರುಗಳ ಪಾರಪತ್ಯ ಹೆಚ್ಚು. ಪ್ರಣೀತ್, ಪ್ರೇಮ್, ಪ್ರತಿಕ್ಷಾ, ಪ್ರಥಮ್, ಪರೀಕ್ಷಿತ್, ಪ್ರೇರಣಾ, ಪ್ರೇಕ್ಷಿತಾ ಹೆಸರುಗಳು ಸೆಳೆಯುತ್ತವೆ. ಇವೆಲ್ಲಾ ಹೆಸರುಗಳು ಕಥೆಯಲ್ಲಿ ಪಾತ್ರದ ಪ್ರಾಮುಖ್ಯತೆಯನ್ನು ಹೇಳುತ್ತವೆ. 

            ಕಥೆಯಲ್ಲಿ ಕೇವಲ ರಾಜಕೀಯ ಮಾತ್ರವಿಲ್ಲ. ಅದರ ಜೊತೆ ತುಂಬು ಕುಟುಂಬದ ಪ್ರೀತಿ, ಆದರ್ಶ ಪಾಲಿಸುವ ಹಿರಿಯರು, ದರ್ಪ ತೋರುತ್ತಾ ಎಲ್ಲರನ್ನು ಹಿಡಿತದಲ್ಲಿ ಇಟ್ಟುಕೊಳ್ಳುವ ಮುಖ್ಯಮಂತ್ರಿ ತಾಯಿ, ಗೆಳೆತನದ ದುರುಪಯೋಗ ಮಾಡಿಕೊಳ್ಳುವ ದುಷ್ಟರು, ಪ್ರೀತಿಗಾಗಿ ತ್ಯಾಗಕ್ಕೆ ಸಿದ್ದರಾಗುವ ಗೆಳೆಯರು ಕಥೆಯ ಅಂದವನ್ನು ಹೆಚ್ಚಿಸಿದ್ದಾರೆ. 

            "ರಾಜಕೀಯ ಎಂದರೆ ಕೆಸರೇ ಇರಬಹುದು, ಆದರೆ ಅದೇ ಕೆಸರಿನಲ್ಲಿ ದೈವಕ್ಕೆ ಇಷ್ಟವಾದ ಅತಿ ಶ್ರೇಷ್ಠ ಕಮಲ ಅರಳುವುದು" ಎನ್ನುವ ಸಾಲು ಹೇಳುತ್ತಾ, ರಾಜಕೀಯದ ಬಗ್ಗೆ ನನಗಿದ್ದ ತಿರಸ್ಕಾರವನ್ನು ಬದಲಿಸಿದ ಹಿರಿಮೆ ಈ ಕಥೆಯದು.

            ಕಾನೂನು ಚೌಕಟ್ಟು, ನ್ಯಾಯಾಲಯದ ಪರಿಧಿ, ಕಾನೂನು ಪಾಲಕರ ವ್ಯಾಪ್ತಿಯನ್ನು ಎಷ್ಟು ಸರಳವಾಗಿ ಬರೆದಿದ್ದಾರೆ ಎಂದರೆ, ನ್ಯಾಯಾಲಯಕ್ಕೆ ಒಮ್ಮೆ ಹೋಗಿ ಬರಬೇಕು ಎನಿಸುತ್ತದೆ. 

            ಎಲ್ಲಿಯೂ ಅತಿ ಎನಿಸುವ ಸನ್ನಿವೇಶಗಳನ್ನು ಸೃಷ್ಟಿಸದೆ, ವಾಸ್ತವಕ್ಕೆ ಹೊಂದುವ ನಿಜ ಸಂಗತಿಗಳನ್ನು ಮಾತ್ರವೇ ಬರೆಯುತ್ತಾ, ಕಥೆಯನ್ನು ಪ್ರಬುದ್ಧ ರೀತಿಯಲ್ಲಿ ನಿರೂಪಿಸಿದ್ದಾರೆ. ನನ್ನ ಗಮನಕ್ಕೆ ಬಂದಂತೆ ಕಥೆಯುದ್ದಕ್ಕೂ ಒಂದೇ ಒಂದು ಅನಾವಶ್ಯಕ ಸನ್ನಿವೇಶ ಕಾಣಿಸಿಲ್ಲ. ಎಲ್ಲವೂ ಕಥೆಗೆ ಪೂರಕವಾದ ವಿಷಯಗಳೇ ಇವೆ. ಕಥೆ ಇನ್ನಷ್ಟು ದಿನ ಓದಲು ಸಿಗಬೇಕಿತ್ತು ಅನ್ನಿಸುತ್ತಿದ್ದಂತೆಯೇ ಮುಕ್ತಾಯ ಸಾರುತ್ತದೆ. ಅದೂ ಕೂಡ ಸಂಪೂರ್ಣವಾದ ಕಥಾಹಂದರವನ್ನು ಕಟ್ಟಿಕೊಟ್ಟಿದೆ. ಪ್ರತಿಯೊಂದು ಸನ್ನಿವೇಶಗಳು ನಮ್ಮ ಕಣ್ಮುಂದೆ ನಡೆಯುತ್ತಿವೆ ಎನ್ನುವ ಅನುಭೂತಿ ಸೃಷ್ಟಿಸುತ್ತದೆ ಲೇಖಕಿಯ ಬರಹದ ಶೈಲಿ.

            ಭಿನ್ನವಾದ ಶೀರ್ಷಿಕೆಯೇ ನನ್ನನ್ನು ಮೊದಲು ಆಕರ್ಷಿಸಿದ್ದು. ಶೀರ್ಷಿಕೆಯ ಜೊತೆ ಕಾಣಿಸುವ 'ಮೌನ ಯುದ್ಧ' ಎನ್ನುವ ಟ್ಯಾಗ್ ಲೈನ್, ಕತೆಯಲ್ಲಿ ನಡೆಯುವ ಮೌನಯುದ್ಧದ ಸುಳಿವು ನೀಡುತ್ತದೆ. ಆದರೆ ಮೌನಯುದ್ಧ ಸಾರಿರುವವರು ಯಾರು? ಕಾರಣ ಏನು? ಕೊನೆಯಲ್ಲಿ ಗೆಲುವು ಯಾರದು? ಎನ್ನುವ ಪ್ರಶ್ನೆಗಳಿಗೆ ಉತ್ತರ ಕತೆ ಓದಿಯೇ ತಿಳಿಯಬೇಕು.

            ಬರೆದಷ್ಟು ಮುಗಿಯದ ವಿಷಯಗಳು ಈ ಕಾದಂಬರಿಯಲ್ಲಿ ಸಿಗುತ್ತವೆ.
          </p>
      </div>
      <section className=" text-gray-100">
        <div className="container px-6 py-12 mx-auto">
          <div className="grid items-center gap-4 xl:grid-cols-5">
            <div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
              <h2 className="text-4xl font-bold text-orange-600">What Our Reader Says</h2>
              <p className="text-orange-600">Pri ex magna scaevola moderatius. Nullam accommodare no vix, est ei diceret alienum, et sit cetero malorum. Et sea iudico consequat, est sanctus adipisci ex.</p>
            </div>
            <div className="p-6 xl:col-span-3">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="grid content-center gap-4">
                  <div className="p-6 rounded shadow-md bg-gray-900">
                    <p>An audire commodo habemus cum. Ne sed corrumpit repudiandae.An audire commodo habemus cum. Ne sed corrumpit repudiandae.</p>
                    <div className="flex items-center mt-4 space-x-4">
                      <img src="https://source.unsplash.com/50x50/?portrait?1" alt="" className="w-12 h-12 bg-center bg-cover rounded-full bg-gray-500" />
                      <div>
                        <p className="text-lg font-semibold">Leroy Jenkins</p>
                        <p className="text-sm text-gray-400">CTO of Company Co.</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 rounded shadow-md bg-gray-900">
                    <p>Sit wisi sapientem ut, pri civibus temporibus voluptatibus et, ius cu hinc fabulas. </p>
                    <div className="flex items-center mt-4 space-x-4">
                      <img src="https://source.unsplash.com/50x50/?portrait?2" alt="" className="w-12 h-12 bg-center bg-cover rounded-full bg-gray-500" />
                      <div>
                        <p className="text-lg font-semibold">Leroy Jenkins</p>
                        <p className="text-sm text-gray-400">CTO of Company Co.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid content-center gap-4">
                  <div className="p-6 rounded shadow-md bg-gray-900">
                    <p>Putant omnium elaboraret per ut. Id dicta tritani nominavi quo, mea id justo errem elaboraret.</p>
                    <div className="flex items-center mt-4 space-x-4">
                      <img src="https://source.unsplash.com/50x50/?portrait?3" alt="" className="w-12 h-12 bg-center bg-cover rounded-full bg-gray-500" />
                      <div>
                        <p className="text-lg font-semibold">Leroy Jenkins</p>
                        <p className="text-sm text-gray-400">CTO of Company Co.</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 rounded shadow-md bg-gray-900">
                    <p>Te omnes virtute volutpat sed. Ei esse eros interesset vel, Te omnes virtute volutpat sed. Ei esse eros interesset vel,</p>
                    <div className="flex items-center mt-4 space-x-4">
                      <img src="https://source.unsplash.com/50x50/?portrait?4" alt="" className="w-12 h-12 bg-center bg-cover rounded-full bg-gray-500" />
                      <div>
                        <p className="text-lg font-semibold">Leroy Jenkins</p>
                        <p className="text-sm text-gray-400">CTO of Company Co.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
