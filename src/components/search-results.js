import { Link } from "gatsby"
import React from "react"
import { connectHits } from "react-instantsearch-dom"
import PropTypes from "prop-types"
import Transition from "./Transition"
import "../css/customscrollbar.css"

//
const Hits = ({ hits }) =>
  hits.length === 20 ? null : hits.length === 0 ? (
    <Transition
      show={true}
      enter="transition ease-out duration-500"
      enterFrom="opacity-0 translate-y-1"
      enterTo="opacity-100 translate-y-0"
      leave="transition ease-in duration-150"
      leaveFrom="opacity-100 translate-y-0"
      leaveTo="opacity-0 translate-y-1"
    >
      <div className="absolute w-screen max-w-xl mt-3 px-2 sm:px-0">
        <div className="rounded-lg shadow-lg">
          <div className="rounded-lg shadow-xs overflow-hidden">
            <div className="z-50 relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
              <div>
                <ul className="space-y-6 max-w-lg">
                  <div className="-m-3 p-3 flex rounded-lg transition ease-in-out duration-150 sm:space-x-8">
                    <div className="-m-3 p-3 block space-y-1 rounded-md transition ease-in-out duration-150">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <svg
                            className="h-5 w-5 text-red-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <h4 className="px-2 text-base leading-6 font-medium text-red-700">
                          Sorry, no results found.
                        </h4>
                      </div>
                    </div>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  ) : (
    <Transition
      show={true}
      enter="transition ease-out duration-500"
      enterFrom="opacity-0 translate-y-1"
      enterTo="opacity-100 translate-y-0"
      leave="transition ease-in duration-150"
      leaveFrom="opacity-100 translate-y-0"
      leaveTo="opacity-0 translate-y-1"
    >
      <div className="absolute w-screen md:max-w-lg transform md:-translate-x-3/12 lg:translate-x-5/12 lg:max-w-xl md:-ml-56 mt-3 px-2 sm:px-0">
        <div className="rounded-lg shadow-lg">
          <div className="rounded-lg shadow-xs overflow-hidden">
            <div className="z-50 relative bg-white px-5 py-6">
              <ul
                id="scrolling_wrapper"
                className="space-y-6 overflow-x-hidden overflow-y-scroll max-h-72"
              >
                {hits.map(hit => (
                  <div
                    key={hit.objectID}
                    className="-m-3 p-3 block space-y-1 rounded-lg transition ease-in-out duration-150"
                  >
                    <li>
                      <Link
                        to={hit.slug}
                        className="-m-2 p-2 flex rounded-lg transition ease-in-out duration-150 sm:space-x-8"
                      >
                        <div className="hidden sm:block flex-shrink-0">
                          <img
                            className="w-32 h-20 object-cover rounded-md"
                            src={hit.featuredImage.publicURL}
                            alt={hit.image_captions || ""}
                          />
                        </div>
                        <div className="space-y-1 min-w-0 flex-1">
                          <h4 className="text-base leading-6 font-medium text-gray-900 truncate">
                            {hit.title || hit.instructor_name}
                          </h4>
                          <p className="text-xs">
                            {hit.book_title ||
                              hit.course_title ||
                              hit.gadget_name}
                          </p>
                          <p className="text-sm leading-5 text-gray-500">
                            {(hit && hit.about && hit.about.substring(0, 82)) ||
                              (hit &&
                                hit.the_gist &&
                                hit.the_gist.substring(0, 82)) ||
                              ""}
                            ...
                          </p>
                        </div>
                      </Link>
                    </li>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  )

Hits.propTypes = {
  hits: PropTypes.array.isRequired,
}

export const CustomHits = connectHits(Hits)
