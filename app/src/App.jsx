


import HeroSection from './component/HeroSection'
import Section2 from './component/Section2'
import Section3 from './component/Section3'
import Navbar from './component/Navbar'
import { useRef } from 'react'


const App = () => {
  const fantaRef = useRef(null);
  const twoRef = useRef(null);
  const threeRef = useRef(null);
     


  return (
    <>
      <div className=' '>
         <Navbar />
      </div>
      <div  className=' '>
          <HeroSection fantaRef={fantaRef} />
      </div>
      <div >
          <Section2 twoRef={twoRef} />
      </div>
      <div>
        
        <Section3 threeRef={threeRef} />


      </div>
      
      
    </>
  )
}

export default App
