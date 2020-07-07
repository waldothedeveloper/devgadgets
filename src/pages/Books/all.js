import React from "react"
import { useGetAllBookArticles } from "../../hooks/use-get-all-book-articles"
import SectionLayout from "../../components/sections-layout"
//
const AllBooks = props => {
  const data = useGetAllBookArticles()
  // console.log("data: ", data)
  return <SectionLayout section={props.location.state.section} data={data} />
}

export default AllBooks
