import { useStaticQuery, graphql } from "gatsby"

export const useGetInstructors = () => {
  const data = useStaticQuery(graphql`
    {
      instructor_photos: allCloudinaryMedia(
        filter: {
          public_id: {
            in: [
              "devgadgets_cloudinary/andrei_neagoie"
              "devgadgets_cloudinary/maximilian_schwarzmuller"
              "devgadgets_cloudinary/scott_tolinski"
              "devgadgets_cloudinary/colt_steele"
              "devgadgets_cloudinary/tyler_mcginnis"
              "devgadgets_cloudinary/wesbos"
              "devgadgets_cloudinary/stephane_maarek"
            ]
          }
        }
      ) {
        edges {
          node {
            secure_url
          }
        }
      }
      allMdx(filter: { frontmatter: { instructor: { eq: true } } }) {
        edges {
          node {
            body
            frontmatter {
              featuredCloudinaryInstructor
              cloudinaryInstructor
              image {
                publicURL
              }
              featuredImage {
                publicURL
              }
              about
              instructor_name
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
  return data
}
