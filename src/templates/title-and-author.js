import React from "react"

const TitleAndAuthorTemplate = ({ frontmatter, fields }) => {
  return (
    <div className="flex flex-col justify-center md:flex-row mx-6 mt-24 md:my-32 md:mx-24">
      {/* picture of author */}
      <div className="mt-6 flex items-center md:w-2/4">
        <div className="flex-shrink-0">
          <button>
            <img
              className="h-10 w-10 rounded-full"
              src={frontmatter.author_image.publicURL}
              alt="Waldo Lavaut"
            />
          </button>
        </div>
        <div className="ml-3">
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
        <h1 className="mt-3 font-bold text-2xl md:text-4xl">
          {frontmatter.title}
        </h1>
      </div>
    </div>
  )
}

export default TitleAndAuthorTemplate
