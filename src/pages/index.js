import React from "react"
import Layout from "../components/layout"
import Nav from "./Menu/Nav"
import SEO from "../components/seo"
import Hero from "./hero-section/Hero"
import JoinNewsletter from "./Newsletter/JoinNewsletter"
import Features from "./features-section/Features"
import FeaturedGadgets from "./Gadgets/Featured-Gadgets"
import Banner from "./Announcements/Banner"
import GiveAways from "./GiveAways/GiveAways"
import FeaturedBooks from "./Books/FeaturedBooks"
import FeaturedOnlineCourses from "./Online-Courses/Featured-Online-Courses"
import LifestyleBanner from "./Lifestyle/LifestyleBanner"
import ContactForm from "./Contact/contact-form"
import Footer from "./Footer/Footer"

const IndexPage = () => (
  <>
    <Nav />
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

export default IndexPage
