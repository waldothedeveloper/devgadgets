import React from "react"
import BookArticlesLayout from "./books-articles-layout"
import BooksCategories from "./books-categories"
import PropTypes from "prop-types"
//
const BooksSectionLayout = ({ category }) => {
  // console.log("category: ", category)
  const [selectCategory, setSelectCategory] = React.useState("All")
  // console.log("selectCategory: ", selectCategory)

  const handleCategory = elem => {
    setSelectCategory(elem.category)
  }

  React.useEffect(() => {
    const sub = category.subCategory ? category.subCategory : "All"

    if (sub && sub === "Javascript") {
      setSelectCategory(sub)
    } else if (sub && sub === "Ruby") {
      setSelectCategory(sub)
    } else if (sub && sub === "Python") {
      setSelectCategory(sub)
    } else if (sub && sub === "C#") {
      setSelectCategory(sub)
    } else if (sub && sub === "SQL") {
      setSelectCategory(sub)
    } else if (sub && sub === "React") {
      setSelectCategory(sub)
    } else {
      setSelectCategory("All")
    }
  }, [category])

  return (
    <div className="mt-24 mb-12 mx-4">
      <BooksCategories
        handleCategory={handleCategory}
        selectCategory={selectCategory}
      />
      <BookArticlesLayout selectCategory={selectCategory} />
    </div>
  )
}

BooksSectionLayout.propTypes = {
  category: PropTypes.object.isRequired,
}
export default BooksSectionLayout
