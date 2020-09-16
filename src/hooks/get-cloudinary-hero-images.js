import { useStaticQuery, graphql } from "gatsby"

export const getCloudinaryHeroImages = () => {
  const data = useStaticQuery(graphql`
    query getHeroImages {
      hero: cloudinaryMedia(
        public_id: { eq: "devgadgets_cloudinary/hero_gadgets" }
      ) {
        secure_url
      }
      loveheart: cloudinaryMedia(
        public_id: { eq: "devgadgets_cloudinary/love-heart" }
      ) {
        secure_url
      }
    }
  `)

  return data
}
