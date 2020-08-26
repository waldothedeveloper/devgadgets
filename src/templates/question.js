import React from "react"
import PropTypes from "prop-types"

//
const Question = ({ children }) => {
  return (
    <div className="text-justify mt-12 mb-6 text-xl leading-9 font-bold text-gray-900 sm:text-2xl sm:leading-10">
      {children}
    </div>
  )
}

Question.propTypes = {
  children: PropTypes.string,
}

export default Question
