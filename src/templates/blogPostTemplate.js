/* eslint-disable */
import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Nav from "../pages/Menu/Nav"
import TitleAndAuthorTemplate from "./title-and-author"
import RatingWrapper from "./rating-wrapper-template"
import BlogFeaturedImage from "./blog-featured-image"
import Footer from "../pages/Footer/Footer"
import ShareArticle from "./share-article-template"
import BuyIt from "./buy-it"
import SEO from "../components/seo"
import JoinNewsletter from "../pages/Newsletter/JoinNewsletter"
import Price from "./price"

//
export default ({ data }) => {
  const image = data && data.cloudinaryMedia ? data.cloudinaryMedia : ""
  const carousel =
    data && data.allCloudinaryMedia ? data.allCloudinaryMedia.edges : []
  const { frontmatter, body, fields } = data && data.mdx

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
      <div>
        <div className="mt-12 mx-3 md:mx-32 lg:mx-64 lg:mt-24 xl:mx-72">
          <TitleAndAuthorTemplate frontmatter={frontmatter} fields={fields} />
        </div>
        <div className="mt-12 mx-6 md:mx-32 lg:mx-64 xl:mx-72">
          <RatingWrapper frontmatter={frontmatter} />
          <BlogFeaturedImage frontmatter={frontmatter} image={image} />
          <div className="flex items-center justify-between my-12">
            <Price frontmatter={frontmatter} />
            <BuyIt frontmatter={frontmatter} />
          </div>
          {/* Amazon Native Ads */}
          <div id="amzn-assoc-ad-8967ded1-0ff1-4045-9571-d4063bddb450" />
          <MDXRenderer carousel={carousel}>{body}</MDXRenderer>
          <div className="my-12">
            <BuyIt frontmatter={frontmatter} />
          </div>
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
  query BlogPostQuery(
    $slug: String
    $cloudinaryImage: String
    $cloudinaryCarousel: [String]
  ) {
    cloudinaryMedia(public_id: { eq: $cloudinaryImage }) {
      secure_url
    }
    allCloudinaryMedia(filter: { public_id: { in: $cloudinaryCarousel } }) {
      edges {
        node {
          secure_url
        }
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      body
      frontmatter {
        title
        last_updated(formatString: "YYYY MMMM Do")
        author
        author_image {
          publicURL
        }
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
