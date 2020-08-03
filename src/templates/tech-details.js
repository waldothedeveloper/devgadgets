import React from "react"
import PropTypes from "prop-types"

const TechDetails = ({ metadata }) => {
  return (
    <div className="mt-16 bg-white overflow-hidden">
      <div className="pr-4 py-5 border-b border-gray-200 sm:px-6">
        <h3 className="text-xl leading-9 font-bold text-gray-900 sm:text-2xl sm:leading-10">
          The tech sauce
        </h3>
        <p className="mt-0.5 max-w-2xl text-sm leading-5 text-gray-800">
          The little details that geeks crawl.
        </p>
      </div>

      <ul className="list-disc m-2 p-2">
        {metadata.technical_details.map((details, id) => (
          <li key={id} className="text-md leading-7 my-4 mx-2 text-gray-500">
            {details}
          </li>
        ))}
      </ul>
    </div>
  )
}
TechDetails.propTypes = {
  metadata: PropTypes.object,
}
export default TechDetails
