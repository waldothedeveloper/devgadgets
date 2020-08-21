import algoliasearch from "algoliasearch/lite"
import React from "react"
import { InstantSearch } from "react-instantsearch-dom"
import { CustomSearchBox } from "./search-box"
import { CustomHits } from "./search-results"

export default function Search() {
  const searchClient = algoliasearch(
    process.env.GATSBY_ALGOLIA_APP_ID,
    process.env.GATSBY_ALGOLIA_SEARCH_KEY
  )

  return (
    <InstantSearch searchClient={searchClient} indexName="devgadgets_prod">
      <div className="relative">
        <CustomSearchBox />
        <CustomHits />
      </div>
    </InstantSearch>
  )
}
