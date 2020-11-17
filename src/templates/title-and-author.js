import React from "react"
import PropTypes from "prop-types"

//
const TitleAndAuthorTemplate = ({ frontmatter, fields, authorImage }) => {
  return (
    <div className="flex flex-col justify-center md:flex-row md:items-end mx-6 mt-24 md:my-32 md:mx-0">
      {/* picture of author */}
      <div className="mt-8 md:mt-0 flex flex-col md:w-3/4">
        <div className="flex-shrink-0">
          <img
            className="h-10 w-10 rounded-full"
            src={authorImage}
            alt="Waldo Lavaut"
          />
        </div>
        <div className="mb-2">
          <p className="text-sm leading-5 font-medium text-gray-900">
            <button className="hover:underline">{frontmatter.author}</button>
          </p>
          <div className="flex text-sm leading-5 text-gray-500">
            <time dateTime="2020-03-16">{frontmatter.last_updated}</time>
            <span className="mx-1">&middot;</span>
            <span>{fields.readingTime.text}</span>
          </div>
        </div>
      </div>
      {/* title and category */}
      <div className="order-first md:order-last">
        <div
          className={`inline-flex px-3 py-0.5 rounded-full text-sm font-medium leading-5 bg-${frontmatter.category_color}-100 text-${frontmatter.category_color}-800 md:mt-2 lg:mt-0`}
        >
          {frontmatter.category}
        </div>
        <h1 className="mt-3 font-semibold text-2xl md:text-3xl lg:text-4xl">
          {frontmatter.title}
        </h1>
      </div>
    </div>
  )
}

TitleAndAuthorTemplate.propTypes = {
  frontmatter: PropTypes.object,
  fields: PropTypes.object,
  authorImage: PropTypes.string.isRequired,
}
export default TitleAndAuthorTemplate
