import React from "react"
import PropTypes from "prop-types"

const Price = ({ frontmatter }) => {
  console.log("frontmatter: ", frontmatter)
  return frontmatter.price === null || frontmatter.price === 0 ? (
    <div className="relative"></div>
  ) : (
    <div className="relative">
      <div className="flex flex-col">
        <div className="mt-2">
          {/* Price */}
          <div>
            <p className="text-xl font-semibold leading-7 text-teal-800">
              ${frontmatter.price}{" "}
              <span className="text-sm font-semibold">USD</span>
            </p>
            <p className="text-sm text-gray-400">
              Prices change over time. <br /> Click the button to see the latest
              price.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

Price.propTypes = {
  frontmatter: PropTypes.object.isRequired,
}
export default Price
