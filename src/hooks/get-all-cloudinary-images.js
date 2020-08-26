import { useStaticQuery, graphql } from "gatsby"

export const getAllCloudinaryImages = () => {
  const data = useStaticQuery(graphql`
    query allCloudinaryMedia {
      allCloudinaryMedia {
        edges {
          node {
            secure_url
          }
        }
      }
    }
  `)
  return data.allCloudinaryMedia.edges
}
