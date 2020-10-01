import React from "react"
import { motion } from "framer-motion"
import { subCategoryGadgets } from "../utils/categories"
import PropTypes from "prop-types"
import {
  colorMapButton,
  colorMapLi,
  colorMapLi2,
  textColorMapDiv1,
  textColorMapDiv2,
} from "../utils/colors"

//
const CategoriesGadgetsLayout = ({ articleCat, handleCategory }) => {
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }

  return (
    <>
      <motion.ul
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, ease: "easeIn" }}
        variants={variants}
        className="hidden md:flex flex-col mt-6 overflow-hidden"
      >
        {subCategoryGadgets.map((elem, id) => (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleCategory(elem)}
            key={id}
            className={
              elem.category === articleCat
                ? `my-1 md:mx-4 lg:mx-6 group border border-gray-200 rounded-md shadow-lg ${
                    colorMapButton[elem.category_color]
                  }`
                : `my-1 md:mx-4 lg:mx-6 group border border-gray-200 rounded-md shadow-lg`
            }
          >
            <li
              className={
                elem.category === articleCat
                  ? `${
                      colorMapLi[elem.category_color]
                    } w-full flex items-center`
                  : `${
                      colorMapLi2[elem.category_color]
                    } w-full flex items-center`
              }
            >
              <div
                className={
                  elem.category === articleCat
                    ? `flex-shrink-0 flex items-center justify-center w-16 h-16 text-white text-center text-5xl ${
                        textColorMapDiv1[elem.category_color]
                      }`
                    : `flex-shrink-0 flex items-center justify-center w-16 h-16 text-center text-5xl ${
                        textColorMapDiv2[elem.category_color]
                      }`
                }
              >
                {elem.category.slice(0, 1)}
              </div>
              <div className="px-4 py-2">
                <div
                  className={
                    elem.category === articleCat
                      ? `
                        text-white group-focus:text-white group-hover:text-white text-lg leading-5 font-medium hover:text-gray-600 transition ease-in-out duration-150`
                      : "text-gray-900 text-sm leading-5 font-medium transition ease-in-out duration-150"
                  }
                >
                  {elem.category}
                </div>
              </div>
            </li>
          </motion.button>
        ))}
      </motion.ul>
    </>
  )
}

CategoriesGadgetsLayout.propTypes = {
  articleCat: PropTypes.string,
  handleCategory: PropTypes.func,
}
export default CategoriesGadgetsLayout
