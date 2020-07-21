import React from "react"

const Question = ({ children }) => {
  return (
    <div className="text-justify mt-12 mb-6 text-xl leading-9 font-bold text-gray-900 sm:text-2xl sm:leading-10">
      {children}
    </div>
  )
}

export default Question
