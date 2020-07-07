import React from "react"

const GadgetsCategoriesLayout = () => {
  return (
    <>
      <nav className="mt-24 flex items-center justify-between mx-4">
        {/* content */}
        <div className="overflow-hidden">
          <div className="flex">
            <div className="mx-1 inline-flex items-baseline px-3 py-0.5 rounded-full text-sm font-medium leading-5 bg-yellow-100 text-yellow-800 md:mt-2 lg:mt-0">
              JAVASCRIPT
            </div>
            <div className="mx-1 inline-flex items-baseline px-3 py-0.5 rounded-full text-sm font-medium leading-5 bg-red-100 text-red-800 md:mt-2 lg:mt-0">
              RUBY
            </div>
            <div className="mx-1 inline-flex items-baseline px-3 py-0.5 rounded-full text-sm font-medium leading-5 bg-indigo-100 text-indigo-800 md:mt-2 lg:mt-0">
              PHYTON
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default GadgetsCategoriesLayout
