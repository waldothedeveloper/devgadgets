import { useStaticQuery, graphql } from "gatsby"

export const useGetInstructors = () => {
  const data = useStaticQuery(graphql`
    query allInstructors {
      allMdx(filter: { frontmatter: { instructor: { eq: true } } }) {
        edges {
          node {
            body
            frontmatter {
              image {
                publicURL
              }
              featuredImage {
                publicURL
              }
              about
              name
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
