import Head from 'next/head'
import Image from 'next/image'
import Main from './components/Main'
import About from './components/About'
import Projects from './components/Projects'
import Contanct from './components/Contanct'

export default function Home() {
  return (
   <div>
    
      <Main/>
      <About/>
      <Projects/>
      <Contanct/>
      
   </div>
  )
}
