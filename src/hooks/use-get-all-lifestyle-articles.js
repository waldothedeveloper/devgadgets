import { useStaticQuery, graphql } from "gatsby"

export const useGetAllLifeStyleArticles = () => {
  const data = useStaticQuery(graphql`
    query allLifeStyleArticles {
      allMdx(
        filter: { frontmatter: { article_category: { eq: "lifestyle" } } }
      ) {
        edges {
          node {
            frontmatter {
              category
              category_color
              last_updated(formatString: "dddd DD MMMM YYYY")
              title
              author
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
            excerpt(pruneLength: 250)
            id
          }
        }
      }
    }
  `)
  return data.allMdx.edges
}
