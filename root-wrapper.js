import { MDXProvider } from "@mdx-js/react"
import React from "react"
import Carousel from "./src/templates/carousel"
import BlogSecondaryImage from "./src/templates/blog-secondary-image"
//
const shortcodes = {
  Carousel,
  BlogSecondaryImage,
}
export const wrapRootElement = ({ element }) => {
  return <MDXProvider components={shortcodes}>{element}</MDXProvider>
}
