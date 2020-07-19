import React from "react"
import amazon from "../images/amazon-logo.svg"
import Rating from "./rating-template"

//
const TheGist = ({ frontmatter }) => {
  return (
    <div className="mt-12 relative bg-white">
      <div className="h-56 bg-teal-600 sm:h-72 lg:absolute lg:left-0 lg:h-full lg:w-1/2">
        <img
          className="w-full h-full object-cover"
          src={frontmatter.featuredImage.publicURL}
          alt="featured product"
        />
        <span className="text-sm pl-0.5 text-gray-400 leading-6">
          {frontmatter.image_captions}
        </span>
      </div>

      <div className="relative max-w-screen-xl mx-auto px-4 py-8 sm:py-12 sm:px-6 lg:py-16">
        <div className="lg:max-w-none lg:mr-0 lg:ml-auto lg:w-1/2 lg:pl-10">
          <h2 className="text-xl leading-9 font-bold text-gray-900 sm:text-2xl sm:leading-10">
            The Gist
          </h2>
          <div className="flex flex-col">
            {/* col-1 */}
            <div className="flex justify-between items-start">
              {/* Amazon choice */}
              {frontmatter.amazon_choice === null ? (
                <div className="mt-2" />
              ) : frontmatter.amazon_choice ? (
                <div className="mt-2">
                  <div
                    className="bg-gray-900 pl-3 pr-8 py-0.5"
                    style={{
                      clipPath: `polygon(0 0, 100% 0%, 87% 100%, 0% 100%)`,
                    }}
                  >
                    <span className="text-sm text-white">Amazon's</span>&nbsp;
                    <span className="text-sm text-yellow-400">Choice</span>
                  </div>
                </div>
              ) : (
                <div className="mt-2" />
              )}
              {/* Star Rating */}
              {frontmatter.ratings_count !== null ? (
                <div className="flex flex-col items-center -mt-1">
                  <Rating frontmatter={frontmatter} />
                  <span className="text-center text-sm">
                    `${frontmatter.ratings_count} ratings`
                  </span>
                </div>
              ) : (
                <div className="flex flex-col items-center -mt-1"></div>
              )}
            </div>
            {/* col-2 */}
            <div className="mt-2">
              {/* Price */}
              <div>
                <p className="text-xl font-semibold leading-7 text-teal-800">
                  ${frontmatter.price}{" "}
                  <span className="text-sm font-semibold">USD</span>
                </p>
              </div>
            </div>
          </div>
          <p className="mt-6 text-lg leading-7 text-gray-500">
            {frontmatter.the_gist}
          </p>
          <div className="mt-8">
            {/* Amazon button buy */}
            <a
              target="_blank"
              rel="noreferrer"
              href={`${frontmatter.buy_link}`}
              className="rounded-full shadow-lg w-full flex flex-col items-center text-center p-2 border border-transparent text-sm leading-6 font-medium text-white bg-teal-600 hover:bg-teal-800 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
            >
              <span className="leading-7 text-white">Get it on</span>{" "}
              <div className="mt-1">
                <img className="w-auto h-6" src={amazon} alt="amazon logo" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TheGist
