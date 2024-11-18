import { Btn } from "../components/btn/btn";

// halaman untuk navbar
export const NavPar = () => {
  return (
    <>
      <div className="flex justify-between absolute top-0 right-0 left-0 shadow-xl py-3 px-24 items-center">
        <div className="text-xl font-semibold">
          {/* taro logo disini */}
          <h1>Dwipa Nusantara</h1>
        </div>
        <div className="flex space-x-9 font-nokora">
          <p>About Us</p>
          <p>Services</p>
          <p>Case Studies</p>
          <p>Blog</p>
          <p>How It Works</p>
          <p>Hire</p>
        </div>
        <div className="font-nokora">
          <Btn />
        </div>
      </div>
    </>
  );
};
