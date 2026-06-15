


import HeroSection from './component/HeroSection'
import Section2 from './component/Section2'
import Section3 from './component/Section3'
import Navbar from './component/Navbar'
import { useRef,useEffect } from 'react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const App = () => {
  const fantaRef = useRef(null);
  const twoRef = useRef(null);
  const threeRef = useRef(null);

useEffect(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: twoRef.current,
      start: "top center",
      end: "center center",
      scrub: true,
      markers: true,
    },
  });

  tl.to(fantaRef.current, {
    translateX: -205,
    translateY: 800,
    duration: 1,
    ease:"power1.inOut",
  });

}, []);



     


  return (
    <>
      <div className=' '>
         <Navbar />
      </div>
      <div  className=''>
          <HeroSection fantaRef={fantaRef} />
      </div>
      <div className=''>
          <Section2 twoRef={twoRef} />
      </div>
      <div >
        
        <Section3 threeRef={threeRef} />


      </div>
      
      
    </>
  )
}

export default App
