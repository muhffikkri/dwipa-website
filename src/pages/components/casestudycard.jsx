export const CaseStudiesCard = () => {
  return (
    <>
      <div className="flex flex-col xl:flex-row items-center justify-center gap-16 bg-blue-50 p-8 rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row gap-3">
          <img src="https://placehold.co/150x300" alt="Mobile app design 1" className="rounded-lg" />
          <img src="https://placehold.co/150x300" alt="Mobile app design 2" className="rounded-lg hidden md:block" />
          <img src="https://placehold.co/150x300" alt="Mobile app design 3" className="rounded-lg hidden md:block" />
        </div>
        <div className="md:ml-8 mt-4 md:mt-0 max-w-md">
          <h3 className="text-xl font-bold text-gray-800">Website Design for SCFC Canada</h3>
          <p className="text-gray-600 mt-2">
            Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise
            stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.
          </p>
          <a href="#" className="text-purple-600 mt-4 inline-block">
            Read more <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </>
  );
};
