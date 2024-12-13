import { BuildSoftwareCard } from "./buildsoftwarecard";
import { CaseStudiesCard } from "./casestudycard";

export const CaseStudies = () => {
  return (
    <>
      <div className="bg-gray-50 flex items-center justify-center min-h-screen">
        <div>
          <section className="text-center py-16">
            <h2 className="text-2xl text-gray-600">Our recent</h2>
            <h1 className="text-4xl font-bold text-gray-800">Case studies</h1>
          </section>
          <section className="space-y-8 px-4 lg:px-16">
            <CaseStudiesCard />
            <CaseStudiesCard />
            <CaseStudiesCard />
          </section>
          <div className="text-center py-8">
            <a href="#" className="text-purple-600">
              Read more case studies <i className="fas fa-arrow-right"></i>
            </a>
          </div>
          <section className="text-center py-16">
            <h2 className="text-2xl text-gray-600">Way of building</h2>
            <h1 className="text-4xl font-bold text-gray-800">Great Software</h1>
          </section>
          <section className="space-y-8 px-4 lg:px-16">
            <BuildSoftwareCard />
            <BuildSoftwareCard />
            <BuildSoftwareCard />
          </section>
        </div>
      </div>
    </>
  );
};
