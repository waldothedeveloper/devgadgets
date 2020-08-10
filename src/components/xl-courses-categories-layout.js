import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Rating from "../templates/rating-template"

//
const XlCoursesCategories = ({ cat, xlCat }) => {
  const [data, setData] = React.useState([])
  console.log("data: ", data)

  React.useEffect(() => {
    const filtData = cat
      .filter(elem => elem.cat === xlCat)
      .map(elem => elem.data)
      .flat()
    setData(filtData)
  }, [cat, xlCat])

  //
  return (
    <div className="relative pt-6 pb-20 px-4 sm:px-6 lg:pb-28 lg:px-8">
      <div className="relative max-w-7xl mx-auto">
        <div className="grid gap-5 max-w-lg mx-auto md:grid-cols-3 md:max-w-none">
          {data.map(elem => {
            return (
              <div
                key={elem.node.id}
                className="flex flex-col rounded-lg shadow-lg overflow-hidden"
              >
                <div className="flex-shrink-0">
                  <Link className="flex-1" to={elem.node.fields.slug}>
                    <img
                      className="h-48 w-full object-cover"
                      src={elem.node.frontmatter.featuredImage.publicURL}
                      alt="featured image of the course"
                    />
                  </Link>
                </div>

                <Link
                  className="flex-1 bg-white p-6 flex flex-col justify-between"
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
                            ? `(` + elem.node.frontmatter.rating_count + `)`
                            : ``}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="">
                      <p className="font-semibold text-base leading-6 text-gray-800">
                        {elem.node.frontmatter.price !== 0
                          ? `$` + elem.node.frontmatter.price
                          : `Free`}
                      </p>
                      <p
                        className={
                          elem.node.frontmatter.bestseller
                            ? "-ml-1 mt-1 px-2 py-1 bg-yellow-200 text-yellow-800 text-sm font-semibold inline-flex rounded-md"
                            : "hidden"
                        }
                      >
                        Bestseller
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

XlCoursesCategories.propTypes = {
  cat: PropTypes.array.isRequired,
  xlCat: PropTypes.string.isRequired,
}
export default XlCoursesCategories
