
const Navbar = () => {
   

  return (
    <nav  className="fixed top-0 left-0 z-50 w-full h-20 text-white flex items-center justify-center px-10">
      <ul className="navbar-nav flex gap-10 text-2xl">
        <li className="hover:text-red-500 cursor-pointer">HOME</li>
        <li className="hover:text-red-500 cursor-pointer">PRODUCTS</li>
        <li className="hover:text-red-500 cursor-pointer">SHOP</li>
        <li className="hover:text-red-500 cursor-pointer">CONTACT</li>
      </ul>
    </nav>
  );
};

export default Navbar;