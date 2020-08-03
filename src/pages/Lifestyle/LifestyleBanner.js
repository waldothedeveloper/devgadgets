import React from "react"
import lifestyle from "../../images/lifestyle.svg"
import scooter from "../../images/scooter-5.gif"
import { Link } from "gatsby"

const LifestyleBanner = () => {
  return (
    <div className="relative bg-gray-800 pt-20 md:pt-2 lg:pt-0">
      <div className="h-56 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
        <img
          className="w-full h-full object-cover"
          src={lifestyle}
          alt="lifestyle team of people"
        />
      </div>
      <div className="relative max-w-screen-xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-52">
        <div className="md:ml-auto md:w-1/2 md:pl-10">
          <div className="text-base leading-6 font-semibold uppercase tracking-wider text-gray-300">
            <img
              className="inline-flex w-auto h-8"
              src={scooter}
              alt="lifestyle team of people"
            />{" "}
            LifeStyle hacks
          </div>
          <h2 className="mt-2 text-white text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl sm:leading-10">
            Make a better life, live a better life
          </h2>
          <p className="mt-3 text-lg leading-7 text-gray-300">
            Once you stop chasing the wrong things, the right ones catch you, so
            keep going, because you did not come this far just to come this far.
          </p>
          <div className="mt-8">
            <div className="inline-flex rounded-md shadow">
              <Link
                to="/lifestyle"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-gray-900 bg-white hover:text-gray-600 focus:outline-none focus:shadow-outline"
              >
                Let&apos;s see it!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LifestyleBanner

// <div className="relative bg-gray-800">
//   <div className="h-56 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
//     <img
//       className="w-full h-full object-cover"
//       src={lifestyle}
//       alt="lifestyle team of people"
//     />
//   </div>

//   <div className="relative  max-w-screen-xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
//     <div className="text-base leading-6 font-semibold uppercase tracking-wider text-gray-300">
//       <img
//         className="inline-flex w-auto h-8"
//         src={scooter}
//         alt="lifestyle team of people"
//       />{" "}
//       LifeStyle hacks
//     </div>
//     <h2 className="mt-2 text-white text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl sm:leading-10">
//       Make a better life, live a better life
//     </h2>
//     <p className="mt-3 text-lg leading-7 text-gray-300">
//       Once you stop chasing the wrong things, the right ones catch you, so
//       keep going, because you did not come this far just to come this far.
//     </p>
//     <div className="mt-8">
//       <div className="inline-flex rounded-md shadow">
//         <Link
//           to="/lifestyle"
//           className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-gray-900 bg-white hover:text-gray-600 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
//         >
//           Ok you convinced me
//           <svg
//             className="-mr-1 ml-3 h-5 w-5 text-gray-400"
//             viewBox="0 0 20 20"
//             fill="currentColor"
//           >
//             <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
//             <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
//           </svg>
//         </Link>
//       </div>
//     </div>
//   </div>
// </div>
