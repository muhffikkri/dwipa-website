import { div } from "framer-motion/client";

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
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-black rounded-full"></div>
                <h3 className="ml-4 text-lg font-semibold">UX Driven Engineering</h3>
              </div>
              <p className="text-gray-600">
                Unlike other companies, we are a <span className="text-blue-600">UX first</span> development company. Projects are driven by designers and they make sure design and experiences translate to code.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-400 rounded-full"></div>
                <h3 className="ml-4 text-lg font-semibold">Developing Shared Understanding</h3>
              </div>
              <p className="text-gray-600">
                Unlike other companies, we are a <span className="text-blue-600">UX first</span> development company. Projects are driven by designers and they make sure design and experiences translate to code.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-pink-400 rounded-full"></div>
                <h3 className="ml-4 text-lg font-semibold">Proven Experience and Expertise</h3>
              </div>
              <p className="text-gray-600">
                Unlike other companies, we are a <span className="text-blue-600">UX first</span> development company. Projects are driven by designers and they make sure design and experiences translate to code.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-green-400 rounded-full"></div>
                <h3 className="ml-4 text-lg font-semibold">Security & Intellectual Property (IP)</h3>
              </div>
              <p className="text-gray-600">
                Unlike other companies, we are a <span className="text-blue-600">UX first</span> development company. Projects are driven by designers and they make sure design and experiences translate to code.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-yellow-400 rounded-full"></div>
                <h3 className="ml-4 text-lg font-semibold">Code Reviews</h3>
              </div>
              <p className="text-gray-600">
                Unlike other companies, we are a <span className="text-blue-600">UX first</span> development company. Projects are driven by designers and they make sure design and experiences translate to code.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-purple-400 rounded-full"></div>
                <h3 className="ml-4 text-lg font-semibold">Quality Assurance & Testing</h3>
              </div>
              <p className="text-gray-600">
                Unlike other companies, we are a <span className="text-blue-600">UX first</span> development company. Projects are driven by designers and they make sure design and experiences translate to code.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
