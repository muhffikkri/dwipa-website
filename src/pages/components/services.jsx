// halaman untuk component services

import { CardServices } from "./servvicescard";

export const Services = () => {
  return (
    <>
      <div className="bg-slate-100 py-20 z-20">
        <h1 className="text-center text-4xl font-bold font-nokora">
          Services we offer
        </h1>
        {/* membuat carousel dalam bentuk pelayanan buat card terlebih dahulu */}
        <div className="flex items-center max-w-[113rem] mx-auto justify-between mt-14 pb-16">
          <CardServices />
          <CardServices />
          <CardServices />
          <CardServices />
        </div>
        {/* bagian circle barnya agar tidak flat designnya sesuai dengan design figma */}
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
