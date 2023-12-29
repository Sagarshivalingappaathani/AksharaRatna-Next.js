"use client";
import "../styles/global.css"
import Head from "next/head";
import Navbar from '../components/Navbar';
import Hero from "../components/Hero";
import AuthorInfo from '../components/Authorinfo'
import Books from '../components/Books'
import Contactus from '../components/Contactus'
import Footer from '../components/Footer'
import Book from '../components/Book'

const Home = () => (
  <>
    <Navbar/>
    <Hero/>
    <AuthorInfo/>
    <Books/>
    <Contactus/>
    <Footer/>
  </>
);

export default Home;

