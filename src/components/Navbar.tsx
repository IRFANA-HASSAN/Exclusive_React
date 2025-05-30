
import { useState } from 'react';
import Search from '../assets/icons/Vector.svg';
import Heart from '../assets/icons/heart.svg';
import Cart from '../assets/icons/Cart1.svg';



const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Top Banner */}
      <div className="w-full bg-black text-sm py-2 hidden md:flex">
        <section className="wrapper w-[90%] mx-auto max-w-[1200px] flex justify-between items-center">
          <div className="flex-1"></div>
          <div className="flex-grow text-center text-[#FAFAFA]">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{' '}
            <a href="#" className="no-underline hover:underline font-bold text-white">
              ShopNow
            </a>
          </div>
          <div className="flex-1 flex justify-center">
            <select name="language" id="language" className="text-white bg-black">
              <option value="eng">English</option>
              <option value="spn">Spanish</option>
              <option value="Frng">French</option>
            </select>
          </div>
        </section>
      </div>

      {/* Main Header */}
      <header className="pt-6 pb-3 border-b border-gray-400">
        <div className="wrapper w-[90%] mx-auto max-w-[1200px] flex items-center justify-between">
          <h1 className="text-black text-3xl font-extrabold"><a href="/">Exclusive</a></h1>
          {/* Navigation Links */}
          <ul
            className={`${
              isMenuOpen ? 'flex' : 'hidden'
            } mid:flex flex-col mid:flex-row absolute mid:static top-24 items-end right-0 w-full mid:w-auto bg-white mid:bg-transparent border-t mid:border-0 mid:space-x-6 p-6 mid:p-0 transition-all duration-300 ease-in-out gap-6 z-50`}
          >
            <li><a href="#" className="hover:underline decoration-2 hover:text-[#010101] text-base">Home</a></li>
            <li><a href="#" className="hover:underline decoration-2 hover:text-[#010101] text-base">Contact</a></li>
            <li><a href="#" className="hover:underline decoration-2 hover:text-[#010101] text-base">About</a></li>
            <li><a href="#" className="hover:underline decoration-2 hover:text-[#010101] text-base">Sign Up</a></li>
          </ul>

          {/* Search and Icons */}
          <div className="flex  items-center  space-x-4">
            <form className="hidden sm:flex items-center space-x-4 bg-[#F5F5F5] px-3 rounded">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="bg-[#F5F5F5] text-sm p-2 w-64 focus:outline-none"
              />
              <img src={Search} alt="Search" />
            </form>
            <a href="#"><img src={Heart} alt="Heart" /></a>
            <a href="#"><img src={Cart} alt="Cart"  /></a>
            <button
            className="mid:hidden block text-black focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
          </div>
        </div>
        

      </header>
    </>
  );
};

export default Header;
