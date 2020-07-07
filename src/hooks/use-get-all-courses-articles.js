import { useStaticQuery, graphql } from "gatsby"

export const useGetAllCoursesArticles = () => {
  const data = useStaticQuery(graphql`
    query allCoursesArticles {
      allMdx(filter: { frontmatter: { article_category: { eq: "courses" } } }) {
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
            excerpt(pruneLength: 250)
            id
          }
        }
      }
    }
  `)
  return data.allMdx.edges
}
