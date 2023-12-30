import Image from "next/image";

const AuthorInfo = () => {
  return (
    <>
      <h2 className="text-4xl lg:text-5xl font-semibold mb-4 text-center mt-10 text-orange-600">Author Details</h2>
      <div className="mt-20 lg:mr-44 flex flex-col md:flex-row items-center">
        <div className="lg:1/3 lg:ml-24 mb-4 md:mr-8 md:w-1/2 hover:scale-105 transition-transform duration-300 ease-in-out">
          <Image
              src="/author.jpg"
              className="rounded-lg object-cover"
              alt="Author Photo"
              width={400}
              height={225}
          />
        </div>

        <div className="lg:w-2/3 md:w-1/2 p-5">
          <h2 className="text-3xl font-bold mb-4">Shree Sharva</h2>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <h4 className="text-2xl font-bold my-6">Email: author@example.com</h4>
          <h4 className="text-2xl font-bold my-6">Phone: +1234567890</h4>
          <h4 className="text-2xl font-bold my-6">Address: 123 Street, City</h4>
        </div>
      </div>
    </>
  );
};

export default AuthorInfo;
