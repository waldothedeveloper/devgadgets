import { useStaticQuery, graphql } from "gatsby"

export const useGetFeaturedOnlineCourses = () => {
  const data = useStaticQuery(graphql`
    query onlineCourses {
      allMdx(
        filter: { frontmatter: { featured_course: { eq: true } } }
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
              vendor
              vendor_color
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
