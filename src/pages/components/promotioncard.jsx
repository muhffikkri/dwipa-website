export const PromotionCard = () => {
  return (
    <>
      <div className="px-24">
        <div className="flex items-center py-10 px-8 justify-between rounded-lg" style={{ backgroundColor: "#f8f9fa" }}>
          <h1 className="text-2xl font-semibold text-gray-800 bg-gray-100">Hire the best developers and designers around!</h1>
          <button className="flex items-center px-6 py-3 text-white bg-gradient-to-r from-orange-400 to-pink-500 rounded-lg">
            Hire Top Developers
            <i className="fas fa-sun ml-2 text-yellow-300"></i>
          </button>
        </div>
      </div>
    </>
  );
};
