import React from "react"
import { Link } from "gatsby"

const AudibleCallOut = () => {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 md:text-4xl md:leading-10">
          <span className="block">
            Why the Amazon Audible Membership is so worthy?
          </span>
          {/* <span className="block text-teal-600 text-2xl">
            Start your free trial today.
          </span> */}
        </h2>
        <div className="mt-8 flex lg:flex-shrink-0 lg:mt-0">
          <div className="inline-flex rounded-md shadow">
            <Link
              to="/audible/amazon-audible-membership/"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-teal-600 hover:bg-teal-500 transition duration-150 ease-in-out"
            >
              Let&apos;s find out
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AudibleCallOut
