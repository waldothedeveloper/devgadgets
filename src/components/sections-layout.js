import React from "react"

import Nav from "../pages/Menu/Nav"
import CategoriesLayout from "./categories-layout"
import ArticlesLayout from "./articles-layout"
import Footer from "../pages/Footer/Footer"
import { useGetAllGadgetsArticles } from "../hooks/use-get-all-gadgets-articles"
import { UseReturnCategory } from "../hooks/use-return-category"
//
const SectionLayout = ({ section }) => {
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
      <Nav />
      {secCategory === "lifestyle" ? (
        <div className="relative">
          {/* col-1 */}
          <img
            className="w-full h-screen object-cover md:h-full opacity-25"
            src={secCategory.image}
            alt="figura bonita"
          />

          {/* col-2 */}
          <div className="absolute left-16 top-40">
            <div className="font-black text-gray-700 text-5xl md:text-6xl leading-tight px-6 py-6 md:max-w-lg">
              {secCategory.title}
            </div>
            <div className="px-8 py-2 max-w-md text-base font-semibold text-gray-700 tracking-wide">
              {secCategory.content}
            </div>
          </div>
        </div>
      ) : (
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
                <ArticlesLayout data={data} articleCat={articleCat} />
              </div>
              <div className="md:w-4/12  lg:w-3/12">
                <CategoriesLayout
                  articleCat={articleCat}
                  handleCategory={handleCategory}
                />
              </div>
            </div>
          </div>
        </>
      )}
      <Footer />
    </>
  )
}

export default SectionLayout
