import React from "react"
import Nav from "../pages/Menu/Nav"
import Footer from "../pages/Footer/Footer"
import { graphql } from "gatsby"
import amazon from "../images/amazon-logo.svg"
import ShareArticle from "./share-article-template"
import JoinNewsletter from "../pages/Newsletter/JoinNewsletter"
import { MDXRenderer } from "gatsby-plugin-mdx"
import DevGadgetsChoice from "../components/devgadgets-choice"
import SEO from "../components/seo"
import PropTypes from "prop-types"
//
const BooksTemplate = ({ data, pageContext }) => {
  const image = data.cloudinaryMedia
  const { frontmatter, body, fields } = data.mdx

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
      <div className="mt-12 lg:mt-24 py-16 overflow-hidden">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-center lg:flex-row">
            <div className="max-w-sm mx-auto md:max-w-none lg:w-5/6">
              <div className="mt-12 mb-8">
                <p className="text-base leading-6 text-teal-600 font-semibold tracking-wide uppercase">
                  {frontmatter.category}
                </p>
                <h1 className="my-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
                  {frontmatter.title}
                </h1>
                <div className="flex flex-start">
                  <DevGadgetsChoice
                    devgadgets_choice={frontmatter.devgadgets_choice}
                  />
                </div>
              </div>
              <div className="mx-3 mb-10 prose text-gray-500">
                <MDXRenderer>{body}</MDXRenderer>
              </div>
              <div className="flex text-base max-w-prose mx-auto lg:max-w-none">
                <div className="rounded-md shadow">
                  <a
                    href={frontmatter.buy_link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-col w-full items-center justify-center px-16 py-1 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-teal-600 hover:bg-teal-500 focus:outline-none focus:border-teal-700 focus:shadow-outline-teal transition duration-150 ease-in-out"
                  >
                    Buy it on
                    <div className="mt-0.5">
                      <img
                        className="w-auto h-6"
                        src={amazon}
                        alt="amazon logo"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="order-first lg:order-last w-full">
              <div className="mx-12 md:max-w-sm md:mx-auto lg:max-w-md rounded-lg shadow-lg">
                <img
                  className="w-full h-full object-cover object-center"
                  src={
                    image && image.secure_url
                      ? image.secure_url
                      : `http://placehold.jp/24/cccccc/ffffff/250x50.png?text=image_not_found`
                  }
                  alt="book"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <JoinNewsletter />
      <ShareArticle frontmatter={frontmatter} fields={pageContext} />
      <Footer />
    </>
  )
}

BooksTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
}
export default BooksTemplate

export const query = graphql`
  query getAllBooks(
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
        devgadgets_choice
        book_author
        category
        price
        buy_link
        last_updated
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
