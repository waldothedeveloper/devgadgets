import React from "react"
import { connectSearchBox } from "react-instantsearch-dom"
import PropTypes from "prop-types"

//
const SearchBox = ({ refine, currentRefinement }) => (
  <form
    className="w-screen max-w-xs mx-auto"
    onSubmit={e => e.preventDefault()}
  >
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
      <label htmlFor="search_field" className="sr-only">
        Search
      </label>
      <input
        type="text"
        value={currentRefinement}
        onChange={e => refine(e.currentTarget.value)}
        className="block w-full h-full pl-8 pr-3 py-2 rounded-md text-cool-gray-900 placeholder-cool-gray-400 bg-cool-gray-50 focus:outline-none focus:bg-cool-gray-100 focus:placeholder-cool-gray-200 sm:text-sm"
        placeholder="Search devgadgets.io"
      />
      <div className="absolute inset-y-0 right-0 flex items-center pr-3">
        {currentRefinement !== "" ? (
          <button className="focus:outline-none" onClick={() => refine("")}>
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        ) : null}
      </div>
    </div>
  </form>
)

SearchBox.propTypes = {
  refine: PropTypes.func.isRequired,
  currentRefinement: PropTypes.string,
}

export const CustomSearchBox = connectSearchBox(SearchBox)
