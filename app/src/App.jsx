// import fanta from './assets/fanta.png'
// import pepesi from './assets/pepsi.png'
// import cocacola from './assets/cocacola.png'

import HeroSection from './component/HeroSection'
// import Section2 from './component/Section2'
// import Section3 from './component/Section3'
import Navbar from './component/Navbar'
import { useRef } from 'react'


const App = () => {
  const fantaRef = useRef(null);
     


  return (
    <>
      <div className=' '>
         <Navbar />
      </div>
      <div  className=' '>
          <HeroSection fantaRef={fantaRef} />
      </div>
      
    </>
  )
}

export default App
