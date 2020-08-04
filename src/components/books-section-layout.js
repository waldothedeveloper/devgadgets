import React from "react"
import BookArticlesLayout from "./books-articles-layout"
import BooksCategories from "./books-categories"
//
const BooksSectionLayout = () => {
  const [selectCategory, setSelectCategory] = React.useState("All")

  const handleCategory = elem => {
    setSelectCategory(elem.category)
  }

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

export default BooksSectionLayout
