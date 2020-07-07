import React from "react"

const ImageCarousel = ({ frontmatter }) => {
  return (
    <div className="mt-12">
      <img
        // style={{ height: 638 }}
        className="w-full h-full md:max-h-96 md:object-cover"
        src={frontmatter.featuredImage.publicURL}
        alt="mice"
      />
    </div>
  )
}

export default ImageCarousel
