import { useStaticQuery, graphql } from "gatsby"

export const useGetAllGadgetsArticles = () => {
  const data = useStaticQuery(graphql`
    query allGadgetsArticles {
      allMdx(
        filter: {
          frontmatter: {
            article_category: { eq: "gadgets" }
            active: { eq: true }
          }
        }
      ) {
        edges {
          node {
            frontmatter {
              category
              category_color
              last_updated(formatString: "ddd DD MMMM YYYY")
              title
              the_gist
              author
              cloudinaryImage
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
