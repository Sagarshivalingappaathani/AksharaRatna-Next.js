import Image from "next/image";

const AuthorInfo = () => {
  return (
    <>
      <h2 className="text-4xl lg:text-5xl font-semibold mb-4 text-center mt-10 text-orange-600">Author Details</h2>
      <div className="flex flex-col lg:flex-row w-full p-8 items-center lg:ml-48">
        <div className="lg:w-1/3 mb-4 lg:mb-0 lg:mr-8 hover:scale-105 transition-transform duration-300 ease-in-out">
          <Image
            src="/author.jpg"
            className="rounded-lg object-cover"
            alt="Author Photo"
            width={400}
            height={225}
          />
        </div>
        <div className="lg:w-2/3">
          <h2 className="text-4xl lg:text-5xl font-semibold mb-4">Shree Sharva</h2>
          <h3 className="text-3xl my-6">Email: author@example.com</h3>
          <h3 className="text-3xl my-6">Phone: +1234567890</h3>
          <h3 className="text-3xl my-6">Address: 123 Street, City</h3>
          <h3 className="text-3xl my-6">Education: B.Tech in NITK</h3>
        </div>
      </div>
    </>
  );
};

export default AuthorInfo;
