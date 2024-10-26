import React from "react";
import Link from "next/link";


export default function Footer() {
  return (
    <div>
      <footer className="bg-gray-100 text-gray-700 py-10">
        <div className="container mx-auto px-6 lg:px-8">
          {/* Top section with branding, navigation, and legal links */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-6 lg:space-y-0">
            {/* Branding Section */}
            <div className="lg:w-1/3 text-center lg:text-left">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                NextWave Dev
              </h2>
              <p className="text-gray-600">A figma design made with <span className="font-semibold text-violet-600">NEXT.js & Tailwind CSS</span> &💖 by <span className="font-bold">Fahad Khakwani</span></p>
            </div>

            {/* Navigation Links Section */}
            <div className="lg:w-1/3 text-center">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Navigate
              </h2>
              <ul className="space-y-2 lg:space-y-0 lg:flex lg:justify-center lg:space-x-6 text-gray-600">
                <li>
                  <Link href="/" className="hover:text-gray-900">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="./portfolio" className="hover:text-gray-900">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="./about" className="hover:text-gray-900">
                    About Me
                  </Link>
                </li>
                <li>
                  <Link href="./contact" className="hover:text-gray-900">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="./testimonials" className="hover:text-gray-900">
                    Testimonials
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal & Privacy Section */}
            <div className="lg:w-1/3 text-center lg:text-right">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Legal
              </h2>
              <ul className="space-y-2 lg:space-y-0 lg:flex lg:justify-end lg:space-x-6 text-gray-600">
                <li>
                  <a href="/privacy" className="hover:text-gray-900">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms" className="hover:text-gray-900">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="/cookies" className="hover:text-gray-900">
                    Cookies Settings
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-300 mt-10 pt-6 text-center text-sm text-gray-500">
            © 2024 NextWave Dev. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}











// import Link from "next/link";

// export default function Footer() {
//   return (
//     <footer className="bg-gray-900 text-white py-10 mt-10">
//       <div className="container mx-auto px-4">
//         {/* Top Section: Title and Short Description */}
//         <div className="text-center mb-8">
//           <h2 className="text-3xl md:text-4xl font-bold mb-2">Get In Touch</h2>
//           <p className="text-gray-400">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//           </p>
//         </div>

//         {/* Contact Links and Form Sections */}
//         <div className="flex flex-col md:flex-row justify-between mb-10">
//           {/* Contact Links */}
//           <div className="flex flex-col items-center md:items-start md:w-1/3 mb-6 md:mb-0">
//             <h3 className="text-xl font-semibold mb-4">Contact Me</h3>
//             <p className="text-gray-400 mb-2">Phone: (123) 456-7890</p>
//             <p className="text-gray-400 mb-2">Email: fahad@nextwave.dev</p>
//             <p className="text-gray-400 mb-2">Location: City, Country</p>
//           </div>

//           {/* Form */}
//           <form className="w-full md:w-1/2 space-y-4">
//             <div className="grid grid-cols-2 gap-4">
//               <input
//                 type="text"
//                 placeholder="First name"
//                 className="bg-gray-800 p-3 rounded-md text-white focus:outline-none w-full"
//               />
//               <input
//                 type="text"
//                 placeholder="Last name"
//                 className="bg-gray-800 p-3 rounded-md text-white focus:outline-none w-full"
//               />
//             </div>
//             <input
//               type="email"
//               placeholder="Email"
//               className="bg-gray-800 p-3 rounded-md text-white focus:outline-none w-full"
//             />
//             <input
//               type="tel"
//               placeholder="Phone number"
//               className="bg-gray-800 p-3 rounded-md text-white focus:outline-none w-full"
//             />
//             <select
//               className="bg-gray-800 p-3 rounded-md text-white focus:outline-none w-full"
//             >
//               <option>Select one...</option>
//               <option>General Inquiry</option>
//               <option>Project Proposal</option>
//               <option>Feedback</option>
//             </select>
//             <textarea
//               placeholder="Type your message..."
//               className="bg-gray-800 p-3 rounded-md text-white focus:outline-none w-full h-32"
//             ></textarea>
//             <div className="flex items-center space-x-2">
//               <input type="checkbox" id="terms" />
//               <label htmlFor="terms" className="text-gray-400">
//                 I accept the terms
//               </label>
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-blue-600 hover:bg-blue-500 p-3 rounded-md font-semibold text-white"
//             >
//               Submit
//             </button>
//           </form>
//         </div>

//         {/* Navigation Links */}
//         <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between text-center md:text-left">
//           <ul className="flex flex-wrap justify-center space-x-4 mb-4 md:mb-0">
//             <li>
//               <Link href="/" className="text-gray-400 hover:text-white">
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link href="/portfolio" className="text-gray-400 hover:text-white">
//                 Portfolio
//               </Link>
//             </li>
//             <li>
//               <Link href="/about" className="text-gray-400 hover:text-white">
//                 About Me
//               </Link>
//             </li>
//             <li>
//               <Link href="/contact" className="text-gray-400 hover:text-white">
//                 Contact
//               </Link>
//             </li>
//             <li>
//               <Link href="/testimonials" className="text-gray-400 hover:text-white">
//                 Testimonials
//               </Link>
//             </li>
//           </ul>

//           {/* Footer Credits */}
//           <div className="text-gray-500 text-sm mt-4 md:mt-0">
//             Made with 💖 by Fahad Khakwani
//           </div>
//         </div>

//         {/* Legal Links */}
//         <div className="flex flex-col md:flex-row justify-center md:justify-between text-gray-400 text-sm mt-6 space-y-2 md:space-y-0">
//           <Link href="/privacy-policy" className="hover:text-white">
//             Privacy Policy
//           </Link>
//           <Link href="/terms-of-service" className="hover:text-white">
//             Terms of Service
//           </Link>
//           <Link href="/cookies-settings" className="hover:text-white">
//             Cookies Settings
//           </Link>
//         </div>
//       </div>
//     </footer>
//   );
// }
