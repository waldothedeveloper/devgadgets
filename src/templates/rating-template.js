import React from "react"
import ReactStars from "react-stars"
import PropTypes from "prop-types"

//
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

Rating.propTypes = {
  frontmatter: PropTypes.object,
}
export default Rating
