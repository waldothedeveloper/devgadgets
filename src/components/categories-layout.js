import React from "react"
import { motion } from "framer-motion"
import "../css/hidescrollbar.css"
import { useGetAllArticles } from "../hooks/use-get-all-articles"
import ArticlesLayout from "./articles-layout"

const CategoriesLayout = ({ secCategory }) => {
  const data = useGetAllArticles()
  const [articles, setArticles] = React.useState([])
  const [subCategory, setSubCategory] = React.useState([])
  const [articleCat, setArticleCat] = React.useState("All")

  //
  React.useEffect(() => {
    // filter data per category
    const newData = data.filter(
      elem =>
        elem.node.frontmatter.article_category === secCategory.article_category
    )
    setArticles(newData)
  }, [data, secCategory])

  // getting the article categories with All included
  React.useEffect(() => {
    const newData = articles.map(elem => {
      return {
        category: elem.node.frontmatter.category,
        category_color: elem.node.frontmatter.category_color,
        id: elem.node.id,
      }
    })

    newData.unshift({
      category: "All",
      category_color: "gray",
      id: "zzd9d6ba-2c74-fdfs-af3f-234eg345dfg34t",
    })

    setSubCategory(newData)
  }, [articles])

  const handleCategory = cat => {
    setArticleCat(cat.category)
  }

  const handleSelectCategory = event => {
    setArticleCat(event.target.value)
  }

  return (
    <>
      <div className="mt-24 mx-5">
        <div className="relative max-w-lg lg:max-w-7xl">
          <div>
            <div className="ml-2 mt-3 sm:mt-4">
              <p className="text-sm leading-7 text-teal-400 font-semibold">
                Choose any category to find what you want.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className="sm:hidden mt-2 pb-6">
              <select
                value={articleCat}
                onChange={handleSelectCategory}
                onBlur={handleSelectCategory}
                aria-label="Selected tab"
                className="form-select block w-full"
              >
                {subCategory.map(elem => (
                  <option value={elem.category} key={elem.id}>
                    {elem.category}
                  </option>
                ))}
              </select>
            </div>
            <ul
              id="scrolling_wrapper"
              className="hidden pt-2 pb-12 md:grid md:gap-5 md:grid-cols-4"
            >
              {subCategory.map(elem => (
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleCategory(elem)}
                  key={elem.id}
                  className={
                    elem.category === articleCat
                      ? `mx-2 group border border-gray-200 rounded-md shadow-lg bg-${elem.category_color}-600 focus:bg-${elem.category_color}-600`
                      : `mx-2 group border border-gray-200 rounded-md shadow-lg`
                  }
                >
                  <li
                    className={
                      elem.category === articleCat
                        ? `hover:bg-${elem.category_color}-600 group-focus:bg-${elem.category_color}-600 w-full flex items-center`
                        : `hover:bg-${elem.category_color}-600 w-full flex items-center`
                    }
                  >
                    <div
                      className={
                        elem.category === articleCat
                          ? `flex-shrink-0 flex items-center justify-center w-16 h-16 text-white text-center text-5xl bg-${elem.category_color}-600`
                          : `flex-shrink-0 flex items-center justify-center w-16 h-16 text-center text-5xl bg-${elem.category_color}-600`
                      }
                    >
                      {elem.category.slice(0, 1)}
                    </div>
                    <div className="px-4 py-2">
                      <div
                        className={
                          elem.category === articleCat
                            ? `text-white group-focus:text-white group-hover:text-white text-sm leading-5 font-medium hover:text-gray-600 transition ease-in-out duration-150`
                            : `text-gray-900 text-sm leading-5 font-medium transition ease-in-out duration-150`
                        }
                      >
                        {elem.category}
                      </div>
                    </div>
                  </li>
                </motion.button>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <ArticlesLayout data={articles} articleCat={articleCat} />
    </>
  )
}

export default CategoriesLayout
