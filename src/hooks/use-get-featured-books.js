import { useStaticQuery, graphql } from "gatsby"

export const useGetFeaturedBooks = () => {
  const data = useStaticQuery(graphql`
    query bookArticles {
      allMdx(
        filter: { frontmatter: { featured_book: { eq: true } } }
        limit: 6
      ) {
        edges {
          node {
            frontmatter {
              category
              category_color
              last_updated(formatString: "ddd DD MMMM YYYY")
              title
              author
              book_author
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