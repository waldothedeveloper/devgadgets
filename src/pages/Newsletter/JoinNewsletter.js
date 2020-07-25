import React from "react"
import { useJoinNewsletter } from "../../hooks/use-join-newsletter"
import { motion } from "framer-motion"

//
const JoinNewsletter = () => {
  const { email, handleEmailChange, handleSubmit, errors } = useJoinNewsletter()

  const coolPhrases = [
    "Piece of cake.",
    "Knock on wood.",
    "It's not rocket science.",
    "Well done...period.",
    "We're done with bananas here!",
    "Hang tight, here it comes!!!!",
    "Gosh whatever it takes, you've got this!",
  ]

  return (
    <div className="mt-16 bg-teal-100">
      <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center">
        <div className="lg:w-0 lg:flex-1">
          <div className="flex items-center">
            <h2
              className="text-2xl leading-9 font-bold tracking-tight text-gray-800 sm:text-4xl sm:leading-10"
              id="newsletter-headline"
            >
              Sign up for our newsletter
            </h2>
          </div>

          <p className="mt-3 max-w-3xl text-lg leading-6 text-gray-600">
            Wake up to the best morning newsletter you've not seen in a long
            time. <br /> We connect the dots on how technology affects your
            life.
          </p>
        </div>
        <div className="mt-8 lg:mt-0 lg:ml-8">
          <form
            onSubmit={handleSubmit}
            className="sm:flex"
            aria-labelledby="newsletter-headline"
          >
            <div className="sm:max-w-xs md:max-w-2xl">
              <input
                onChange={handleEmailChange}
                value={email}
                type="email"
                aria-label="Email address"
                className="appearance-none w-full px-5 py-3 text-base leading-6 rounded-md text-gray-900 bg-gray-100 placeholder-gray-500 focus:placeholder-gray-400 transition duration-150 ease-in-out "
                placeholder="Enter your email"
              />
              {errors.message.length > 0 ? (
                <p className="mt-2 text-sm text-red-500">{errors.message}</p>
              ) : (
                email !== "" && (
                  <p className="mt-2 text-sm text-teal-500">
                    {
                      coolPhrases[
                        Math.floor(Math.random() * coolPhrases.length - 1) + 1
                      ]
                    }
                  </p>
                )
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
          <p className="mt-3 text-sm leading-5 text-gray-500">
            We care about the protection of your data. Read our {` `}
            <button className="text-teal-600 font-medium underline">
              Privacy Policy.
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}

export default JoinNewsletter
