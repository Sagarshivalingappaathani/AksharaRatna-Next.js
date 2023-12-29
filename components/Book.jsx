import React from 'react';
import Image from 'next/image';


const Book = () => {
  return (
    <>
      <div className="mt-44 lg:mr-44 flex flex-col md:flex-row items-center">
        <div className="lg:1/3 lg:ml-24 mb-4 md:mr-8 md:w-1/2 hover:scale-105 transition-transform duration-300 ease-in-out">
          <Image
              src="/author.jpg"
              className="rounded-lg object-cover"
              alt="Author Photo"
              width={400}
              height={225}
          />
        </div>

        <div className="lg:w-2/3 md:w-1/2 ">
          <h2 className="text-3xl font-bold mb-4">Summary Title</h2>
          <p className="text-gray-700 p-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
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

export default Book;
