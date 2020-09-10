import React from "react"
import PropTypes from "prop-types"

//
const BlogFeaturedImage = ({ frontmatter, image }) => {
  return (
    <div className="mt-6 relative">
      <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
        <figure>
          <div className="pb-7/12 lg:pb-0">
            <img
              src={
                image && image.secure_url
                  ? image.secure_url
                  : `http://placehold.jp/24/cccccc/ffffff/250x50.png?text=image_not_found`
              }
              alt={frontmatter.image_captions}
              className="rounded-lg shadow-lg object-cover object-center absolute inset-0 w-full h-full lg:static lg:h-auto"
            />
          </div>
          <figcaption className="flex mt-3 text-sm text-cool-gray-500">
            <svg
              className="flex-none w-5 h-5 mr-2 text-cool-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
                clipRule="evenodd"
              />
            </svg>
            {frontmatter.image_captions}
          </figcaption>
        </figure>
      </div>
    </div>
  )
}

//
BlogFeaturedImage.propTypes = {
  frontmatter: PropTypes.object,
  image: PropTypes.object,
}
export default BlogFeaturedImage
