"use client"
import Head from 'next/head'
import Image from 'next/image'
import Main from './components/Main'
import About from './components/About'
import Projects from './components/Projects'
import Contanct from './components/Contanct'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


export default function Home() {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 10,
    });
  }, []);
  return (
   <div>
    
      <Main/>
      <About/>
      <Projects/>
      <Contanct/>
      
   </div>
  )
}
