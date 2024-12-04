// export const Footer = () => {
//   return (
//     <>
//       <footer className="bg-gray-50 text-gray-400 py-10 px-24">
//         <div className="container mx-auto px-4">
//           <div className="flex gap-28">
//             <div className="max-w-sm">
//               <div className="mb-4">
//                 <img src="https://placehold.co/50x50" alt="Company Logo" className="inline-block" />
//               </div>
//               <p className="text-gray-400 mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
//               <img src="https://placehold.co/150x50" alt="Google PageSpeed 100" className="inline-block" />
//             </div>
//             <div>
//               <h3 className="font-bold mb-4">Links</h3>
//               <ul className="text-gray-400">
//                 <li className="mb-2">
//                   <a href="#">About Us</a>
//                 </li>
//                 <li className="mb-2">
//                   <a href="#">Services</a>
//                 </li>
//                 <li className="mb-2">
//                   <a href="#">Case Studies</a>
//                 </li>
//                 <li className="mb-2">
//                   <a href="#">How it works</a>
//                 </li>
//                 <li className="mb-2">
//                   <a href="#">Blog</a>
//                 </li>
//                 <li className="mb-2">
//                   <a href="#">Careers</a>
//                 </li>
//                 <li className="mb-2">
//                   <a href="#">Areas We Serve</a>
//                 </li>
//               </ul>
//             </div>
//             <div className="max-w-sm">
//               <h3 className="font-bold mb-4">Contact us</h3>
//               <p className="text-gray-400 mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
//               <p className="text-gray-400">+923183561921</p>
//             </div>
//           </div>
//           <div className="flex justify-between items-center mt-10">
//             <p className="text-gray-400">© 2023 Copyright by IK Developers. All rights reserved.</p>
//             <div className="flex space-x-4">
//               <a href="#" className="text-gray-400">
//                 Facebook
//                 {/* <i className="fab fa-facebook-f"></i> */}
//               </a>
//               <a href="#" className="text-gray-400">
//                 Instagram
//                 {/* <i className="fab fa-instagram"></i> */}
//               </a>
//               <a href="#" className="text-gray-400">
//                 Twitter
//                 {/* <i className="fab fa-twitter"></i> */}
//               </a>
//               <a href="#" className="text-gray-400">
//                 LinkedIn
//                 {/* <i className="fab fa-linkedin-in"></i> */}
//               </a>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// };

export const Footer = () => {
  return (
    <>
      <footer className="bg-gray-50 text-gray-400 py-10 md:px-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            <div className="max-w-sm">
              <div className="mb-4">
                <img src="https://placehold.co/50x50" alt="Company Logo" className="inline-block" />
              </div>
              <p className="text-gray-400 mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              <img src="https://placehold.co/150x50" alt="Google PageSpeed 100" className="inline-block" />
            </div>
            <div className="min-w-32">
              <h3 className="font-bold mb-4">Links</h3>
              <ul className="text-gray-400">
                <li className="mb-2">
                  <a href="#">About Us</a>
                </li>
                <li className="mb-2">
                  <a href="#">Services</a>
                </li>
                <li className="mb-2">
                  <a href="#">Case Studies</a>
                </li>
                <li className="mb-2">
                  <a href="#">How it works</a>
                </li>
                <li className="mb-2">
                  <a href="#">Blog</a>
                </li>
                <li className="mb-2">
                  <a href="#">Careers</a>
                </li>
                <li className="mb-2">
                  <a href="#">Areas We Serve</a>
                </li>
              </ul>
            </div>
            <div className="max-w-sm">
              <h3 className="font-bold mb-4">Contact us</h3>
              <p className="text-gray-400 mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              <p className="text-gray-400">+923183561921</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center mt-10">
            <p className="text-gray-400">© 2023 Copyright by IK Developers. All rights reserved.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400" aria-label="Facebook Profile">
                Facebook
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400" aria-label="Instagram Profile">
                Instagram
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400" aria-label="Twitter Profile">
                Twitter
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400" aria-label="LinkedIn Profile">
                LinkedIn
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
