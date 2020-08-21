import React from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion"
import PropTypes from "prop-types"

//
const variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
}

const ArticlesGadgetsLayout = ({ data, articleCat }) => {
  const [filterArticles, setFilterArticles] = React.useState([])

  React.useEffect(() => {
    if (articleCat === "All") {
      setFilterArticles(data)
    } else {
      const newData = data.filter(
        elem =>
          elem.node.frontmatter.category.toUpperCase() ===
          articleCat.toUpperCase()
      )
      setFilterArticles(newData)
    }
  }, [data, articleCat])

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, ease: "easeIn" }}
      variants={variants}
      className="pb-20 lg:pb-28 md:pl-3 lg:pl-6"
    >
      <div className="grid gap-5 md:gap-x-6 max-w-lg mx-auto md:grid-cols-2 md:max-w-none lg:grid-cols-3">
        {filterArticles.map(elem => (
          <div
            key={elem.node.id}
            className="flex flex-col rounded-lg shadow-lg overflow-hidden"
          >
            <div className="flex-shrink-0">
              <img
                className="h-48 w-full object-cover object-center"
                src={elem.node.frontmatter.featuredImage.publicURL}
                alt="gadget"
              />
            </div>
            <div className="flex-1 bg-white p-5 md:p-6 flex flex-col justify-between">
              <div className="flex-1">
                <div className="flex">
                  <span
                    className={`inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium leading-5 bg-${elem.node.frontmatter.category_color}-100 text-${elem.node.frontmatter.category_color}-800`}
                  >
                    {elem.node.frontmatter.category}
                  </span>
                </div>

                <Link to={elem.node.fields.slug} className="block text-left">
                  <div className="flex-shrink-0">
                    <h3 className="mt-4 text-xl leading-7 font-semibold text-gray-900">
                      {elem.node.frontmatter.title}
                    </h3>
                  </div>
                </Link>
              </div>
            </div>
            <div className="m-4 flex items-center">
              <div className="ml-3">
                <div className="flex text-sm leading-5 text-gray-500">
                  <time dateTime="2020-03-16">
                    {elem.node.frontmatter.last_updated}
                  </time>
                  <span className="mx-1">&middot;</span>
                  <span>{elem.node.fields.readingTime.text}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

ArticlesGadgetsLayout.propTypes = {
  data: PropTypes.array,
  articleCat: PropTypes.string,
}
export default ArticlesGadgetsLayout
