import React from "react"
import PropTypes from "prop-types"
import { motion } from "framer-motion"

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.3,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

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

      <motion.ul
        variants={container}
        initial="hidden"
        animate="visible"
        className="list-disc m-2 p-2"
      >
        {metadata.technical_details.map((details, id) => (
          <motion.li
            variants={item}
            key={id}
            className="text-md leading-7 my-4 mx-2 text-gray-500"
          >
            {details}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  )
}
TechDetails.propTypes = {
  metadata: PropTypes.object,
}
export default TechDetails
