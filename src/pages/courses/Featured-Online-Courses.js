import React from "react"
import { Link } from "gatsby"
import { useGetFeaturedOnlineCourses } from "../../hooks/use-get-featured-online-courses"
import Rating from "../../templates/rating-template"
import DevGadgetsChoice from "../../components/devgadgets-choice"

//
const FeaturedOnlineCourses = () => {
  const data = useGetFeaturedOnlineCourses()

  return (
    <div className="bg-teal-700 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="relative mx-auto lg:max-w-7xl">
        <div>
          <h2 className="text-3xl leading-9 tracking-tight font-extrabold sm:text-4xl sm:leading-10 text-white">
            Online Courses
          </h2>
          <p className="mt-3 text-xl leading-7 text-gray-300 sm:mt-4 max-w-2xl">
            Everyone has a different learning approach, mine is a combination of
            the visual learner with the one of learn by example, but I also like
            to follow along online posts.
          </p>
        </div>
        <div className="mt-12 grid gap-3 pt-12 md:grid-cols-2 lg:grid-cols-3">
          {data.map(elem => {
            return (
              <div
                key={elem.node.id}
                className="flex-none max-w-xl md:max-w-none mb-3"
              >
                <div className="flex flex-col rounded-lg shadow-lg overflow-hidden h-full">
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
                              ? `(` + elem.node.frontmatter.rating_count + `)`
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
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default FeaturedOnlineCourses
