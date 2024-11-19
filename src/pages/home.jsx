// halaman untuk home

import { DetailService } from "./components/detailsection";
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
        <DetailService />
      </section>
      {/* buat section untuk marquee perusahaan */}
      <section id="marquee"></section>
      {/* untuk menjadi pembatas */}
      <div className="mt-96"></div>
    </>
  );
};
