import { useStaticQuery, graphql } from "gatsby"

export const useGetFeaturedOnlineCourses = () => {
  const data = useStaticQuery(graphql`
    query onlineCourses {
      allMdx(
        filter: { frontmatter: { featured_course: { eq: true } } }
        limit: 12
      ) {
        edges {
          node {
            frontmatter {
              category
              devgadgets_choice
              course_author
              price
              rating
              cloudinaryImage
              rating_count
              bestseller
              category_color
              last_updated(formatString: "ddd DD MMMM YYYY")
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
            id
          }
        }
      }
    }
  `)
  return data.allMdx.edges
}
