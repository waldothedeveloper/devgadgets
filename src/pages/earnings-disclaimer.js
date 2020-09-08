import React from "react"
import Footer from "./Footer/Footer"
import Nav from "./Menu/Nav"
import { motion } from "framer-motion"
const variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
}

//
const EarningsDisclaimer = () => {
  return (
    <>
      <Nav />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ duration: 1.5 }}
        className="mt-24 relative py-16 bg-white overflow-hidden"
      >
        <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
          <div className="relative h-full text-lg max-w-prose mx-auto">
            <svg
              className="absolute top-12 left-full transform translate-x-32"
              width="404"
              height="384"
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width="404"
                height="384"
                fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
              />
            </svg>
            <svg
              className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
              width="404"
              height="384"
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width="404"
                height="384"
                fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
              />
            </svg>
            <svg
              className="absolute bottom-12 left-full transform translate-x-32"
              width="404"
              height="384"
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="d3eb07ae-5182-43e6-857d-35c643af9034"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width="404"
                height="384"
                fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
              />
            </svg>
          </div>
        </div>
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="text-lg max-w-prose mx-auto mb-6">
            <h1 className="mt-2 mb-8 text-3xl text-center leading-8 font-extrabold tracking-tight text-teal-400 sm:text-4xl sm:leading-10">
              Earnings Disclaimer
            </h1>
          </div>
          <div className="prose prose-lg text-gray-500 mx-auto">
            {/* <p>Last Updated: Wed, Jul 29, 2020.</p> */}

            <p>
              Happy coding everyone! <br /> In accordance with basic FTC law,
              DevGadgets is required to disclose that there are certain product
              links on devgadgets.io website (and emails) in which DevGadgets
              earn a commission for any purchases you may make.
            </p>
            <p className="font-mono font-medium text-orange-500">
              Hold up -- Does this affects (me) the visitor using you website?.
            </p>
            <p className="font-mono font-medium">
              Absolutely nooope, but we want you to know this business practice
              is called affiliate marketing.
            </p>

            <p className="text-teal-500 font-medium">
              Basically, DevGadgets have unique links for certain
              products/services and when a person clicks and buys said product,
              Devgadgets receive a small commission. It&apos;s similar to how
              salespeople at certain clothing shops (think you fav car dealer)
              get commissions based on their total product sales. Except
              DevGadgets is doing it online.
            </p>
            {/* <button href={`mailto:contact@devgadgets.io`}>
              <span className="text-gray-500">email: {` `}</span>
              <a
                style={{ color: "#0694a2" }}
                target="_blank"
                rel="noreferrer"
                href={`mailto:contact@devgadgets.io`}
                className="font-semibold hover:underline"
              >
                contact@devgadgets.io
              </a>
            </button> */}

            <p>
              Our goal with this blog is to provide our personal experience and
              expertise on a wide variety of technology products that we have
              tested, such as gadgets, books or courses.
            </p>
            <p>
              As much as we love to share all this info totally free, writing a
              trillion of articles on a gazillion topics all day is a harsh
              task. We do have expenses, which is the reason why we include
              affiliate links for certain products/courses/services.
            </p>

            <p>
              We recommend only the products or services we think are the best.
            </p>
            <p className="text-orange-600">
              Please do not spend money on any products, courses, books or
              services mentioned on the site unless you feel you need them or
              they will aid in reaching your goals.
            </p>

            <p>
              A few of the affiliate programs DevGadgets is currently enrolled
              include:
            </p>
            <ul>
              <li>Udemy</li>
              <li>WesBos</li>
              <li>Amazon</li>
              <li>LinkedIn Learning</li>
              <li>Udemy</li>
            </ul>

            <p>
              We take complaints very seriously. If you have any questions about
              why or how we use affiliate marketing on the site , please contact
              us by email at{" "}
              <a
                style={{ color: "#0694a2" }}
                target="_blank"
                rel="noreferrer"
                href={`mailto:contact@devgadgets.io`}
                className="font-medium hover:underline"
              >
                contact@devgadgets.io
              </a>
              <br /> We will be more than happy to answer any questions you may
              have.
            </p>
          </div>
        </div>
      </motion.div>
      <Footer />
    </>
  )
}

export default EarningsDisclaimer
