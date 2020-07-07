import React from "react"
// import { useGetAllLifeStyleArticles } from "../../hooks/use-get-all-lifestyle-articles"
import SectionLayout from "../../components/sections-layout"
//
const AllLifeStyle = props => {
  // const data = useGetAllLifeStyleArticles()

  return <SectionLayout section={props.location.state.section} />
}

export default AllLifeStyle
