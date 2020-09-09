import React from "react"
import PropTypes from "prop-types"

const Price = ({ frontmatter }) => {
  return (
    <div className="relative">
      <div className="flex flex-col">
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
    </div>
  )
}

Price.propTypes = {
  frontmatter: PropTypes.object.isRequired,
}
export default Price
