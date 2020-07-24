import React from "react"
import { Link } from "gatsby"
import "../css/hidescrollbar.css"

const ArticlesLayout = ({ data, articleCat }) => {
  const [filteredArticles, setFilteredArticles] = React.useState([])

  React.useEffect(() => {
    if (articleCat !== "All") {
      const newData = data.filter(
        elem => elem.node.frontmatter.category === articleCat
      )
      setFilteredArticles(newData)
    }
  }, [data, articleCat])

  return (
    <>
      {articleCat === "All" ? (
        <div className="pb-20 px-4 sm:px-6 lg:pb-28 lg:px-8">
          <div className="">
            <div
              id="scrolling_wrapper"
              style={{ gridAutoRows: "1fr" }}
              className="grid gap-3 max-w-lg mx-auto md:gap-5 grid-cols-2 md:grid-cols-3 lg:max-w-none"
            >
              {data.map(elem => {
                return (
                  <div key={elem.node.id} className="">
                    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                      <div className="flex-shrink-0">
                        <img
                          className="h-48 w-full object-cover object-center"
                          src={elem.node.frontmatter.featuredImage.publicURL}
                          alt="gadget"
                        />
                      </div>
                      <div className="flex-1 bg-white p-5 md:p-6 flex flex-col justify-between">
                        <div className="flex-1">
                          <div>
                            <span
                              className={`inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium leading-5 bg-${elem.node.frontmatter.category_color}-100 text-${elem.node.frontmatter.category_color}-800`}
                            >
                              {elem.node.frontmatter.category}
                            </span>
                          </div>

                          <Link
                            to={elem.node.fields.slug}
                            className="block text-left"
                          >
                            <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                              {elem.node.frontmatter.title}
                            </h3>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      ) : (
        <div className="pb-20 px-4 sm:px-6 lg:pb-28 lg:px-8">
          <div className="">
            <div
              id="scrolling_wrapper"
              className="flex flex-no-wrap overflow-x-scroll lg:grid gap-5 lg:grid-cols-3 lg:max-w-none"
            >
              {filteredArticles.map(elem => {
                return (
                  <div
                    key={elem.node.id}
                    className="flex flex-none max-w-xs mx-2 my-6 lg:max-w-none lg:m-0"
                  >
                    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                      <div className="flex-shrink-0">
                        <img
                          className="h-48 w-full object-cover object-center"
                          src={elem.node.frontmatter.featuredImage.publicURL}
                          alt="gadget"
                        />
                      </div>
                      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                        <div className="flex-1">
                          <div>
                            <span
                              className={`inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium leading-5 bg-${elem.node.frontmatter.category_color}-100 text-${elem.node.frontmatter.category_color}-800`}
                            >
                              {elem.node.frontmatter.category}
                            </span>
                          </div>

                          <Link
                            to={elem.node.fields.slug}
                            className="block text-left"
                          >
                            <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                              {elem.node.frontmatter.title}
                            </h3>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ArticlesLayout
