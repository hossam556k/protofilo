"use client"
import Link from 'next/link'
import React from 'react'
import "./Navbar.css"
import Menu from './Menu'

function Navbar() {
  return (
    <div className='w-full h-20 m-auto sticky shadow-xl'>
        <div className='flex justify-between items-center w-full h-full px-20 2xl:px:16'>
      <Link href="/"> <h2 className='text-[#ef5b5b] cursor-pointer hover:opacity-70'><span>&lt;</span>Hossam<span>&gt;</span></h2></Link>

      <div className=''>
        <ul className='hidden md:flex items-center gap-8 text-[#5651e5] text-xl'>
            <Link scroll={false}  href="/">
                <li>Home</li>
            </Link>
            <Link  href="#about">
                <li>About</li>
            </Link>
            <Link scroll={false}  href="#projects">
                <li>Projects</li>
            </Link>
            <Link scroll={false}  href="#contact">
                <li>Contnct Us</li>
            </Link>
            
        </ul>
        <div className='md:hidden '>
            {/*mobile nav*/}
            <Menu/>
        </div>
      </div>

 

        </div>
       
        
    </div>
  )
}

export default Navbar