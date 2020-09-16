import { useStaticQuery, graphql } from "gatsby"

export const useGetAllBookArticles = () => {
  const data = useStaticQuery(graphql`
    query allBookArticles {
      allMdx(filter: { frontmatter: { article_category: { eq: "books" } } }) {
        edges {
          node {
            frontmatter {
              category
              category_color
              last_updated(formatString: "dddd DD MMMM YYYY")
              title
              author
              book_author
              price
              cloudinaryBookImage
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
            excerpt(pruneLength: 250)
            id
          }
        }
      }
    }
  `)
  return data.allMdx.edges
}
