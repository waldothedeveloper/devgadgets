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
      size={16}
      color2={"#ECC94B"}
    />
  )
}

Rating.propTypes = {
  frontmatter: PropTypes.object,
}
export default Rating
