import { motion } from "framer-motion";

const approachData = [
  { title: "UX Driven Engineering", description: "We are a UX-first development company...", color: "bg-black" },
  { title: "Developing Shared Understanding", description: "Projects are driven by designers...", color: "bg-blue-400" },
  // Add more items...
];

export const DesignApproach = () => {
  return (
    <>
      <div className="bg-gray-50">
        <div className="text-center py-16">
          <h2 className="text-2xl font-light">Our design and</h2>
          <h1 className="text-3xl font-bold">Development Approach</h1>
          <div className="mt-8 flex justify-center">
            <div className="w-16 h-1 bg-purple-600"></div>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8 lg:px-16">
            {approachData.map((item, index) => (
              <motion.div key={index} className="bg-white p-6 rounded-lg shadow-md" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <div className="flex items-center mb-4">
                  <div className={`w-10 h-10 ${item.color} rounded-full`}></div>
                  <h3 className="ml-4 text-lg font-semibold">{item.title}</h3>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
