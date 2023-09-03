// -------------------------------------------------------------------------------

// import React from "react";

// const Login = () => {
//   return (
//     <section className="text-gray-600 body-font overflow-hidden">
//       <div className="container px-5 py-24 mx-auto">
//         <div className="lg:w-4/5 mx-auto flex flex-wrap">
//           <div className="w-full lg:w-1/2">
//             <img
//               alt="ecommerce"
//               className="h-auto w-full object-cover object-left rounded"
//               src="/banner.jpeg"
//             />
//           </div>
//           <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
//             <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
//               <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
//                 Sign Up
//               </h2>
//               <div className="relative mb-4">
//                 <label
//                   htmlFor="full-name"
//                   className="leading-7 text-sm text-gray-600"
//                 >
//                   Full Name
//                 </label>
//                 <input
//                   type="text"
//                   id="full-name"
//                   name="full-name"
//                   className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//                 />
//               </div>
//               <div className="relative mb-4">
//                 <label
//                   htmlFor="email"
//                   className="leading-7 text-sm text-gray-600"
//                 >
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//                 />
//               </div>
//               <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
//                 Sign Up
//               </button>
//               <p className="text-xs text-gray-500 mt-3">
//                 Signup into our system and explore the endless opportunities 🎉
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Login;

// -------------------------------------------------------------------------------

// import React from "react";

// const Login = () => {
//   return (
//     <section className="text-gray-600 body-font overflow-hidden">
//       <div className="container px-5 py-24 mx-auto">
//         <div className="lg:w-4/5 mx-auto flex flex-wrap lg:flex-nowrap items-center">
//           {" "}
//           {/* Added 'lg:flex-nowrap' class */}
//           <div className="w-full lg:w-1/2 mb-10 lg:mb-0 lg:mr-10">
//             {" "}
//             {/* Added 'mb-10' and 'lg:mr-10' classes */}
//             <img
//               alt="ecommerce"
//               className="w-full h-auto object-cover object-center rounded"
//               src="/banner.jpeg"
//             />
//           </div>
//           <div className="lg:w-1/2 w-full">
//             <div className="bg-gray-100 rounded-lg p-8 flex flex-col w-full mt-10 md:mt-0">
//               <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
//                 Sign Up
//               </h2>
//               <div className="relative mb-4">
//                 {/* ... rest of the form ... */}
//               </div>
//               <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
//                 Sign Up
//               </button>
//               <p className="text-xs text-gray-500 mt-3">
//                 Signup into our system and explore the endless opportunities 🎉
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Login;

// -------------------------------------------------------------------------------------

import React from "react";

const Login = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 className="title-font font-medium text-3xl text-gray-900">
              Welcome to Fund Upstart!
            </h1>
            <p className="leading-relaxed mt-4">
              Are you a visionary entrepreneur ready to transform the world with
              your innovative startup? Or an astute investor seeking the next
              big opportunity? Look no further – Fund Upstart is your gateway to
              success.
            </p>
          </div>
          <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
              Login
            </h2>
            <div className="relative mb-4">
              <label
                htmlFor="full-name"
                className="leading-7 text-sm text-gray-600"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Login
            </button>
            <p className="text-xs text-gray-500 mt-3">
              Login into our system and explore endless opportunities 🎉
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
