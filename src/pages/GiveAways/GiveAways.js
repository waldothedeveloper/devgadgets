import React from "react"
// import { motion } from "framer-motion"
import { getCloudinaryGoogleMiniWhite } from "../../hooks/get-cloudinary-google-mini-white"

const GiveAways = () => {
  const data = getCloudinaryGoogleMiniWhite()
  console.log("data: ", data)
  return (
    <div className="relative bg-teal-700">
      <div className="h-64 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
        <img
          className="w-full h-full object-cover"
          src={data.secure_url}
          alt="people at a party dancing"
        />
        {/* <video
          className="w-full h-full object-cover"
          autoPlay
          playsInline
          muted
          loop
        >
          <source
            src="https://media.giphy.com/media/4WS0yI6PXqd3i/giphy.mp4"
            type="video/mp4"
          />
        </video> */}
      </div>
      <div className="relative max-w-screen-xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="md:ml-auto md:w-1/2 md:pl-10">
          <div className="text-base leading-6 font-semibold tracking-wider text-gray-300">
            Aaaaaaannnnnd....
          </div>
          <h2 className="mt-2 text-white text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl sm:leading-10 ">
            It&apos;s GiveAway time! &nbsp;
            <span
              className="text-lg"
              role="img"
              alt="celebrate"
              aria-labelledby="celebrate"
            >
              🎉
            </span>
            &nbsp;
            <span
              className="text-lg"
              role="img"
              alt="celebrate"
              aria-labelledby="celebrate"
            >
              🎈
            </span>
            &nbsp;
            <span
              className="text-lg"
              role="img"
              alt="celebrate"
              aria-labelledby="celebrate"
            >
              🍾
            </span>
          </h2>
          <div className="mt-3 prose prose-lg text-gray-300 mx-auto">
            <p>
              We&apos;re giving away two (2){" "}
              <span className="text-orange-500 font-mono">Google Minis</span>.{" "}
              <br />
              Use it for your home automation projects, to listen to music, or
              ask any silly questions. <br />
              The two lucky winners will be contacted via email to receive their
              prize. <br />
              Here&apos; how to enter to win:
            </p>
          </div>

          {/* Steps to enter to win */}
          <div className="mt-8">
            <nav>
              <ul className="border border-gray-300 rounded-md divide-y divide-gray-300 md:flex md:divide-y-0">
                <li className="relative md:flex-1 md:flex">
                  {/* Completed Step */}

                  <button className="group flex items-center w-full">
                    <div className="px-6 py-4 flex items-center text-sm leading-5 font-medium space-x-4">
                      <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-white rounded-full group-hover:bg-teal-800 transition ease-in-out duration-150">
                        <svg
                          className="w-6 h-6 text-teal-600 group-hover:text-gray-50"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <p className="text-sm leading-5 font-medium text-gray-50">
                        Tweet about us!
                      </p>
                    </div>
                  </button>

                  <div className="hidden md:block absolute top-0 right-0 h-full w-5">
                    <svg
                      className="h-full w-full text-gray-300"
                      viewBox="0 0 22 80"
                      fill="none"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M0 -2L20 40L0 82"
                        vectorEffect="non-scaling-stroke"
                        stroke="currentcolor"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </li>

                <li className="relative md:flex-1 md:flex">
                  {/* Completed Step */}
                  <button className="group flex items-center">
                    <div className="px-6 py-4 flex items-center text-sm leading-5 font-medium space-x-4">
                      <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-gray-300 rounded-full group-hover:border-gray-400 transition ease-in-out duration-150">
                        <span className="text-gray-500 group-hover:text-gray-900 transition ease-in-out duration-150">
                          02
                        </span>
                      </div>
                      <p className="text-sm leading-5 font-medium text-gray-500 group-hover:text-gray-900 transition ease-in-out duration-150">
                        Subscribe to our newsletter
                      </p>
                    </div>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GiveAways
