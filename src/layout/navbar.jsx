// import { motion, useScroll } from "framer-motion";
// import { Btn } from "../components/btn/btn";

// // halaman untuk navbar
// export const NavPar = () => {
//   const { scrollYProgress } = useScroll();
//   return (
//     <>
//       <div className="fixed right-0 left-0 top-0 z-50">
//         <div className="flex justify-between  shadow-xl py-3 px-24 items-center bg-white">
//           <div className="text-xl font-semibold">
//             {/* taro logo disini */}
//             <h1>Dwipa Nusantara</h1>
//           </div>
//           <div className="flex space-x-9 font-nokora">
//             <p>About Us</p>
//             <p>Services</p>
//             <p>Case Studies</p>
//             <p>Blog</p>
//             <p>How It Works</p>
//             <p>Hire</p>
//           </div>
//           <div className="font-nokora">
//             <Btn />
//           </div>
//         </div>
//         <motion.div
//           className="bg-red-400 h-[7px] transform origin-left"
//           style={{ scaleX: scrollYProgress }}
//         ></motion.div>
//       </div>
//     </>
//   );
// };

import { motion, useScroll } from "framer-motion";
import { useState } from "react";
import { Btn } from "../components/btn/btn";

export const NavPar = () => {
  const { scrollYProgress } = useScroll();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="fixed w-full z-50">
        <div className="flex justify-between items-center shadow-xl py-3 px-5 md:px-24 bg-white">
          {/* Logo */}
          <div className="text-xl font-semibold">
            <h1>Dwipa Nusantara</h1>
          </div>

          {/* Hamburger Button */}
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="focus:outline-none focus:ring-2 focus:ring-red-400">
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />}
              </svg>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:space-x-4 xl:space-x-9 font-nokora">
            <p>About Us</p>
            <p>Services</p>
            <p>Case Studies</p>
            <p>Blog</p>
            <p>How It Works</p>
            <p>Hire</p>
          </div>

          {/* Call to Action Button */}
          <div className="hidden lg:block font-nokora">
            <Btn />
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white shadow-lg">
            <div className="flex flex-col items-center space-y-4 py-4 font-nokora">
              <p>About Us</p>
              <p>Services</p>
              <p>Case Studies</p>
              <p>Blog</p>
              <p>How It Works</p>
              <p>Hire</p>
              <Btn />
            </div>
          </div>
        )}

        {/* Scroll Progress Bar */}
        <motion.div className="bg-red-400 h-[7px] transform origin-left" style={{ scaleX: scrollYProgress }}></motion.div>
      </div>
    </>
  );
};
