import React from "react"
import Sections from "../../components/sections.js"
import PropTypes from "prop-types"
//
const AllLifeStyle = props => {
  return <Sections section={props.location.state.section} />
}
AllLifeStyle.propTypes = {
  location: PropTypes.object,
}
export default AllLifeStyle
