const testimonials = [
  {
    name: "Romeena De Silva",
    title: "Janet Cosmetics",
    image: "https://placehold.co/100x100",
    rating: 5,
  },
  {
    name: "Romeena De Silva",
    title: "Janet Cosmetics",
    image: "https://placehold.co/100x100",
    rating: 5,
  },
  {
    name: "Imran Khan",
    title: "Software Engineer",
    image: "https://placehold.co/100x100",
    rating: 5,
  },
  {
    name: "Romeena De Silva",
    title: "Janet Cosmetics",
    image: "https://placehold.co/100x100",
    rating: 5,
  },
  {
    name: "Romeena De Silva",
    title: "Janet Cosmetics",
    image: "https://placehold.co/100x100",
    rating: 5,
  },
];

export const ClientFeedback = () => {
  return (
    <>
      <div className="bg-gray-100 flex items-center justify-center min-h-screen">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-4xl">
          <h2 className="text-2xl font-semibold text-gray-800">
            Why customers love <span className="font-bold">working with us</span>
          </h2>
          <div className="flex justify-center items-center mt-4">
            <i className="fas fa-quote-left text-2xl text-purple-600"></i>
            <p className="text-gray-600 mx-4">
              Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I’ve came across so far. Wouldn’t be hesitated to introduce their work to someone else.
            </p>
            <i className="fas fa-quote-right text-2xl text-purple-600"></i>
          </div>
          <div className="flex justify-center items-center mt-8">
            <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center cursor-pointer">
              <i className="fas fa-arrow-left"></i>
            </div>
            <div className="flex space-x-4 mx-4">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="text-center">
                  <img src={testimonial.image} alt={`Profile picture of ${testimonial.name}`} className="rounded-full mx-auto" width="100" height="100" />
                  <div className="flex justify-center mt-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <i key={i} className="fas fa-star text-yellow-500"></i>
                    ))}
                  </div>
                  <p className="text-gray-800 font-semibold">{testimonial.name}</p>
                  <p className="text-gray-500">{testimonial.title}</p>
                </div>
              ))}
            </div>
            <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center cursor-pointer">
              <i className="fas fa-arrow-right"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
