export const BuildSoftwareCard = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-center gap-16 bg-white p-8 rounded-lg shadow-md">
        <div className="md:w-1/2">
          <h3 className="text-xl font-bold text-gray-800">Build the right team to scale</h3>
          <p className="text-gray-600 mt-2">Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers).</p>
          <p className="text-gray-600 mt-2">
            Our{" "}
            <a href="#" className="text-purple-600">
              delivery model
            </a>{" "}
            helps you cut costs and deliver within budget.
          </p>
          <blockquote className="text-pink-600 mt-4">"Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules"</blockquote>
          <div className="flex items-center mt-4">
            <img src="https://placehold.co/40" alt="CEO" className="rounded-full" />
            <div className="ml-2">
              <p className="text-gray-800 font-bold">Jeewa markram</p>
              <p className="text-gray-600">CEO</p>
            </div>
          </div>
        </div>
        <div className="mt-4 md:mt-0">
          <img src="https://placehold.co/500x300" alt="Team meeting" className="rounded-lg" />
        </div>
      </div>
    </>
  );
};
