import React from "react"
import Sections from "../../components/sections.js"
import PropTypes from "prop-types"
//
const AllCourses = props => <Sections section={props.location.state.section} />

AllCourses.propTypes = {
  location: PropTypes.object,
}
export default AllCourses
