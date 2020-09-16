import { useStaticQuery, graphql } from "gatsby"

export const getCloudinaryFeaturedImages = () => {
  const data = useStaticQuery(graphql`
    query getFeatImages {
      smartwatch: cloudinaryMedia(
        public_id: { eq: "devgadgets_cloudinary/smart-watch" }
      ) {
        secure_url
      }
      ebook: cloudinaryMedia(
        public_id: { eq: "devgadgets_cloudinary/ebook-reader" }
      ) {
        secure_url
      }
      computer: cloudinaryMedia(
        public_id: { eq: "devgadgets_cloudinary/computer_display" }
      ) {
        secure_url
      }
    }
  `)

  return data
}
