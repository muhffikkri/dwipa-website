// halaman untuk service card pada halaman services
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { motion, spring } from "framer-motion";

export const CardServices = () => {
  return (
    <>
      <motion.div className="bg-white rounded-lg shadow-xl h-80 pt-10 w-96 p-4 cursor-pointer" whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300, damping: 15 }} whileTap={{ scale: 0.95 }}>
        <FontAwesomeIcon icon="fa-solid fa-terminal" className="border border-cyan-600 p-3 rounded-full text-xl" />
        <h1 className="text-2xl font-nokora my-3 font-bold">Web Design & Development</h1>
        <p className="mt-7 font-nokora">A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.</p>
      </motion.div>
    </>
  );
};
