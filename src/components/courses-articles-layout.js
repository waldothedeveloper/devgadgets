import React from "react"
import Rating from "../templates/rating-template"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import DevGadgetsChoice from "./devgadgets-choice"

// Mobile view of articles
const CoursesArticlesLayout = ({ cat }) => {
  return (
    <div>
      <div className="mt-2 py-2w px-4 sm:px-6 lg:pb-28 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-5 lg:grid-rows-3 overflow-x-scroll overflow-y-hidden">
            <div className="flex flex-no-wrap overflow-x-scroll overflow-y-hidden">
              {cat.length === 0 ? (
                <div className="relative">
                  <img
                    className="h-72 w-full object-cover"
                    src="https://images.unsplash.com/photo-1470145318698-cb03732f5ddf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    alt="featured image of the course"
                  />

                  <h3
                    className="text-3xl font-semibold text-gray-200 opacity-75"
                    style={{
                      position: `absolute`,
                      top: `50%`,
                      left: `50%`,
                      transform: `translate(-50%, -50%)`,
                    }}
                  >
                    Coming soon
                  </h3>
                </div>
              ) : (
                cat.map(elem => (
                  <div
                    key={elem.node.id}
                    className="flex-none max-w-xs mr-4 mb-3"
                  >
                    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden h-full">
                      <div className="flex-shrink-0">
                        <Link className="flex-1" to={elem.node.fields.slug}>
                          {elem.node.frontmatter &&
                          elem.node.frontmatter.featuredImage.publicURL ? (
                            <img
                              className="h-48 w-full object-cover object-center"
                              src={
                                elem.node.frontmatter.featuredImage.publicURL
                              }
                              alt="gadget"
                            />
                          ) : (
                            <div className="animate-pulse h-48 w-full object-cover object-center bg-gray-400" />
                          )}
                        </Link>
                      </div>

                      <Link
                        className="flex-1 bg-white p-6 flex flex-col"
                        to={elem.node.fields.slug}
                      >
                        <div className="flex-1">
                          <p className="text-sm leading-5 font-medium text-teal-600">
                            {elem.node.frontmatter.category}
                          </p>
                          <div className="block">
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
                                  ? `(` +
                                    elem.node.frontmatter.rating_count +
                                    `)`
                                  : ``}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-6 flex flex-col">
                          <p className="self-start font-semibold text-base leading-6 text-gray-800">
                            {elem.node.frontmatter.price !== 0
                              ? `$` + elem.node.frontmatter.price
                              : `Free`}
                          </p>
                          <div className="flex items-center mt-1">
                            <p
                              className={
                                elem.node.frontmatter.bestseller
                                  ? "-ml-1 px-2 mr-2 py-1 bg-yellow-200 text-yellow-800 text-sm font-semibold mb-2 rounded-md"
                                  : "hidden"
                              }
                            >
                              Bestseller
                            </p>
                            <DevGadgetsChoice
                              devgadgets_choice={
                                elem.node.frontmatter.devgadgets_choice
                              }
                            />
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                ))
              )}
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
