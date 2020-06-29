import React from "react"
import { Link } from "gatsby"
import { useGetFeaturedBooks } from "../../hooks/use-get-featured-books"

const FeaturedBooks = () => {
  const data = useGetFeaturedBooks()
  return (
    <div className="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="relative max-w-lg mx-auto lg:max-w-7xl">
        <div>
          <h2 className="text-3xl leading-9 tracking-tight font-extrabold sm:text-4xl sm:leading-10 text-pink-500">
            Books worth reading
          </h2>
          <p className="mt-3 text-xl leading-7 text-gray-500 sm:mt-4 max-w-2xl">
            The following are a{" "}
            <span className="underline text-pink-400 font-semibold">
              must-read
            </span>{" "}
            selection of books that every programmer should read. Don't pay
            attention to the language it is was written, they really will make
            you a better developer.
          </p>
        </div>
        <div className="mt-12 grid gap-16 border-t-2 border-gray-100 pt-12 lg:grid-cols-3 lg:col-gap-5 lg:row-gap-12">
          {data.map(content => {
            return (
              <div key={content.node.id}>
                <div>
                  <Link to={content.node.fields.slug} className="inline-block">
                    <span
                      className={`inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium leading-5 bg-${content.node.frontmatter.category_color}-100 text-${content.node.frontmatter.category_color}-800`}
                    >
                      {content.node.frontmatter.category}
                    </span>
                  </Link>
                </div>
                <Link to={content.node.fields.slug} className="block">
                  <h3 className="mt-4 text-xl leading-7 font-semibold text-gray-900">
                    {content.node.frontmatter.title}
                  </h3>
                  <p className="mt-3 text-base leading-6 text-gray-500">
                    {content.node.excerpt}
                  </p>
                </Link>
                <div className="mt-6 flex items-center">
                  <div className="">
                    <p className="text-sm leading-5 font-medium text-gray-900">
                      Book Author(s): {content.node.frontmatter.book_author}
                    </p>
                    <div className="flex text-sm leading-5 text-gray-500">
                      <time dateTime="2020-03-16">
                        {content.node.frontmatter.date}
                      </time>
                      <span className="mx-1">&middot;</span>
                      <span>{content.node.fields.readingTime.text}</span>
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

export default FeaturedBooks
