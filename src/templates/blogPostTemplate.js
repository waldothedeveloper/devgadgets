import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
// import MDXRenderer from "gatsby-plugin-mdx"
import Nav from "../pages/Menu/Nav"
import TitleAndAuthorTemplate from "./title-and-author"
import ImageCarousel from "./image-carousel"
import Whatsup from "./Whatsup"
//
export default ({ data }) => {
  console.log("data: ", data)
  const { frontmatter, body, fields } = data.mdx
  const shortcodes = { Whatsup }
  return (
    <>
      <div className=" mt-12 mx-6 md:mx-24 md:mt-24">
        <MDXProvider components={shortcodes}>
          <Nav />
          <TitleAndAuthorTemplate frontmatter={frontmatter} fields={fields} />
          <ImageCarousel frontmatter={frontmatter} />
          {/* <MDXRenderer>{body}</MDXRenderer> */}
        </MDXProvider>
      </div>
    </>
  )
}

export const query = graphql`
  query BlogPostQuery($slug: String) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      body
      frontmatter {
        title
        last_updated(formatString: "YYYY MMMM Do")
        author
        article_category
        category
        category_color
        featured
        featuredImage {
          publicURL
        }
        author_image {
          publicURL
        }
      }
      fields {
        slug
        readingTime {
          text
        }
      }
    }
  }
`
