import { useStaticQuery, graphql } from "gatsby"

export const useGetAllGadgetsArticles = () => {
  const data = useStaticQuery(graphql`
    query allGadgetsArticles {
      allMdx(filter: { frontmatter: { article_category: { eq: "gadgets" } } }) {
        edges {
          node {
            frontmatter {
              category
              category_color
              last_updated(formatString: "ddd DD MMMM YYYY")
              title
              author
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
            excerpt(pruneLength: 150)
            id
          }
        }
      }
    }
  `)
  return data.allMdx.edges
}
