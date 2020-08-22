import { Link } from "gatsby"
import React from "react"
import { connectHits } from "react-instantsearch-dom"
import PropTypes from "prop-types"
import MobileSubMenus from "../pages/Menu/mobileSubMenu"

const SearchResultsMobile = ({ hits }) => {
  return (
    <>
      {hits.length === 20 ? (
        <MobileSubMenus hits={hits} />
      ) : (
        <ul
          style={{ height: "calc(100vh - 1rem)" }}
          className="mt-12 space-y-6 overflow-x-hidden overflow-y-scroll pb-72"
        >
          {hits.map(hit => (
            <div
              key={hit.objectID}
              className="p-3 block space-y-2 transition ease-in-out duration-150"
            >
              <li>
                <Link to={hit.slug}>
                  <div className="flex">
                    <img
                      className="w-20 h-20 object-cover rounded-md"
                      src={hit.featuredImage.publicURL}
                      alt={hit.image_captions || ""}
                    />
                    <div className="w-auto pl-3">
                      <h4 className="text-base leading-6 font-medium text-gray-900">
                        {hit.title ||
                          hit.instructor_name ||
                          hit.book_title ||
                          hit.course_title ||
                          hit.gadget_name}
                      </h4>

                      <p className="text-sm leading-5 text-gray-500">
                        {(hit && hit.about && hit.about.substring(0, 55)) ||
                          (hit &&
                            hit.the_gist &&
                            hit.the_gist.substring(0, 55)) ||
                          ""}
                        ...
                      </p>
                    </div>
                  </div>
                </Link>
              </li>
            </div>
          ))}
        </ul>
      )}
      {/* <MobileSubMenus hits={hits} /> */}
    </>
  )
}

SearchResultsMobile.propTypes = {
  hits: PropTypes.array.isRequired,
}
export const CustomMobileHits = connectHits(SearchResultsMobile)
