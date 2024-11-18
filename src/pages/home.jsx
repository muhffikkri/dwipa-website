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
      <section id="services">
        <Services />
      </section>
      {/* untuk bagian services dan penjelasannya */}
      <section id="servicesdetail">
        
      </section>
      {/* untuk menjadi pembatas */}
      <div className="mt-96"></div>
    </>
  );
};
