const escapeStringRegexp = require("escape-string-regexp")

const pagePath = `content`
const indexName = `devgadgets_prod`

const pageQuery = `{
  pages: allMdx(
    filter: {
      fileAbsolutePath: { regex: "/${escapeStringRegexp(pagePath)}/" },
    }
  ) {
    edges {
      node {
        id
        frontmatter {
          title
          book_title
          book_author
          book_article
          instructor_name
          course_title
          course_author
          gadget_name
          about
          the_gist
          featuredCloudinaryInstructor
          cloudinaryBookImage
          cloudinaryImage
          featuredImage {
            publicURL
          }
          image_captions
          article_category
          category
          category_color
        }
        fields {
          slug
        }
      }
    }
  }
}`

function pageToAlgoliaRecord({ node: { id, frontmatter, fields, ...rest } }) {
  return {
    objectID: id,
    ...frontmatter,
    ...fields,
    ...rest,
  }
}

const queries = [
  {
    query: pageQuery,
    transformer: ({ data }) => data.pages.edges.map(pageToAlgoliaRecord),
    indexName,
    settings: { attributesToSnippet: [`excerpt:20`] },
  },
]

module.exports = queries
