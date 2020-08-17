import React from "react"
import { Link } from "gatsby"
import { useGetFeaturedBooks } from "../../hooks/use-get-featured-books"

const FeaturedBooks = () => {
  const data = useGetFeaturedBooks()
  return (
    <div className="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="relative mx-auto lg:max-w-7xl">
        <div>
          <h2 className="text-3xl leading-9 tracking-tight font-extrabold sm:text-4xl sm:leading-10 text-teal-500">
            Books worth reading
          </h2>
          <p className="mt-3 text-xl leading-7 sm:mt-4 max-w-2xl text-gray-400">
            The following are a{" "}
            <span className="text-orange-400 font-medium">must-read</span>{" "}
            selection of books that every programmer should read. Don&apos;t pay
            attention to the language it is was written, they really will make
            you a better developer.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-3 border-t-2 border-gray-100 pt-12 md:grid-cols-3 lg:grid-cols-6">
          {data.map(elem => (
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

export default FeaturedBooks
