import React from "react"
import { subCategoryBooks } from "../utils/categories"
import { motion } from "framer-motion"
import PropTypes from "prop-types"

//
const BooksCategories = ({ handleCategory, selectCategory }) => {
  const list = subCategoryBooks.map((elem, id) => (
    <motion.button
      key={id}
      onClick={() => handleCategory(elem)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.8 }}
      className={
        selectCategory === elem.category
          ? `focus:outline-none focus:shadow-outline inline-flex items-center px-4 py-0.5 mx-3 my-1 rounded-full text-md font-medium leading-5 bg-cool-gray-800 text-gray-50`
          : `focus:outline-none inline-flex items-center px-3 py-0.5 mx-3 my-1 rounded-full text-sm font-medium leading-5 bg-${elem.category_color}-200 text-${elem.category_color}-800`
      }
    >
      {elem.category}
    </motion.button>
  ))

  return (
    <div className="mb-12 md:mx-12 lg:mx-32">
      <p className="md:text-center ml-3 text-gray-400 leading-7 text-xl">
        Filter books by language:
      </p>
      <ul className="flex flex-wrap justify-center mb-2 mt-4">{list}</ul>
      <div className="border-b border-gray-200 mx-auto" />
    </div>
  )
}

BooksCategories.propTypes = {
  handleCategory: PropTypes.func.isRequired,
  selectCategory: PropTypes.string.isRequired,
}
export default BooksCategories
