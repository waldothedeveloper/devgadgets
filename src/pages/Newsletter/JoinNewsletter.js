import React from "react"
import { useJoinNewsletter } from "../../hooks/use-join-newsletter"
import { motion } from "framer-motion"
import { Link } from "gatsby"
import ThankYouForSubscribing from "./thank-you-for-subscribing"
//
const JoinNewsletter = () => {
  const {
    email,
    mailChimpResponse,
    handleEmailChange,
    handleSubmit,
    errors,
  } = useJoinNewsletter()

  return mailChimpResponse.result === "error" ? (
    <div className="bg-teal-800">
      <div className="max-w-screen-2xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center">
        <div className="lg:w-0 lg:flex-1">
          <div className="flex items-center">
            <h2
              className="text-2xl leading-9 font-bold tracking-tight text-gray-50 sm:text-4xl sm:leading-10"
              id="newsletter-headline"
            >
              Sign up for our newsletter
            </h2>
          </div>

          <p className="mt-3 max-w-lg text-lg leading-6 text-gray-300">
            Subscribe to get a sneak peak of our awesome weekly articles, then
            twiddle your thumbs, it&apos;s good luck!{` `}
            <span role="img" aria-label="smart face with glasses">
              😎
            </span>
          </p>
        </div>
        <div className="mt-8 lg:mt-0">
          <form
            onSubmit={handleSubmit}
            className="flex"
            aria-labelledby="newsletter-headline"
          >
            <div className="w-full">
              <input
                onChange={handleEmailChange}
                value={email}
                type="email"
                aria-label="Email address"
                className="appearance-none w-full px-5 py-3 text-base leading-6 rounded-md text-gray-900 bg-cool-gray-100 placeholder-gray-500 focus:placeholder-gray-400 transition duration-150 ease-in-out "
                placeholder="Enter your email"
              />

              <p className="mt-2 text-sm text-red-500">
                We&apos;re sorry. Something when wrong. Try again later.
              </p>
            </div>

            <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                type="submit"
                className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 rounded-md text-white font-semibold bg-teal-500 hover:bg-teal-400 focus:outline-none focus:bg-teal-400"
              >
                Subscribe
              </motion.button>
            </div>
          </form>
          <p className="mt-3 text-sm leading-5 text-gray-400">
            We care about the protection of your data. Read our {` `}
            <Link
              to="/privacy-policy"
              className="text-gray-200 hover:text-orange-500"
            >
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  ) : mailChimpResponse.message !== "" ? (
    <ThankYouForSubscribing />
  ) : (
    <div className="bg-teal-800">
      <div className="max-w-screen-2xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center">
        <div className="lg:w-0 lg:flex-1">
          <div className="flex items-center">
            <h2
              className="ml-2 md:ml-0 text-2xl leading-9 font-bold tracking-tight text-gray-50 sm:text-4xl sm:leading-10"
              id="newsletter-headline"
            >
              Sign up for our newsletter
            </h2>
          </div>

          <p className="ml-2 md:ml-0 mt-3 max-w-lg text-lg leading-6 text-gray-300">
            Subscribe to our awesome weekly articles, then twiddle your thumbs,
            it&apos;s good luck!{` `}
            <span role="img" aria-label="smart face with glasses">
              😎
            </span>
          </p>
        </div>
        <div className="mt-8 lg:mt-0 lg:ml-8 mx-1">
          <form
            className="sm:flex"
            onSubmit={handleSubmit}
            aria-labelledby="newsletter-headline"
          >
            <div className="w-full">
              <input
                onChange={handleEmailChange}
                value={email}
                type="email"
                aria-label="Email address"
                className="appearance-none w-full px-5 py-3 text-base leading-6 rounded-md text-gray-900 bg-cool-gray-100 placeholder-gray-500 focus:placeholder-gray-400 focus:outline-none transition duration-150 ease-in-out "
                placeholder="Enter your email"
              />
              {errors.message.length > 0 && (
                <p className="mt-2 text-sm text-red-500">{errors.message}</p>
              )}
            </div>

            <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                type="submit"
                className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 rounded-md text-white font-semibold bg-teal-500 hover:bg-teal-400 focus:outline-none focus:bg-teal-400"
              >
                Subscribe
              </motion.button>
            </div>
          </form>
          <p className="mt-3 text-sm leading-5 text-gray-400">
            We care about the protection of your data. Read our {` `}
            <Link
              to="/privacy-policy"
              className="text-gray-200 hover:text-orange-500"
            >
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default JoinNewsletter
