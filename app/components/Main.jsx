"use client";
import React from "react";
import Typewriter from "typewriter-effect";
import { FaGithub, FaLinkedinIn,FaFacebookF,FaInstagram } from 'react-icons/fa';



const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1248px] w-full h-full p-2 flex flex-col items-center justify-center text-center mx-auto ">
        <p className="uppercase text-sm tracking-widest text-gray-600">
          {" "}
          LET&#39;S BUILD SOMETHING TOGETHER
        </p>
        <div className="flex">
          <h1 className="py-4 text-gray-700">
            Hi, I&#39;m{" "}
            <span className="text-[#5651e5]">
              <Typewriter
                options={{
                  strings: ["Hossam", "A Front-End Web Developer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </h1>
        </div>
        <p    className="text-xl font-semibold text-slate-700 sm:max-w-[70%] " data-aos="fade-up" data-aos-duration="2000">
          I`m Hossam Osama, a senior Web developer with extensive experience in
          building highly interactive and responsive websites. I am very keen to give my clients a real value, and looking forward to building a long term.
        </p>
        <div className="flex items-center justify-between max-w-[330px] gap-10 py-4 mt-3 " data-aos="fade-up" data-aos-duration="2000">
        <a    href='https://www.linkedin.com/in/hossam-osama-732647257/'
                  target='_blank'
                  rel='noreferrer'
            >
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
          
               <FaLinkedinIn/>
            </div>
            </a>
            <a    href='https://github.com/hossam556k'
                  target='_blank'
                  rel='noreferrer'
            >
            <div  className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
          
               <FaGithub />
            </div>
            </a>
            <a    href='https://www.facebook.com/hossam.osama7767'
                  target='_blank'
                  rel='noreferrer'
            >
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
          
               <FaFacebookF/>
            </div>
            </a>
            <a    href='https://www.instagram.com/hossam_osama88/'
                  target='_blank'
                  rel='noreferrer'
            >
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
          
               <FaInstagram/>
            </div>
            </a>
        </div>
      </div>
    </div>
  );
};

export default Main;
