// // halaman untuk service card pada halaman services
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { useState } from "react";
// import { motion, spring } from "framer-motion";

// export const CardServices = () => {
//   return (
//     <>
//       <motion.div className="bg-white rounded-lg shadow-xl h-80 pt-10 w-96 p-4 cursor-pointer" whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300, damping: 15 }} whileTap={{ scale: 0.95 }}>
//         <FontAwesomeIcon icon="fa-solid fa-terminal" className="border border-cyan-600 p-3 rounded-full text-xl" />
//         <h1 className="text-2xl font-nokora my-3 font-bold">Web Design & Development</h1>
//         <p className="mt-7 font-nokora">A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.</p>
//       </motion.div>
//     </>
//   );
// };

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

export const CardServices = () => {
  return (
    <>
      <motion.div className="bg-white rounded-lg shadow-xl h-auto lg:h-80 p-6 md:p-8 cursor-pointer w-full max-w-sm" whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300, damping: 15 }} whileTap={{ scale: 0.95 }}>
        {/* Icon */}
        <div className="flex items-center justify-center mb-6">
          <FontAwesomeIcon icon="fa-solid fa-terminal" className="border border-cyan-600 p-4 rounded-full text-3xl text-cyan-600" />
        </div>
        {/* Title */}
        <h1 className="text-xl md:text-2xl font-nokora my-4 font-bold text-center">Web Design & Development</h1>
        {/* Description */}
        <p className="text-sm md:text-base font-nokora text-center">A website is an extension of yourself, and we can help you express it properly. Your website is your number one marketing asset because we live in a digital age.</p>
      </motion.div>
    </>
  );
};
