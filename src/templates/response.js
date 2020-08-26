import React from "react"
import PropTypes from "prop-types"

//
const Response = ({ children }) => {
  return (
    <div className="mb-2">
      <div className="text-justify text-lg leading-7 text-gray-500">
        {children}
      </div>
    </div>
  )
}
Response.propTypes = {
  children: PropTypes.string,
}
export default Response
