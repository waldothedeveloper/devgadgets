import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"
import { PostPageLayout } from "../components/posts-page-layout"
import Nav from "../pages/Menu/Nav"

export default ({ data }) => {
  const { frontmatter, body } = data.mdx
  return (
    <>
      <Nav />
      <PostPageLayout>
        <div className="mt-24">
          <h1>{frontmatter.title}</h1>
          <p>{frontmatter.date}</p>
          <MDXRenderer>{body}</MDXRenderer>
        </div>
      </PostPageLayout>
    </>
  )
}

export const query = graphql`
  query PostsBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        date(formatString: "YYYY MMMM Do")
      }
    }
  }
`
