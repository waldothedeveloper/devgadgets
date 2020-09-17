import React from "react"
import Nav from "../pages/Menu/Nav"
import Footer from "../pages/Footer/Footer"
import { graphql } from "gatsby"
import DevGadgetsChoice from "../components/devgadgets-choice"
import { Link } from "gatsby"
import StarRating from "../templates/star-rating"
import ShareArticle from "./share-article-template"
import { useGetAllCoursesArticles } from "../hooks/use-get-all-courses-articles"
import JoinNewsletter from "../pages/Newsletter/JoinNewsletter"
import { MDXRenderer } from "gatsby-plugin-mdx"
import SEO from "../components/seo"
import PropTypes from "prop-types"
//
const InstructorsTemplate = ({ data, pageContext }) => {
  const image =
    data && data.cloudinaryMedia
      ? data.cloudinaryMedia
      : "http://placehold.jp/24/cccccc/ffffff/768x442.png?text=image+not+found"

  const cloudinaryCourses =
    data && data.allCloudinaryMedia ? data.allCloudinaryMedia.edges : []
  const { frontmatter, body, fields } = data.mdx

  const courses = useGetAllCoursesArticles()
  const [filtCourses, setFiltCourses] = React.useState([])
  // console.log("filtCourses: ", filtCourses)

  React.useEffect(() => {
    const result = courses.filter(
      elem =>
        elem.node.frontmatter.course_author === frontmatter.instructor_name
    )
    setFiltCourses(result)
  }, [courses, data])

  return (
    <>
      <SEO
        title={frontmatter.instructor_name}
        description={frontmatter.the_gist}
        image={image}
        pathname={fields.slug}
        author={frontmatter.author}
      />
      <Nav />
      <div className="mt-24 bg-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto pt-16 px-4 sm:px-6 lg:px-8">
          <div className="hidden lg:block bg-teal-50 absolute top-0 bottom-0 left-3/4 w-screen"></div>
          <div className="mx-auto text-base max-w-prose lg:max-w-none">
            <h1 className="mt-2 mb-8 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
              Meet {frontmatter.instructor_name}
            </h1>
          </div>
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="relative mb-8 lg:mb-0 lg:row-start-1 lg:col-start-2">
              <svg
                className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"
                width="404"
                height="384"
                fill="none"
                viewBox="0 0 404 384"
              >
                <defs>
                  <pattern
                    id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x="0"
                      y="0"
                      width="4"
                      height="4"
                      className="text-orange-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width="404"
                  height="384"
                  fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
                />
              </svg>
              <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
                <figure>
                  <div className="relative pb-7/12 lg:pb-0">
                    <img
                      src={
                        image && image.secure_url
                          ? image.secure_url
                          : `http://placehold.jp/24/cccccc/ffffff/250x50.png?text=image_not_found`
                      }
                      alt=""
                      width="1184"
                      height="1376"
                      className="rounded-lg shadow-lg object-cover object-center absolute inset-0 w-full h-full lg:static lg:h-auto"
                    />
                  </div>
                  <figcaption className="flex mt-3 text-sm text-gray-500">
                    <svg
                      className="flex-none w-5 h-5 mr-2 text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {frontmatter.instructor_name}
                  </figcaption>
                </figure>
              </div>
            </div>
            <div>
              <MDXRenderer>{body}</MDXRenderer>
            </div>
          </div>
          <div className="mx-auto text-base max-w-prose lg:max-w-none">
            <h1 className="mt-12 mb-8 text-2xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-3xl sm:leading-10">
              {frontmatter.instructor_name}&lsquo; Courses
            </h1>
          </div>
          {/* Courses go here */}
          <ul className="mx-0.5 md:mx-5 grid grid-cols-1 gap-6 md:gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {filtCourses.map(elem => {
              return (
                <div
                  key={elem.node.id}
                  className="flex-none max-w-sm lg:max-w-none mr-4 mb-3"
                >
                  <div className="flex flex-col rounded-lg shadow-lg overflow-hidden h-full">
                    <div className="flex-shrink-0">
                      <Link className="flex-1" to={elem.node.fields.slug}>
                        <img
                          className="h-48 w-full object-cover"
                          src={
                            cloudinaryCourses
                              ? cloudinaryCourses.filter(photo =>
                                  photo.node.secure_url.includes(
                                    elem.node.frontmatter.cloudinaryImage
                                  )
                                )[0].node.secure_url
                              : elem.node.frontmatter.featuredImage.publicURL
                          }
                          alt="featured image of the course"
                        />
                      </Link>
                    </div>

                    <Link
                      className="flex-1 bg-white p-6 flex flex-col"
                      to={elem.node.fields.slug}
                    >
                      <div className="flex-1">
                        <p className="text-sm leading-5 font-medium text-teal-600">
                          {elem.node.frontmatter.category}
                        </p>
                        <div className="block">
                          <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                            {elem.node.frontmatter.title}
                          </h3>
                          <p className="mt-0.5 text-sm leading-6 text-gray-500">
                            {elem.node.frontmatter.course_author}
                          </p>
                          <div className="flex items-center">
                            <span className="font-bold text-base text-yellow-500 pr-1">
                              {elem.node.frontmatter.rating}
                            </span>
                            <StarRating value={elem.node.frontmatter.rating} />
                            <span className="ml-1 text-sm text-gray-400">
                              {elem.node.frontmatter.rating_count !== 0
                                ? `(` + elem.node.frontmatter.rating_count + `)`
                                : ``}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-6 flex flex-col">
                        <p className="self-start font-semibold text-base leading-6 text-gray-800">
                          {elem.node.frontmatter.price !== 0
                            ? `$` + elem.node.frontmatter.price
                            : `Free`}
                        </p>
                        <div className="flex items-center mt-1">
                          <p
                            className={
                              elem.node.frontmatter.bestseller
                                ? "-ml-1 px-2 mr-2 py-1 bg-yellow-200 text-yellow-800 text-sm font-semibold mb-2 rounded-md"
                                : "hidden"
                            }
                          >
                            Bestseller
                          </p>
                          <DevGadgetsChoice
                            devgadgets_choice={
                              elem.node.frontmatter.devgadgets_choice
                            }
                          />
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              )
            })}
          </ul>
        </div>
      </div>
      <div className="mt-24 lg:max-w-5xl lg:mx-auto">
        <JoinNewsletter />
      </div>
      <ShareArticle frontmatter={frontmatter} fields={pageContext} />
      <Footer />
    </>
  )
}

InstructorsTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
}
export default InstructorsTemplate

export const query = graphql`
  query getAllInstructors(
    $slug: String
    $cloudinaryImage: String
    $authorImage: String
    $cloudinaryInstructorMedia: [String]
  ) {
    cloudinaryMedia(public_id: { eq: $cloudinaryImage }) {
      secure_url
      id
    }
    authorImage: cloudinaryMedia(public_id: { eq: $authorImage }) {
      secure_url
    }
    allCloudinaryMedia(
      filter: { public_id: { in: $cloudinaryInstructorMedia } }
    ) {
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
        about
        instructor_name
        image {
          publicURL
        }
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
//
