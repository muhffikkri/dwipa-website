// halaman untuk home

import { Hero } from "./components/herosection";
import { Services } from "./components/services";

export const HomePage = () => {
  return (
    <>
      <div className=""></div>
      {/* heropage */}
      <Hero />
      {/* services page */}
      <Services />
      {/* untuk menjadi pembatas */}
      <div className="mt-96"></div>
    </>
  );
};
