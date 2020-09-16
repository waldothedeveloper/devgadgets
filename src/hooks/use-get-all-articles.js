import { useStaticQuery, graphql } from "gatsby"

export const useGetAllArticles = () => {
  const data = useStaticQuery(graphql`
    query allArticles {
      allMdx(sort: { fields: frontmatter___last_updated, order: DESC }) {
        edges {
          node {
            frontmatter {
              category
              category_color
              article_category
              last_updated(formatString: "MMMM YYYY")
              title
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
            id
          }
        }
      }
    }
  `)
  return data.allMdx.edges
}
