"use client";
import "../styles/global.css"
import Head from "next/head";
import Navbar from '../components/Navbar';
import Hero from "../components/Hero";
import Authorinfo from '../components/AuthorInfo'
import Books from '../components/Books'
import Contactus from '../components/Contactus'
import Footer from '../components/Footer'

const Home = () => (
  <>
    <Navbar/>
    <Hero/>
    <Authorinfo/>
    <Books/>
    <Contactus/>
    <Footer/>
  </>
);

export default Home;

