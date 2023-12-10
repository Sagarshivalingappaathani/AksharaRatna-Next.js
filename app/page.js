"use client";
import "../styles/global.css"

const Home = () => (
    <section className='w-full flex-center flex-col mt-20'>
      <h1 className="head_text text-center my-5">
        <div className='text-transparent bg-gradient-to-r from-black to-black bg-clip-text'>Explore the World of Coding</div>
        <br className="hidden md:inline-block" />
        <span>&lt;</span>
        <span>/&gt;</span>
      </h1>
      <p className="text-3xl text-green-600 text-center mt-10 bg-gradient-to-r from-green-400 to-green-600 text-transparent bg-clip-text my-15">
      "Code on letsCode and 
      </p>
      <p className="text-3xl text-green-600 text-center mt-5 bg-gradient-to-r from-green-400 to-green-600 text-transparent bg-clip-text my-15">
      inspire the world with your passion for programming."</p>
      <div className='mt-5'></div>
      <div className='flex justify-center animate-bounce mt-5'>
        <a href='/problems' className='btn-grad'>
          letsCode</a>
      </div>
    </section>
);

export default Home;

