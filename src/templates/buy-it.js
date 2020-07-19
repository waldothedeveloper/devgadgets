import React from "react"
import amazon from "../images/amazon-logo.svg"

//
const BuyIt = ({ frontmatter }) => {
  return (
    <div className="">
      <div className="max-w-screen-xl mx-auto py-12 lg:py-16 lg:flex lg:items-center">
        {/* a */}
        <div className="flex flex-col md:w-3/4 md:pr-12">
          <div className="text-xl leading-9 font-bold text-gray-900 sm:text-2xl sm:leading-10">
            So why should I buy it?
          </div>
          <div className="mt-6 text-lg leading-7 text-gray-500">
            {frontmatter.down_the_line}
          </div>
        </div>
        {/* b */}
        <div className="mt-8 w-48 md:px-4">
          {/* Amazon button buy */}
          <a
            target="_blank"
            rel="noreferrer"
            href={`${frontmatter.buy_link}`}
            className="rounded-full shadow-lg flex flex-col items-center text-center px-3 pt-1 pb-2 border border-transparent text-sm leading-6 font-medium text-white bg-teal-600 hover:bg-teal-800 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
          >
            <span className="leading-7 text-white">Get it on</span>{" "}
            <div className="mt-0.5">
              <img className="w-auto h-6" src={amazon} alt="amazon logo" />
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default BuyIt
