import { useStaticQuery, graphql } from "gatsby"

export const useGetAllCoursesArticles = () => {
  const data = useStaticQuery(graphql`
    query allCoursesArticles {
      allMdx(filter: { frontmatter: { article_category: { eq: "courses" } } }) {
        edges {
          node {
            frontmatter {
              category
              devgadgets_choice
              course_author
              price
              rating
              rating_count
              bestseller
              category_color
              last_updated(formatString: "ddd DD MMMM YYYY")
              title
              author
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
            id
          }
        }
      }
    }
  `)
  return data.allMdx.edges
}
