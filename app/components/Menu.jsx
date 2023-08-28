import { AiOutlineClose } from 'react-icons/fa';
import { FaGithub, FaLinkedinIn,FaFacebookF,FaInstagram } from 'react-icons/fa';
import Image from 'next/image';
import React, { useState } from 'react';
import Link from 'next/link';

const links = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "About", url: "/about" },
  { id: 3, title: "Projects", url: "/projects" },
  { id: 4, title: "Contact Us", url: "/contant" },
];

const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {!open ? (
        <Image
          src="/open.png"
          alt=""
          width={20}
          height={20}
          className="cursor-pointer"
          onClick={() => setOpen(true)}
        />
      ) : (
        <Image
          src="/close.png"
          alt=""
          width={20}
          height={20}
          className="cursor-pointer"
          onClick={() => setOpen(false)}
        />
      )}
      
    <div className= {!open ?  'z-100 md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
       <div  className={
            !open
              ? 'z-100 fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 1s ease-in-out duration-500'
              : 'z-100 fixed left-[-100%] top-0 p-10 ease-in-out duration-1000'
          }>
        <div  className=' flex items-center justify-between'>
        
        <h1 className=' text-[40px] text-[#5651e5] uppercase'>Hossam</h1>
        
       <h5 className=' shadow-lg shadow-gray-400 rounded-full p-3 cursor-pointer'onClick={() => setOpen(true)}>X</h5>
     
        </div>
        <p className='w-[85%] md:w-[90%] py-4 border-b-2 '>Let&#39;s build something legendary together</p>

       <div className='py-4 flex flex-col'> 
       <ul className='uppercase '>
              <Link href='/'>
                <li text-xl onClick={() => setNav(false)} className='py-4 text-sm animate-[moveright_3s_ease-in-out_1]'>
                  Home 
                </li>
              </Link>
              <Link href='/#about'>
                <li onClick={() => setNav(false)} className='py-4 text-sm animate-[moveright_3s_ease-in-out_1]'>
                  About
                </li>
              </Link>
              <Link href='/#skills'>
                <li onClick={() => setNav(false)} className='py-4 text-sm animate-[moveright_4s_ease-in-out_1]'>
                  Skills
                </li>
              </Link>
              <Link href='/#projects'>
                <li onClick={() => setNav(false)} className='py-4 text-sm animate-[moveright_5s_ease-in-out_1]'>
                  Projects
                </li>
              </Link>
              <Link href='/resume'>
                <li onClick={() => setNav(false)} className='py-4 text-sm animate-[moveright_6s_ease-in-out_1]'>
                  Resume
                </li>
              </Link>
              <Link href='/#contact'>
                <li onClick={() => setNav(false)} className='py-4 text-sm animate-[moveright_7s_ease-in-out_1]'>
                  Contact
                </li>
              </Link>
            </ul>
            <div className='py-'>
            <p className='uppercase tracking-widest text-[#5651e5]'>Let&#39;s Connect</p>
            
            </div>
            <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
            <a    href='https://www.linkedin.com/in/hossam-osama-732647257/'
                  target='_blank'
                  rel='noreferrer'
            >
            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
          
               <FaLinkedinIn/>
            </div>
            </a>
            <a    href='https://github.com/hossam556k'
                  target='_blank'
                  rel='noreferrer'
            >
            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
          
               <FaGithub />
            </div>
            </a>
            <a    href='https://www.facebook.com/hossam.osama7767'
                  target='_blank'
                  rel='noreferrer'
            >
            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
          
               <FaFacebookF/>
            </div>
            </a>
            <a    href='https://www.instagram.com/hossam_osama88/'
                  target='_blank'
                  rel='noreferrer'
            >
            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
          
               <FaInstagram/>
            </div>
            </a>
            
       </div>
       </div>
       
        </div>
        </div>
      
    </div>
    
  );
};

export default Menu;
