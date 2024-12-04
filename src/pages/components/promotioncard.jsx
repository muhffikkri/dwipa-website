// export const PromotionCard = () => {
//   return (
//     <>
//       <div className="px-24">
//         <div className="flex items-center py-10 px-8 justify-between rounded-lg" style={{ backgroundColor: "#f8f9fa" }}>
//           <h1 className="text-2xl font-semibold text-gray-800 bg-gray-100">Hire the best developers and designers around!</h1>
//           <button className="flex items-center px-6 py-3 text-white bg-gradient-to-r from-orange-400 to-pink-500 rounded-lg">
//             Hire Top Developers
//             <i className="fas fa-sun ml-2 text-yellow-300"></i>
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

export const PromotionCard = () => {
  return (
    <>
      <div className="lg:px-24">
        <div className="flex flex-col lg:flex-row gap-6 items-center py-5 px-4 lg:py-10 lg:px-8 justify-between rounded-lg" style={{ backgroundColor: "#f8f9fa" }}>
          <h1 className="text-2xl font-semibold text-gray-800 bg-gray-100 text-center lg:text-left p-4 lg:p-8">Hire the best developers and designers around!</h1>
          <button aria-label="Hire Top Developers" className="flex items-center px-6 py-3 text-white bg-gradient-to-r from-orange-400 to-pink-500 rounded-lg hover:scale-105 transition-transform">
            Hire Top Developers
            <i className="fas fa-sun ml-2 text-yellow-300" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </>
  );
};
