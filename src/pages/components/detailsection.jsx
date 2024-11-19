// halaman untuk bagian detailing
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const DetailService = () => {
  return (
    <>
      <div className="border-t-2 min-h-screen max-h-screen px-28 border-b-2 relative">
        <div className="flex items-center justify-between mt-28">
          <div className="yunus-sasmita">
            <hr className="max-w-[7rem] mb-5 h-[5px] bg-gradient-to-tr from-green-600 to-yellow-600 border-none" />
            <h1 className="text-5xl font-thin mb-4">
              Leading companies trust us
            </h1>
            <h1 className="text-5xl font-semibold">to develop software</h1>
            <p className="max-w-sm mt-10 mb-10 font-kumbh text-slate-400">
              We <span className="text-pink-500">add development capacity</span>{" "}
              to tech teams. Our value isn't limited to building teams but is
              equally distributed across the project lifecycle. We are a custom
              software development company that guarantees the successful
              delivery of your project.
            </p>
            <div className="flex items-center space-x-3">
              <h2 className="text-purple-500">
                <a href="">See more information</a>
              </h2>
              <FontAwesomeIcon
                icon="fa-solid fa-arrow-right"
                className="text-purple-500"
              />
            </div>
          </div>
          <img
            src="https://plus.unsplash.com/premium_photo-1677094310918-cc302203b21c?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-[50rem] h-[30rem] object-center rounded-lg shadow-xl"
          />
        </div>
        <div className="mt-48">
          <hr className="max-w-[7rem] mb-4 h-[5px] bg-gradient-to-tr from-green-600 to-yellow-600 border-none" />
          <div className="text-4xl">
            <h1 className="font-thin">Meet the People</h1>
            <h2 className="font-semibold">We are Working With</h2>
          </div>
        </div>
        <div className="bg-gradient-to-b from-green-600 to-yellow-500 h-10 w-20 rounded-t-full absolute bottom-0 right-1/2"></div>
        <div className="bg-gradient-to-b from-green-600 to-yellow-500 h-10 w-20 rounded-t-full absolute top-0 transform rotate-180"></div>
      </div>
    </>
  );
};
