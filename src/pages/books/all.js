import React from "react"
import Sections from "../../components/sections.js"
import PropTypes from "prop-types"
//
const AllBooks = ({ location }) => <Sections section={location} />

AllBooks.propTypes = {
  location: PropTypes.object,
}
export default AllBooks
