/* eslint-disable */
import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Nav from "../pages/menu/Nav"
import TitleAndAuthorTemplate from "./title-and-author"
import Footer from "../pages/footer/Footer"
import ShareArticle from "./share-article-template"
import SEO from "../components/seo"
import JoinNewsletter from "../pages/newsletter/JoinNewsletter"

//
export default ({ data }) => {
  const authorImage =
    data && data.authorImage ? data.authorImage.secure_url : ""
  const image = data && data.cloudinaryMedia ? data.cloudinaryMedia : ""
  const carousel =
    data && data.allCloudinaryMedia ? data.allCloudinaryMedia.edges : []
  const { frontmatter, body, fields } = data.mdx

  //! TODO: REMEMBER TO CREATE KEYWORDS FOR EVERY MDX ARTICLE
  return (
    <>
      <SEO
        title={frontmatter.title}
        description={frontmatter.the_gist}
        image={image}
        pathname={fields.slug}
        author={frontmatter.author}
      />
      <Nav />
      <div className="">
        <div className="mt-12 mx-auto max-w-sm md:max-w-2xl lg:max-w-3xl">
          <TitleAndAuthorTemplate
            frontmatter={frontmatter}
            fields={fields}
            authorImage={authorImage}
          />
        </div>
        <div className="mt-12 mx-auto max-w-sm md:max-w-2xl lg:max-w-3xl">
          <MDXRenderer carousel={carousel}>{body}</MDXRenderer>
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
  query coursesQuery(
    $slug: String
    $authorImage: String
    $cloudinaryImage: String
  ) {
    cloudinaryMedia(public_id: { eq: $cloudinaryImage }) {
      secure_url
    }
    authorImage: cloudinaryMedia(public_id: { eq: $authorImage }) {
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
        devgadgets_choice
        image_captions
        rating
        price
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
