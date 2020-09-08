import React from "react"
import amazon from "../images/amazon-logo.svg"
import StarRating from "./star-rating"
import PropTypes from "prop-types"
import DevGadgetsChoice from "../components/devgadgets-choice"
//
const TheGist = ({ frontmatter, image }) => {
  return (
    <div className="mt-12 relative bg-white">
      <div className="mb-6 md:mb-4">
        {/* Small screens only */}
        <div className="flex justify-between md:hidden">
          <div className="flex flex-col">
            {/* DevGadgets choice */}
            <div className="mt-2 pr-2">
              <DevGadgetsChoice
                devgadgets_choice={frontmatter.devgadgets_choice}
              />
            </div>
            {/* Amazon choice */}
            {frontmatter.amazon_choice === null ? (
              <div className="pr-2" />
            ) : frontmatter.amazon_choice ? (
              <div className="pr-2">
                <div
                  className="bg-cool-gray-900 pl-3 pr-8 py-0.5"
                  style={{
                    clipPath: `polygon(0 0, 100% 0%, 87% 100%, 0% 100%)`,
                  }}
                >
                  <span className="text-sm text-white">Amazon&apos;s</span>
                  &nbsp;
                  <span className="text-sm text-yellow-400">Choice</span>
                </div>
              </div>
            ) : (
              <div className="pr-2" />
            )}
          </div>

          {/* Ratings */}
          {frontmatter.ratings_count !== null ? (
            <div className="flex items-center justify-center">
              <span className="mx-2 text-center text-sm">
                {frontmatter.rating}
              </span>
              <StarRating value={frontmatter.rating} />
              <span className="mx-2 text-center text-sm">
                {frontmatter.ratings_count} ratings
              </span>
            </div>
          ) : (
            <div className="flex items-center justify-center"></div>
          )}
        </div>

        {/* Medium & Large screens */}
        <div className="hidden md:flex md:justify-between">
          <div className="flex flex-col">
            {/* Amazon choice */}
            {frontmatter.amazon_choice === null ? (
              <div className="mt-2" />
            ) : frontmatter.amazon_choice ? (
              <div className="mt-2">
                <div
                  className="bg-cool-gray-900 pl-3 pr-8 py-0.5"
                  style={{
                    clipPath: `polygon(0 0, 100% 0%, 87% 100%, 0% 100%)`,
                  }}
                >
                  <span className="text-sm text-white">Amazon&apos;s</span>
                  &nbsp;
                  <span className="text-sm text-yellow-400">Choice</span>
                </div>
              </div>
            ) : (
              <div className="mt-2" />
            )}
            {/* DevGadgets choice */}
            <div className="mt-2">
              <DevGadgetsChoice
                devgadgets_choice={frontmatter.devgadgets_choice}
              />
            </div>
          </div>

          {/* Ratings */}
          {frontmatter.ratings_count !== null ? (
            <div className="flex items-center">
              <span className="mx-2 text-center text-sm">
                {frontmatter.rating}
              </span>
              <StarRating value={frontmatter.rating} />
              <span className="mx-2 text-center text-sm">
                {frontmatter.ratings_count} ratings
              </span>
            </div>
          ) : (
            <div className="flex flex-col items-center -mt-1 ml-4"></div>
          )}
        </div>
      </div>

      <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
        <figure>
          <div className="pb-7/12 lg:pb-0">
            <img
              src={
                image && image.secure_url
                  ? image.secure_url
                  : `http://placehold.jp/24/cccccc/ffffff/250x50.png?text=image_not_found`
              }
              alt="featured product"
              className="rounded-lg shadow-lg object-cover object-center absolute inset-0 w-full h-full lg:static lg:h-auto"
            />
          </div>
          <figcaption className="flex mt-3 text-sm text-gray-500">
            <svg
              className="flex-none w-5 h-5 mr-2 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
                clipRule="evenodd"
              />
            </svg>
            {frontmatter.image_captions}
          </figcaption>
        </figure>
      </div>

      <div className="relative px-4 py-8 sm:py-12 sm:px-6 md:px-0">
        <div className="">
          <h2 className="text-xl leading-9 font-bold text-gray-900 sm:text-2xl sm:leading-10">
            The Gist
          </h2>
          <p className="mt-6 text-lg leading-7 text-gray-500 text-justify">
            {frontmatter.the_gist}
          </p>
          <div className="mt-12 flex flex-col">
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
          <div className="mt-4 max-w-xs">
            {/* Amazon button buy */}
            <a
              target="_blank"
              rel="noreferrer"
              href={`${frontmatter.buy_link}`}
              className="rounded-md shadow-lg flex flex-col items-center text-center p-2 border border-transparent text-sm leading-6 font-medium text-white bg-teal-600 hover:bg-teal-800 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
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
TheGist.propTypes = {
  frontmatter: PropTypes.object,
  image: PropTypes.object,
}
export default TheGist
