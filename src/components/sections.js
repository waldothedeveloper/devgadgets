import React from "react"
import Nav from "../pages/Menu/Nav"
import SectionGadgetsLayout from "./sections-gadgets-layout"
import BooksSectionLayout from "./books-section-layout"
import CoursesSectionLayout from "./courses-section-layout"
import Footer from "../pages/Footer/Footer"
import PropTypes from "prop-types"
//
const Sections = ({ section }) => {
  const category = section.featCategory

  switch (category) {
    case "gadgets":
      return (
        <>
          <Nav />
          <SectionGadgetsLayout section={section} />
          <Footer />
        </>
      )
    case "books":
      return (
        <>
          <Nav />
          <BooksSectionLayout />
          <Footer />
        </>
      )
    case "courses":
      return (
        <>
          <Nav />
          <CoursesSectionLayout />
          <Footer />
        </>
      )
    default:
      return null
  }
}

Sections.propTypes = {
  section: PropTypes.object,
}

export default Sections
