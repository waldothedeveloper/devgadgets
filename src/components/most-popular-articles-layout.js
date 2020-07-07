import React from "react"
import { Link } from "gatsby"
import "../css/hidescrollbar.css"

const MostPopularArticlesLayout = ({ data }) => {
  console.log("data: ", data)
  return (
    <div className="pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0"></div>
      <div className="">
        <div className="text-left">
          <h2 className="text-3xl leading-9 tracking-tight font-extrabold text-gray-800 sm:text-4xl sm:leading-10">
            Most Popular{" "}
            <span role="img" alt="celebrate" aria-labelledby="celebrate">
              🎉
            </span>
          </h2>
          <p className="mt-3 max-w-2xl text-xl leading-7 text-gray-700 sm:mt-4">
            Loved by thousands of devs, check it out
          </p>
        </div>
        <div
          id="scrolling_wrapper"
          className="md:mt-12 flex flex-no-wrap overflow-x-scroll md:grid gap-5 md:max-w-lg md:mx-auto lg:grid-cols-3 lg:max-w-none"
        >
          {data.map(elem => {
            return (
              <div
                key={elem.node.id}
                className="flex flex-none max-w-xs mx-2 my-6 md:max-w-none md:m-0"
              >
                <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                  <div className="flex-shrink-0">
                    <img
                      className="h-48 w-full object-cover"
                      src={elem.node.frontmatter.featuredImage.publicURL}
                      alt="gadget"
                    />
                  </div>
                  <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                    <div className="flex-1">
                      <div className="text-sm leading-5 font-medium text-teal-600">
                        <div>{elem.node.frontmatter.category}</div>
                      </div>
                      <Link
                        to={elem.node.fields.slug}
                        className="block text-left"
                      >
                        <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                          {elem.node.frontmatter.title}
                        </h3>
                        <p className="mt-3 text-base leading-6 text-gray-500">
                          {elem.node.excerpt}
                        </p>
                      </Link>
                    </div>
                    <div className="mt-6 flex items-center">
                      <div className="flex-shrink-0">
                        <button>
                          <img
                            className="h-10 w-10 rounded-full"
                            src={elem.node.frontmatter.author_image.publicURL}
                            alt=""
                          />
                        </button>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm leading-5 font-medium text-gray-900">
                          <button className="hover:underline">
                            {elem.node.frontmatter.author}
                          </button>
                        </p>
                        <div className="flex text-sm leading-5 text-gray-500">
                          <time dateTime="2020-03-16">
                            {elem.node.frontmatter.date}
                          </time>
                          <span className="mx-1">&middot;</span>
                          <span>{elem.node.fields.readingTime.text}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default MostPopularArticlesLayout
