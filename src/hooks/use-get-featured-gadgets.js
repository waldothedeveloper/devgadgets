import { useStaticQuery, graphql } from "gatsby"

export const useGetFeaturedGadgets = () => {
  const data = useStaticQuery(graphql`
    query monthArticles {
      allMdx(filter: { frontmatter: { featured: { eq: true } } }, limit: 6) {
        edges {
          node {
            frontmatter {
              category
              last_updated(formatString: "ddd DD MMMM YYYY")
              title
              author
              cloudinaryImage
              the_gist
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
