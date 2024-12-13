import { CardServices } from "./servvicescard";

export const Services = () => {
  return (
    <>
      <div className="bg-slate-100 py-20 z-20">
        <h1 className="text-center text-3xl md:text-4xl font-bold font-nokora">Services we offer</h1>

        {/* Cards Section */}
        <div className="flex flex-wrap items-center max-w-[113rem] mx-auto justify-center gap-8 mt-14 pb-16 px-4 md:px-8">
          <CardServices />
          <CardServices />
          <CardServices />
          <CardServices />
        </div>

        {/* Carousel Dots */}
        <div className="flex justify-center space-x-3">
          <div className="bg-slate-400 h-4 w-4 rounded-full cursor-pointer"></div>
          <div className="bg-slate-400 h-4 w-4 rounded-full cursor-pointer"></div>
          <div className="bg-slate-400 h-4 w-4 rounded-full cursor-pointer"></div>
          <div className="bg-slate-400 h-4 w-4 rounded-full cursor-pointer"></div>
        </div>
      </div>
    </>
  );
};
