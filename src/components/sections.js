import React from "react"
import Nav from "../pages/menu/Nav"
import SectionGadgetsLayout from "./sections-gadgets-layout"
import BooksSectionLayout from "./books-section-layout"
import CoursesSectionLayout from "./courses-section-layout"
import Footer from "../pages/footer/Footer"
import PropTypes from "prop-types"
//
const Sections = ({ section }) => {
  // console.log("section on Sections: ", section)
  const [category, setCategory] = React.useState({})

  React.useEffect(() => {
    if (section && section.pathname === "/books/all") {
      setCategory({
        category: "books",
        subCategory: section.state ? section.state.subCategory : "",
      })
    }

    if (section && section.pathname === "/gadgets/all") {
      setCategory({
        category: "gadgets",
        subCategory: section.state ? section.state.subCategory : "",
      })
    }
  }, [section])

  switch (category.category) {
    case "gadgets":
      return (
        <>
          <Nav />
          <SectionGadgetsLayout category={category} />
          <Footer />
        </>
      )
    case "books":
      return (
        <>
          <Nav />
          <BooksSectionLayout category={category} />
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
