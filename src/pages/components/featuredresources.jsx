const resources = [
  {
    image: "https://placehold.co/600x400?text=Image+1",
    title: "How to Build a Scalable Application up to 1 Million Users on AWS",
  },
  {
    image: "https://placehold.co/600x400?text=Image+2",
    title: "How to Build a Scalable Application up to 1 Million Users on AWS",
  },
  {
    image: "https://placehold.co/600x400?text=Image+3",
    title: "How to Build a Scalable Application up to 1 Million Users on AWS",
  },
  {
    image: "https://placehold.co/600x400?text=Image+4",
    title: "How to Build a Scalable Application up to 1 Million Users on AWS",
  },
  {
    image: "https://placehold.co/600x400?text=Image+5",
    title: "How to Build a Scalable Application up to 1 Million Users on AWS",
  },
];

export const FeaturedResources = () => {
  return (
    <>
      <div className="container mx-auto px-4">
        <div className="text-purple-500 text-xl text-center mt-8">Featured</div>
        <div className="text-gray-700 text-4xl text-center font-bold mb-8">Resources</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {resources.map((resource, index) => (
            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden transform transition-transform hover:scale-105">
              <img src={resource.image} alt={`Resource ${index + 1}`} className="w-full h-48 object-cover" />
              <div className="p-4">
                <div className="text-gray-400 text-sm mb-4">{resource.title}</div>
                <div className="text-purple-500 text-sm flex items-center">
                  Read More <i className="fas fa-arrow-right ml-2"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
