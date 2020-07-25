import React from "react"
import { Link } from "gatsby"
import { useGetFeaturedGadgets } from "../../hooks/use-get-featured-gadgets"
import { motion } from "framer-motion"
//
const FeaturedGadgets = () => {
  const data = useGetFeaturedGadgets()

  return (
    <div className="relative pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3"></div>
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2
            style={{
              background:
                "linear-gradient(0deg, rgba(79,209,197,1) 0%, rgba(237,137,54,1) 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
            className="text-left md:text-center pb-2 px-2 text-4xl leading-9 tracking-tight text-transparent font-extrabold sm:text-5xl sm:leading-10"
          >
            Meet your next
            <br /> favorites gadgets
          </h2>
          <p className="text-left md:text-center px-2 mt-3 max-w-2xl mx-auto text-xl leading-7 text-gray-500 sm:mt-4">
            Discover amazing products to make your productivity 200% better.
            Check out this curated list of the best affordable piece of
            technology to work smarter, never harder.
          </p>
        </div>
        <div className="mt-12 grid gap-5 lg:gap-8 max-w-lg mx-auto md:grid-cols-2 lg:grid-cols-3 md:max-w-none">
          {data.map(content => (
            <motion.div
              whileHover={{ scale: 1.1 }}
              key={content.node.id}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden"
            >
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src={content.node.frontmatter.featuredImage.publicURL}
                  alt=""
                />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm leading-5 font-medium text-teal-600">
                    <button className="hover:underline">
                      {content.node.frontmatter.category}
                    </button>
                  </p>
                  <Link to={content.node.fields.slug} className="block">
                    <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                      {content.node.frontmatter.title}
                    </h3>
                    <p className="mt-3 text-base leading-6 text-gray-500">
                      {content.node.frontmatter.the_gist.slice(0, 180)}...
                    </p>
                  </Link>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <button>
                      <img
                        className="h-10 w-10 rounded-full"
                        src={content.node.frontmatter.author_image.publicURL}
                        alt="waldo lavaut"
                      />
                    </button>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm leading-5 font-medium text-gray-900">
                      <button className="hover:underline">
                        {content.node.frontmatter.author}
                      </button>
                    </p>
                    <div className="flex text-sm leading-5 text-gray-500">
                      <time dateTime="2020-03-16">
                        {content.node.frontmatter.date}
                      </time>
                      <span className="mx-1">&middot;</span>
                      <span>{content.node.fields.readingTime.text}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FeaturedGadgets
