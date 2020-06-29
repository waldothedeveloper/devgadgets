import { useStaticQuery, graphql } from "gatsby"

export const useGetFeaturedGadgets = () => {
  const data = useStaticQuery(graphql`
    query monthArticles {
      allMdx(filter: { frontmatter: { featured: { eq: true } } }, limit: 6) {
        edges {
          node {
            frontmatter {
              category
              date(formatString: "dddd DD MMMM YYYY")
              title
              author
              image {
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
