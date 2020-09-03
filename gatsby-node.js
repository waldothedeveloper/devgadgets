const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blogPostTemplate.js`)
  const instructorsTemplate = path.resolve(
    `src/templates/instructorsTemplate.js`
  )
  const booksTemplate = path.resolve(`src/templates/booksTemplate.js`)

  return graphql(`
    {
      allMdx {
        nodes {
          body
          frontmatter {
            title
            last_updated(formatString: "YYYY MMMM Do")
            author
            instructor_name
            instructor
            book_article
            about
            image {
              publicURL
            }
            article_category
            category
            the_gist
            image_captions
            rating
            ratings_count
            amazon_choice
            price
            down_the_line
            buy_link
            category_color
            featured
            cloudinaryInstructorMedia
            cloudinaryCarousel
            featuredCloudinaryInstructor
            cloudinaryBookImage
            cloudinaryImage
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
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    const posts = result.data.allMdx.nodes

    // create page for each mdx file
    posts.forEach(node => {
      if (node.frontmatter.instructor) {
        createPage({
          path: node.fields.slug,
          component: instructorsTemplate,
          context: {
            slug: node.fields.slug,
            cloudinaryImage: node.frontmatter.featuredCloudinaryInstructor,
            cloudinaryInstructorMedia:
              node.frontmatter.cloudinaryInstructorMedia,
          },
        })
      } else if (node.frontmatter.book_article) {
        createPage({
          path: node.fields.slug,
          component: booksTemplate,
          context: {
            slug: node.fields.slug,
            cloudinaryImage: node.frontmatter.cloudinaryBookImage,
          },
        })
      } else {
        createPage({
          path: node.fields.slug,
          component: blogPostTemplate,
          context: {
            slug: node.fields.slug,
            cloudinaryImage: node.frontmatter.cloudinaryImage,
            cloudinaryCarousel: node.frontmatter.cloudinaryCarousel,
          },
        })
      }
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
