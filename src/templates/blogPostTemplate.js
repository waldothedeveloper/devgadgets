/* eslint-disable */
import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Nav from "../pages/Menu/Nav"
import TitleAndAuthorTemplate from "./title-and-author"
import TheGist from "./the-gist"
import Footer from "../pages/Footer/Footer"
import ShareArticle from "./share-article-template"
import BuyIt from "./buy-it"
import SEO from "../components/seo"
import JoinNewsletter from "../pages/Newsletter/JoinNewsletter"

//
export default ({ data, location }) => {
  const image = data.cloudinaryMedia
  const { frontmatter, body, fields } = data.mdx

  //! TODO: REMEMBER TO CREATE KEYWORDS FOR EVERY MDX ARTICLE
  return (
    <>
      <SEO
        title={frontmatter.title}
        description={frontmatter.the_gist}
        image={image}
        pathname={location.pathname}
        author={frontmatter.author}
      />
      <Nav />
      <div className="">
        <div className="mt-12 mx-3 md:mx-32 lg:mx-64 lg:mt-24 xl:mx-72">
          <TitleAndAuthorTemplate frontmatter={frontmatter} fields={fields} />
        </div>
        <div className="mt-12 mx-6 md:mx-32 lg:mx-64 xl:mx-72">
          <TheGist frontmatter={frontmatter} image={image} />
          <MDXRenderer>{body}</MDXRenderer>
          <BuyIt frontmatter={frontmatter} />
          <JoinNewsletter />
          <ShareArticle frontmatter={frontmatter} fields={fields} />
        </div>
        <Footer />
      </div>
    </>
  )
}

//
export const query = graphql`
  query BlogPostQuery($slug: String, $cloudinaryImage: String) {
    cloudinaryMedia(public_id: { eq: $cloudinaryImage }) {
      secure_url
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      body
      frontmatter {
        title
        last_updated(formatString: "YYYY MMMM Do")
        author
        article_category
        category
        the_gist
        amazon_choice
        ratings_count
        image_captions
        rating
        price
        down_the_line
        buy_link
        category_color
        featured
        featuredImage {
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
