import React from "react"
import Layout from "../components/layout"
import Nav from "./Menu/Nav"
import SEO from "../components/seo"
import Hero from "./hero-section/Hero"
import JoinNewsletter from "./Newsletter/JoinNewsletter"
import Features from "./features-section/Features"
import FeaturedGadgets from "./Gadgets/Featured-Gadgets"
// import Banner from "./announcements/Banner"
// import GiveAways from "./GiveAways/GiveAways"
import FeaturedBooks from "./Books/FeaturedBooks"
// import FeaturedOnlineCourses from "./courses/Featured-Online-Courses"
import Footer from "./Footer/Footer"

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
        <FeaturedBooks />
        {/* This is for future marketing campaigns */}
        {/* <GiveAways /> */}
      </Layout>

      <footer>
        <Footer />
      </footer>
    </>
  )
}
export default IndexPage
