import cocacola from "../assets/cocacola.png";

import pepsi from "../assets/pepsi.png";


const Section3 = ( threeRef) => {
  return (
    <section ref={threeRef} className=" relative min-h-screen w-full grid grid-cols-3 gap-8 place-items-center bg-[linear-gradient(150deg,rgb(255,166,0),rgb(255,94,0))] p-10">
      
      {/* Card 1 */}
      <div className="relative w-80 h-130 bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center justify-end gap-8">

       <img className="absolute -top-16 left-1/2 w-[35vh] -translate-x-1/2" src={cocacola} />
        <h1 className="text-3xl font-bold">Coca-Cola</h1>
        <button className="px-6 py-3 bg-black text-white rounded-full">
          Buy Now
        </button>
      </div>

      {/* Card 2 */}
      <div className="w-80 h-130 bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center justify-between">
      
        <h1 className="text-3xl font-bold">Fanta</h1>
        <button className="px-6 py-3 bg-black text-white rounded-full">
          Buy Now
        </button>
      </div>

      {/* Card 3 */}
      <div className="relative w-80 h-130 bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center justify-end gap-8">

        <img id="pepsi" src={pepsi} className="absolute -top-16 left-1/2 w-[50vh] -translate-x-1/2" />
        <h1 className="text-3xl px-6 py-3 font-bold">Pepsi</h1>
        <button className="px-6 py-3 bg-black text-white rounded-full">
          Buy Now
        </button>
      </div>

    </section>
  );
};

export default Section3;
