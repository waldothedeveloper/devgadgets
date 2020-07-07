import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import image404 from "../images/image404.svg"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div
      style={{
        backgroundImage: `url(${image404})`,
        height: "100vh",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="flex justify-center"
    >
      <div className="flex flex-col items-center justify-center">
        <p className="text-gray-800 font-bold text-6xl text-center">
          404 <br /> Page not found.
        </p>
        <Link
          to="/"
          className="mx-6 flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-gray-50 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
        >
          BACK HOME
        </Link>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
