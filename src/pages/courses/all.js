import React from "react"
import Sections from "../../components/sections.js"
import PropTypes from "prop-types"
//
const AllCourses = ({ location }) => <Sections section={location.state} />

AllCourses.propTypes = {
  location: PropTypes.object,
}
export default AllCourses
