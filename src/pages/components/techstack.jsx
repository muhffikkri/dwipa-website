export const TechStack = () => {
  return (
    <>
      <div className="text-center py-10">
        <h2 className="text-2xl font-bold mb-2">Our</h2>
        <h1 className="text-4xl font-bold mb-6">Tech Stack</h1>
        <div className="flex justify-center space-x-8 mb-8 gap-4">
          <span className="text-purple-600 border-b-2 border-purple-600">Backend</span>
          <span>Frontend</span>
          <span>Databases</span>
          <span>CMS</span>
          <span>CloudTesting</span>
          <span>DevOps</span>
        </div>
        <div className="grid grid-cols-4 gap-8 mx-auto max-w-4xl">
          <img src="https://placehold.co/100x100?text=Node.js" alt="Node.js logo" className="mx-auto" />
          <img src="https://placehold.co/100x100?text=PHP" alt="PHP logo" className="mx-auto" />
          <img src="https://placehold.co/100x100?text=MySQL" alt="MySQL logo" className="mx-auto" />
          <img src="https://placehold.co/100x100?text=Java" alt="Java logo" className="mx-auto" />
          <img src="https://placehold.co/100x100?text=Python" alt="Python logo" className="mx-auto" />
          <img src="https://placehold.co/100x100?text=Rails" alt="Rails logo" className="mx-auto" />
          <img src="https://placehold.co/100x100?text=Go" alt="Go logo" className="mx-auto" />
          <img src="https://placehold.co/100x100?text=MongoDB" alt="MongoDB logo" className="mx-auto" />
        </div>
      </div>
    </>
  );
};
