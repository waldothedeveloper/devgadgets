import React from "react"
import Layout from "../components/layout"
import Nav from "./menu/Nav"
import SEO from "../components/seo"
import Hero from "./hero-section/Hero"
import JoinNewsletter from "./newsletter/JoinNewsletter"
import Features from "./features-section/Features"
import FeaturedGadgets from "./gadgets/Featured-Gadgets"
// import Banner from "./announcements/Banner"
// import GiveAways from "./GiveAways/GiveAways"
import FeaturedBooks from "./books/FeaturedBooks"
// import FeaturedOnlineCourses from "./courses/Featured-Online-Courses"
// import HolidayDash from "./holidays/holidayDash"
import AudibleCallOut from "./audible/audible-callout"
import Footer from "./footer/Footer"

const IndexPage = () => {
  const [open, setOpen] = React.useState(true)

  const handleBanner = () => {
    setOpen(false)
  }

  return (
    <>
      <Nav role="navigation" open={open} handleBanner={handleBanner} />

      <Layout>
        <SEO title="Dev Gadgets is the #1 gadgets resource blog for developers and technology enthusiasts" />
        {/* <Banner /> */}
        {/* This is a temporary dummy div until we display announcements */}
        <div className="mt-24" />
        <Hero />
        <Features />
        <JoinNewsletter />
        <FeaturedGadgets />
        {/* <FeaturedOnlineCourses /> */}
        {/* <HolidayDash /> */}
        <FeaturedBooks />
        {/* This is for future marketing campaigns */}
        {/* <GiveAways /> */}
        <AudibleCallOut />
      </Layout>

      <footer>
        <Footer />
      </footer>
    </>
  )
}
export default IndexPage
