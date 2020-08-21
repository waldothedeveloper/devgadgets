import React from "react"
import { connectSearchBox } from "react-instantsearch-dom"
import PropTypes from "prop-types"

//
const SearchBox = ({ refine, currentRefinement }) => (
  <form onSubmit={e => e.preventDefault()}>
    <label htmlFor="search_field" className="sr-only">
      Search
    </label>
    <div className="relative w-full text-cool-gray-400 focus-within:text-cool-gray-600">
      <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none pl-2">
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
          />
        </svg>
      </div>
      <input
        type="search"
        value={currentRefinement}
        onChange={e => refine(e.currentTarget.value)}
        className="block w-full h-full pl-8 pr-3 py-2 rounded-md text-cool-gray-900 placeholder-cool-gray-400 focus:outline-none focus:bg-cool-gray-100 focus:placeholder-cool-gray-200 sm:text-sm"
        placeholder="Search"
      />
    </div>
  </form>
)

SearchBox.propTypes = {
  refine: PropTypes.func.isRequired,
  currentRefinement: PropTypes.string,
}

export const CustomSearchBox = connectSearchBox(SearchBox)
