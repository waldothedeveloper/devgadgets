import React from "react"
import lifestyle from "../../images/lifestyle.svg"
import { motion } from "framer-motion"
import { graphql, useStaticQuery } from "gatsby"

//
const variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
}
//
const ThankYouForSubscribing = () => {
  const data = useStaticQuery(graphql`
    query getThankYou {
      cloudinaryMedia(public_id: { eq: "devgadgets_cloudinary/lifestyle" }) {
        secure_url
      }
    }
  `)

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 1.5 }}
      className="relative bg-teal-800 pt-20 md:pb-10 md:pt-2 lg:pt-0"
    >
      <div className="h-56 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
        <img
          className="w-full h-full object-cover"
          src={data.cloudinaryMedia.secure_url || lifestyle}
          alt="lifestyle team of people"
        />
      </div>
      <div className="relative max-w-screen-xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-52">
        <div className="md:ml-auto md:w-1/2 md:pl-10">
          <h2 className="mt-2 text-teal-100 text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl sm:leading-10">
            Thank you for subscribing!{" "}
          </h2>
          <p className="mt-3 text-lg leading-7 text-teal-100">
            Now go ahead and check your inbox for a welcome email from us{" "}
            <span role="img" aria-label="rocket">
              🚀.
            </span>
            <br />
            If you <span className="text-orange-500">don&apos;t find</span> our
            email in your inbox:
          </p>
          <div className="prose prose-lg text-teal-200 mt-6">
            <ul>
              <li>
                Check your spam folder{" "}
                <span role="img" aria-label="trash">
                  🗑️
                </span>{" "}
              </li>
              <li>
                Once you find it, mark us as not-spam.{" "}
                <span role="img" aria-label="victory">
                  ✌️
                </span>
              </li>
              <li>
                That&apos;s it, you are ready for our future newsletters.{" "}
                <span role="img" aria-label="unicorn">
                  🦄
                </span>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default ThankYouForSubscribing
