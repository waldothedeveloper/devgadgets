import { MDXProvider } from "@mdx-js/react"
import React from "react"
import Whatsup from "./src/templates/whatsup"

const shortcodes = { Whatsup }

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={shortcodes}>{element}</MDXProvider>
)
