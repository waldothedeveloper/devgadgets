import React from "react"
import ReactStars from "react-stars"

const Rating = ({ frontmatter }) => {
  return (
    <ReactStars
      value={frontmatter.rating}
      edit={false}
      count={5}
      size={24}
      color2={"#ffd700"}
    />
  )
}

export default Rating
