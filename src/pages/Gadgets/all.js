import React from "react"
import { useGetAllGadgetsArticles } from "../../hooks/use-get-all-gadgets-articles"
import SectionLayout from "../../components/sections-layout"
//
const AllGadgets = props => {
  const data = useGetAllGadgetsArticles()
  // console.log("data: ", data)
  return <SectionLayout section={props.location.state.section} data={data} />
}

export default AllGadgets
