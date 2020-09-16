import { useStaticQuery, graphql } from "gatsby"

export const getCloudinaryManVideo = () => {
  const data = useStaticQuery(graphql`
    query getManVideo {
      man_video: cloudinaryMedia(
        public_id: { eq: "devgadgets_cloudinary/man_video" }
      ) {
        secure_url
      }
    }
  `)

  return data
}
