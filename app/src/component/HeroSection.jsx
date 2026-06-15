import fanta from '../assets/fanta.png'

const HeroSection = ({ fantaRef }) => {
  return (
    <section className="hero w-full relative h-screen flex flex-col items-center justify-center text-center bg-[linear-gradient(150deg,rgb(255,166,0),rgb(255,94,0))]">
        <h1 className="text-[25vw]  text-white font-bold ">FANTA</h1>

        <img ref={fantaRef}  className="w-[40%] absolute z-10" src={fanta} alt="Fanta" />
    </section>
  )
}

export default HeroSection