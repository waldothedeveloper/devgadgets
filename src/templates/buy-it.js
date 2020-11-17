import React from "react"
import amazon from "../images/amazon-logo.svg"
import PropTypes from "prop-types"

//
const BuyIt = ({ frontmatter }) => {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto lg:flex lg:items-center">
        <div className="w-48 md:px-4">
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

BuyIt.propTypes = {
  frontmatter: PropTypes.object,
}
export default BuyIt
