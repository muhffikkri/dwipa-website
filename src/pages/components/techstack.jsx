import { useState } from "react";
import { motion } from "framer-motion";

const techLogos = [
  { src: "https://placehold.co/100x100?text=Node.js", alt: "Node.js logo" },
  { src: "https://placehold.co/100x100?text=PHP", alt: "PHP logo" },
  { src: "https://placehold.co/100x100?text=MySQL", alt: "MySQL logo" },
  { src: "https://placehold.co/100x100?text=Java", alt: "Java logo" },
  { src: "https://placehold.co/100x100?text=Python", alt: "Python logo" },
  { src: "https://placehold.co/100x100?text=Rails", alt: "Rails logo" },
  { src: "https://placehold.co/100x100?text=Go", alt: "Go logo" },
  { src: "https://placehold.co/100x100?text=MongoDB", alt: "MongoDB logo" },
];

export const TechStack = () => {
  const [activeCategory, setActiveCategory] = useState("Backend");
  return (
    <>
      <div className="text-center py-10">
        <h2 className="text-2xl font-bold mb-2">Our</h2>
        <h1 className="text-4xl font-bold mb-6">Tech Stack</h1>
        <div className="flex flex-wrap justify-center space-x-4 md:space-x-8 mb-8 gap-4">
          {["Backend", "Frontend", "Databases", "CMS", "CloudTesting", "DevOps"].map((category) => (
            <span key={category} className={`${activeCategory === category ? "text-purple-600 border-b-2 border-purple-600" : ""} cursor-pointer shrink `} onClick={() => setActiveCategory(category)}>
              {category}
            </span>
          ))}
        </div>
        <div className="grid grid-cols-4 px-4 sm:px-0 gap-3 md:gap-8 mx-auto max-w-xs md:max-w-4xl">
          {techLogos.map((tech, index) => (
            <motion.img key={index} src={tech.src} alt={tech.alt} className="mx-auto" whileHover={{ scale: 1.1 }} />
          ))}
        </div>
      </div>
    </>
  );
};
