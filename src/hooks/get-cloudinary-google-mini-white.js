import { useStaticQuery, graphql } from "gatsby"

export const getCloudinaryGoogleMiniWhite = () => {
  const data = useStaticQuery(graphql`
    query getGoogleMiniWhite {
      cloudinaryMedia(
        public_id: { eq: "devgadgets_cloudinary/google_mini_white" }
      ) {
        secure_url
      }
    }
  `)

  return data.cloudinaryMedia
}
