// halaman untuk home

import { DetailService } from "./components/detailsection";
import { Hero } from "./components/herosection";
import { Services } from "./components/services";
import { ClientFeedback } from "./components/clientfeedback";
import { CaseStudies } from "./components/casestudies";
import { DesignApproach } from "./components/designapproach";
import { TechStack } from "./components/techstack";
import { FeaturedResources } from "./components/featuredresources";
import { PromotionCard } from "./components/promotioncard";
import { Footer } from "./components/footer";

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

      {/* untuk membuat client feedback */}
      <section id="clientfeedback">
        <ClientFeedback />
      </section>

      {/* untuk membuat case studies */}
      <section id="casestudies">
        <CaseStudies />
      </section>

      <section id="designapproach">
        <DesignApproach />
      </section>

      {/* untuk membuat techstack */}
      <section id="techstack">
        <TechStack />
      </section>

      {/* untuk membuat featured resources */}
      <section id="featuredresources">
        <FeaturedResources />
      </section>

      {/* untuk menjadi pembatas */}
      <div className="mt-14"></div>
      <div className="mt-14"></div>

      {/* untuk membuat promotion card */}
      <section id="promotioncard">
        <PromotionCard />
      </section>

      {/* untuk menjadi pembatas */}
      <div className="mt-14"></div>

      {/* untuk membuat footer */}
      <footer id="footer">
        <Footer />
      </footer>
    </>
  );
};
