import { MDXProvider } from "@mdx-js/react"
import React from "react"
import Carousel from "./src/templates/carousel"

//
const shortcodes = {
  Carousel,
}
export const wrapRootElement = ({ element }) => {
  return <MDXProvider components={shortcodes}>{element}</MDXProvider>
}
