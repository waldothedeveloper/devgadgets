import React from "react"
import Rating from "../templates/rating-template"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const CoursesArticlesLayout = ({ cat }) => {
  return (
    <div>
      <div className="mt-2 py-2w px-4 sm:px-6 lg:pb-28 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-5 lg:grid-rows-3 overflow-x-scroll overflow-y-hidden">
            <div className="flex flex-no-wrap overflow-x-scroll overflow-y-hidden">
              {cat.map(elem => (
                <div
                  key={elem.node.id}
                  className="flex-none max-w-xs mr-4 mb-3"
                >
                  <div className="h-full flex flex-col justify-between rounded-lg shadow-lg overflow-hidden">
                    <Link to={elem.node.fields.slug} className="flex-shrink-0">
                      <img
                        className="h-48 w-full object-cover"
                        src={elem.node.frontmatter.featuredImage.publicURL}
                        alt=""
                      />
                    </Link>
                    <div className="bg-white p-6">
                      <div className="">
                        <p
                          className={`text-sm leading-5 font-bold text-${elem.node.frontmatter.category_color}-500`}
                        >
                          {elem.node.frontmatter.category}
                        </p>
                        <Link to={elem.node.fields.slug} className="block">
                          <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                            {elem.node.frontmatter.title}
                          </h3>
                          <p className="mt-0.5 text-sm leading-6 text-gray-500">
                            {elem.node.frontmatter.course_author}
                          </p>
                          <div className="flex items-center">
                            <span className="font-bold text-base text-yellow-500 pr-1">
                              {elem.node.frontmatter.rating}
                            </span>
                            <Rating frontmatter={elem.node.frontmatter} />
                            <span className="ml-1 text-sm text-gray-400">
                              {elem.node.frontmatter.rating_count !== 0
                                ? `(` + elem.node.frontmatter.rating_count + `)`
                                : ``}
                            </span>
                          </div>
                          <p className="font-semibold text-base leading-6 text-gray-800">
                            {elem.node.frontmatter.price !== 0
                              ? `$` + elem.node.frontmatter.price
                              : `Free`}
                          </p>
                          <p
                            className={
                              elem.node.frontmatter.bestseller
                                ? "mt-1 px-2 py-1 bg-yellow-200 text-yellow-800 text-sm font-semibold inline-flex rounded-md"
                                : "hidden"
                            }
                          >
                            Bestseller
                          </p>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

CoursesArticlesLayout.propTypes = {
  cat: PropTypes.array.isRequired,
}
export default CoursesArticlesLayout
