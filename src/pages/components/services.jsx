// halaman untuk component services

import { CardServices } from "./servvicescard";

export const Services = () => {
  return (
    <>
      <div className="bg-slate-100 py-20">
        <h1 className="text-center text-4xl font-bold font-nokora">
          Services we offer
        </h1>
        {/* membuat carousel dalam bentuk pelayanan buat card terlebih dahulu */}
        <div className="flex justify-between max-w-[95rem] mx-auto mt-14 pb-16">
          <CardServices />
          <CardServices />
          <CardServices />
        </div>
        {/* bagian circle barnya agar tidak flat designnya sesuai dengan design figma */}
      </div>
    </>
  );
};
