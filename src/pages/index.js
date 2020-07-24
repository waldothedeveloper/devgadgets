import React from "react"
import Layout from "../components/layout"
import Nav from "./Menu/Nav"
import SEO from "../components/seo"
import Hero from "./hero-section/Hero"
import JoinNewsletter from "./Newsletter/JoinNewsletter"
import Features from "./features-section/Features"
import FeaturedGadgets from "./gadgets/Featured-Gadgets"
import Banner from "./announcements/Banner"
import GiveAways from "./GiveAways/GiveAways"
import FeaturedBooks from "./books/FeaturedBooks"
import FeaturedOnlineCourses from "./courses/Featured-Online-Courses"
import LifestyleBanner from "./lifestyle/LifestyleBanner"
import ContactForm from "./Contact/contact-form"
import Footer from "./Footer/Footer"

const IndexPage = () => {
  const [open, setOpen] = React.useState(true)

  const handleBanner = () => {
    setOpen(false)
  }

  return (
    <>
      <Nav open={open} handleBanner={handleBanner} />
      <Layout>
        <SEO title="Dev Gadgets is the #1 gadgets resource blog for developers and technology enthusiasts" />
        <Banner />
        <Hero />
        <Features />
        <JoinNewsletter />
        <FeaturedGadgets />
        <GiveAways />
        <FeaturedOnlineCourses />
        <LifestyleBanner />
        <FeaturedBooks />
      </Layout>
      <ContactForm />
      <Footer />
    </>
  )
}
export default IndexPage
