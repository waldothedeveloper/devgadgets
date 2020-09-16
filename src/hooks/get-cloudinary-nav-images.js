import { useStaticQuery, graphql } from "gatsby"

export const getCloudinaryNavImages = () => {
  const data = useStaticQuery(graphql`
    query getNavImages {
      keyboard: cloudinaryMedia(
        public_id: { eq: "devgadgets_cloudinary/keyboard" }
      ) {
        secure_url
      }
      headphones: cloudinaryMedia(
        public_id: { eq: "devgadgets_cloudinary/headphones" }
      ) {
        secure_url
      }
      computer_display: cloudinaryMedia(
        public_id: { eq: "devgadgets_cloudinary/computer_display" }
      ) {
        secure_url
      }
      robot: cloudinaryMedia(public_id: { eq: "devgadgets_cloudinary/robot" }) {
        secure_url
      }
      plug: cloudinaryMedia(public_id: { eq: "devgadgets_cloudinary/plug" }) {
        secure_url
      }
      truck: cloudinaryMedia(public_id: { eq: "devgadgets_cloudinary/truck" }) {
        secure_url
      }
      contact_avatars: cloudinaryMedia(
        public_id: { eq: "devgadgets_cloudinary/contact_avatars" }
      ) {
        secure_url
      }
      privacy_policy: cloudinaryMedia(
        public_id: { eq: "devgadgets_cloudinary/privacy_policy" }
      ) {
        secure_url
      }
      legal_balance: cloudinaryMedia(
        public_id: { eq: "devgadgets_cloudinary/legal_balance" }
      ) {
        secure_url
      }
    }
  `)

  return data
}
