const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blogPostTemplate.js`)

  return graphql(`
    {
      allMdx {
        nodes {
          body
          frontmatter {
            title
            last_updated(formatString: "YYYY MMMM Do")
            author
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
      // console.log("node: ", node)
      createPage({
        path: node.fields.slug,
        component: blogPostTemplate,
        context: {
          slug: node.fields.slug,
          category: node.frontmatter.article_category,
        },
      })
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
