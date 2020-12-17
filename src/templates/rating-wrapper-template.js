import React from "react"
import DevGadgetsChoice from "../components/devgadgets-choice"
import StarRating from "./star-rating"
import PropTypes from "prop-types"

const RatingWrapper = ({ frontmatter }) => {
  return (
    <div className="mb-6 md:mb-4">
      {/* Small screens only */}
      <div className="flex md:hidden">
        <div className="flex flex-col w-2/4">
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
          <div className="flex flex-wrap items-center justify-center w-2/4">
            <span className="mx-2 text-center text-sm">
              {frontmatter.rating}
            </span>
            <StarRating value={frontmatter.rating} />
            <span className="text-center text-sm">
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
            <span className="mx-1 text-center text-sm">
              {frontmatter.rating}
            </span>
            <StarRating value={frontmatter.rating} />
            <span className="mx-1 text-center text-sm">
              {frontmatter.ratings_count} ratings
            </span>
          </div>
        ) : (
          <div className="flex flex-col items-center -mt-1 ml-4"></div>
        )}
      </div>
    </div>
  )
}

RatingWrapper.propTypes = {
  frontmatter: PropTypes.object.isRequired,
}

//
export default RatingWrapper
