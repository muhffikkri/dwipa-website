// btn untuk lets get started pada hero page

import { Navigate } from "react-router-dom";

export const StartedLets = () => {
  return (
    <>
      <button class="overflow-hidden relative w-32 p-2 h-12 bg-sky-400 text-white border-none rounded-md text-xl font-bold cursor-pointer z-10 group">
        Start
        <span class="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"></span>
        <span class="absolute w-36 h-32 -top-8 -left-2 bg-purple-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"></span>
        <span class="absolute w-36 h-32 -top-8 -left-2 bg-purple-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left"></span>
        <span class="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">
          Explore!
        </span>
      </button>
    </>
  );
};
