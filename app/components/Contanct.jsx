import Image from "next/image";
import React from "react";
import contact from "../../public/contact.jpg";
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Contanct = () => {
  return (
    <div id="contact" className="w-full lg:h-screen"   data-aos="fade-up"
    data-aos-duration="3000">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <h1 className="uppercase text-[#5651e5]">Contact</h1>
        <h3>Get In Touch</h3>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-2xl p-4">
            <div className="lg-p-4 h-full ">
              <div>
                <Image className="rounded-xl hover:scale-105" src={contact} alt=""/>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="mt-4">Hossam Osama</h3>
                <p className="">Front End Developer</p>
                <p className="mt-4">
                  {" "}
                  I am available for freelance or full-time positions. Contact
                  me and let&apos;s talk.
                </p>
              </div>
              <div>
            <p className="mt-10 font-bold uppercase">Connect with me</p>
            <div className="flex gap-4 mt-5 w-full items-center justify-evenly">
            <a    href='https://www.linkedin.com/in/hossam-osama-732647257/'
                  target='_blank'
                  rel='noreferrer'
            >
            <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-105 ease-in duration-300'>
          
               <FaLinkedinIn/>
            </div>
            </a>
            <a    href='https://github.com/hossam556k'
                  target='_blank'
                  rel='noreferrer'
            >
            <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-105 ease-in duration-300'>
          
               <FaGithub />
            </div>
            </a>
            <a    href='https://www.facebook.com/hossam.osama7767'
                  target='_blank'
                  rel='noreferrer'
            >
            <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-105 ease-in duration-300'>
          
               <FaFacebookF/>
            </div>
            </a>
            <a    href='https://www.instagram.com/hossam_osama88/'
                  target='_blank'
                  rel='noreferrer'
            >
            <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-105 ease-in duration-300'>
          
               <FaInstagram/>
            </div>
            </a>
            </div>
            </div>
            </div>
            
          </div>
          {/*right*/ }
          <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
            <div className="p-4">
            <form
                action='https://getform.io/f/08ebcd37-f5b5-45be-8c13-714f011ce060'
                method='POST'
                encType='multipart/form-data'
              >
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Name</label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                      name='name'
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>
                      Phone Number
                    </label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                      name='phone'
                    />
                  </div>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Email</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='email'
                    name='email'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Subject</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='text'
                    name='subject'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Message</label>
                  <textarea
                    className='border-2 rounded-lg p-3 border-gray-300'
                    rows='10'
                    name='message'
                  ></textarea>
                </div>
                <button className='w-full p-4 text-gray-100 mt-4'>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contanct;
