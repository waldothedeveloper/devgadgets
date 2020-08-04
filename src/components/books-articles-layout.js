import React from "react"
import PropTypes from "prop-types"
import { useGetAllBookArticles } from "../hooks/use-get-all-book-articles"
import { Link } from "gatsby"

//
const BookArticlesLayout = ({ selectCategory }) => {
  const [filteredArticles, setFilteredArticles] = React.useState([])
  const data = useGetAllBookArticles()

  React.useEffect(() => {
    if (selectCategory !== "All") {
      const filt = data.filter(
        elem => elem.node.frontmatter.category === selectCategory
      )
      setFilteredArticles(filt)
    } else {
      setFilteredArticles(data)
    }
  }, [selectCategory, data])

  return (
    <div>
      <div className="mb-20 lg:mb-28 md:pl-3 lg:pl-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-3 max-w-3xl mx-auto lg:max-w-none">
          {filteredArticles.map(elem => (
            <div
              key={elem.node.id}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden"
            >
              <Link to={elem.node.fields.slug}>
                <div className="h-64">
                  <img
                    className="w-full h-full object-cover"
                    src={elem.node.frontmatter.featuredImage.publicURL}
                    alt="books"
                  />
                </div>
              </Link>
              <div className="flex-1 bg-white p-4 flex flex-col justify-evenly">
                <Link to={elem.node.fields.slug} className="block text-left">
                  <div className="flex">
                    <span
                      className={`inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium leading-5 bg-${elem.node.frontmatter.category_color}-100 text-${elem.node.frontmatter.category_color}-800`}
                    >
                      {elem.node.frontmatter.category}
                    </span>
                  </div>
                  <div className="flex-shrink-0">
                    <h3 className="mt-2 text-md font-semibold text-gray-900">
                      {elem.node.frontmatter.title}
                    </h3>
                  </div>
                </Link>
                <p className="text-sm mt-0.5 text-gray-400 truncate">
                  {elem.node.frontmatter.book_author}
                </p>
                <p className="font-medium text-gray-500 text-sm">
                  ${elem.node.frontmatter.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

BookArticlesLayout.propTypes = {
  data: PropTypes.array,
  selectCategory: PropTypes.string.isRequired,
}

export default BookArticlesLayout
