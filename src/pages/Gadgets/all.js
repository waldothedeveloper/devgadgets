import React from "react"
import Sections from "../../components/sections"
import PropTypes from "prop-types"
//
const AllGadgets = ({ location }) => <Sections section={location.state} />

AllGadgets.propTypes = {
  location: PropTypes.object,
}
export default AllGadgets
