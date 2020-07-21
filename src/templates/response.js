import React from "react"

const Response = ({ children }) => {
  return (
    <div className="mb-2">
      <div className="text-justify text-lg leading-7 text-gray-500">
        {children}
      </div>
    </div>
  )
}

export default Response
