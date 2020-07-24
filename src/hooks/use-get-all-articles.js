import { useStaticQuery, graphql } from "gatsby"

export const useGetAllArticles = () => {
  const data = useStaticQuery(graphql`
    query allArticles {
      allMdx {
        edges {
          node {
            frontmatter {
              category
              category_color
              article_category
              last_updated(formatString: "ddd DD MMMM YYYY")
              title
              the_gist
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
            id
          }
        }
      }
    }
  `)
  return data.allMdx.edges
}
