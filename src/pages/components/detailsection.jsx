import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const DetailService = () => {
  return (
    <>
      <div className="border-t-2 border-b-2 min-h-screen px-6 md:px-16 lg:px-28 relative">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between mt-16 lg:mt-28 gap-12">
          {/* Text Section */}
          <div className="text-center lg:text-left">
            <hr className="max-w-[7rem] mx-auto lg:mx-0 mb-5 h-[5px] bg-gradient-to-tr from-green-600 to-yellow-600 border-none" />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-thin mb-4">Leading companies trust us</h1>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">to develop software</h1>
            <p className="max-w-md mx-auto lg:mx-0 mt-6 lg:mt-10 mb-10 font-kumbh text-slate-400 text-sm md:text-base">
              We <span className="text-pink-500">add development capacity</span> to tech teams. Our value isn't limited to building teams but is equally distributed across the project lifecycle. We are a custom software development company
              that guarantees the successful delivery of your project.
            </p>
            <div className="flex items-center justify-center lg:justify-start space-x-3">
              <h2 className="text-purple-500">
                <a href="#">See more information</a>
              </h2>
              <FontAwesomeIcon icon="fa-solid fa-arrow-right" className="text-purple-500" />
            </div>
          </div>

          {/* Image Section */}
          <img
            src="https://plus.unsplash.com/premium_photo-1677094310918-cc302203b21c?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Detail Image"
            className="w-full max-w-[40rem] h-auto lg:w-[50rem] lg:h-[30rem] object-cover rounded-lg shadow-xl"
          />
        </div>

        {/* Bottom Section */}
        <div className="mt-24 lg:mt-48 text-center">
          <hr className="max-w-[7rem] mx-auto mb-4 h-[5px] bg-gradient-to-tr from-green-600 to-yellow-600 border-none" />
          <div className="text-3xl md:text-4xl">
            <h1 className="font-thin">Meet the People</h1>
            <h2 className="font-semibold">We are Working With</h2>
          </div>
        </div>

        {/* Decorative Circles */}
        <div className="bg-gradient-to-b from-green-600 to-yellow-500 h-10 w-20 rounded-t-full absolute bottom-0 right-1/2"></div>
        <div className="bg-gradient-to-b from-green-600 to-yellow-500 h-10 w-20 rounded-t-full absolute top-0 right-0 transform rotate-180"></div>
      </div>
    </>
  );
};
