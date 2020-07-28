import React from "react"
import SectionLayout from "../../components/sections-layout"
//
const AllGadgets = ({ location }) => {
  // console.log("location: ", location.state)

  return <SectionLayout section={location.state} />
}

export default AllGadgets
