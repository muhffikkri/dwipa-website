import { motion, useScroll } from "framer-motion";
import { Btn } from "../components/btn/btn";

// halaman untuk navbar
export const NavPar = () => {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <div className="fixed right-0 left-0 top-0 z-50">
        <div className="flex justify-between  shadow-xl py-3 px-24 items-center bg-white">
          <div className="text-xl font-semibold">
            {/* taro logo disini */}
            <h1>Dwipa Nusantara</h1>
          </div>
          <div className="flex space-x-9 font-nokora">
            <p>About Us</p>
            <p>Services</p>
            <p>Case Studies</p>
            <p>Blog</p>
            <p>How It Works</p>
            <p>Hire</p>
          </div>
          <div className="font-nokora">
            <Btn />
          </div>
        </div>
        <motion.div
          className="bg-red-400 h-[7px] transform origin-left"
          style={{ scaleX: scrollYProgress }}
        ></motion.div>
      </div>
    </>
  );
};
