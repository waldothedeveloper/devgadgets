import React from "react"

const Whatsup = ({ children }) => {
  console.log("children: ", children)
  return (
    <div>
      <div className="text-gray-800 font-semibold text-xl">What's up</div>
      <div className="text-base text-gray-600">{children}</div>
    </div>
  )
}

export default Whatsup
