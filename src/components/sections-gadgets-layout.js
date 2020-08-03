import React from "react"
import CategoriesGadgetsLayout from "./categories-gadgets-layout"
import ArticlesGadgetsLayout from "./articles-gadgets-layout"
import { useGetAllGadgetsArticles } from "../hooks/use-get-all-gadgets-articles"
import { UseReturnCategory } from "../hooks/use-return-category"
import PropTypes from "prop-types"
//
const SectionGadgetsLayout = ({ section }) => {
  const data = useGetAllGadgetsArticles()
  const secCategory = UseReturnCategory(section)

  const [articleCat, setArticleCat] = React.useState("All")

  const handleCategory = cat => {
    setArticleCat(cat.category)
  }

  const handleSelectCategory = event => {
    setArticleCat(event.target.value)
  }

  //
  return (
    <>
      <div className="mt-24 mx-3 md:mx-0">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-8/12  lg:w-9/12">
            <div>
              <div className="font-semibold text-4xl md:text-5xl leading-tight px-8 py-4">
                {secCategory.title}
              </div>
              <div className="px-8 pb-8 text-base text-gray-400 tracking-wide max-w-sm">
                {secCategory.content}
              </div>
            </div>
            <div className="sm:hidden mt-2 pb-6">
              <select
                value={articleCat}
                onChange={handleSelectCategory}
                onBlur={handleSelectCategory}
                aria-label="Selected tab"
                className="form-select block w-full"
              >
                <option value="All">All</option>
                <option value="keyboards">Keyboards</option>
                <option value="headphones">Headphones</option>
                <option value="monitors">Monitors</option>
                <option value="iot">IOT</option>
                <option value="office">Office</option>
                <option value="usb">USB</option>
              </select>
            </div>
            <ArticlesGadgetsLayout data={data} articleCat={articleCat} />
          </div>
          <div className="md:w-4/12  lg:w-3/12">
            <CategoriesGadgetsLayout
              articleCat={articleCat}
              handleCategory={handleCategory}
            />
          </div>
        </div>
      </div>
    </>
  )
}

SectionGadgetsLayout.propTypes = {
  section: PropTypes.object,
}
export default SectionGadgetsLayout
