import React from "react"
import { useGetAllGadgetsArticles } from "../../hooks/use-get-all-gadgets-articles"
import SectionLayout from "../../components/sections-layout"
//
const AllGadgets = ({ location }) => {
  const data = useGetAllGadgetsArticles()

  return <SectionLayout section={location.state} data={data} />
}

export default AllGadgets
