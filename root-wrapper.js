import { MDXProvider } from "@mdx-js/react"
import React from "react"
import Response from "./src/templates/response"
import Carousel from "./src/templates/carousel"
import TechDetails from "./src/templates/tech-details"
import Question from "./src/templates/question"
//
const shortcodes = {
  Response,
  Carousel,
  TechDetails,
  Question,
}

export const wrapRootElement = ({ element }) => {
  return <MDXProvider components={shortcodes}>{element}</MDXProvider>
}
