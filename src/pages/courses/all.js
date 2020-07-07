import React from "react"
import { useGetAllCoursesArticles } from "../../hooks/use-get-all-courses-articles"
import SectionLayout from "../../components/sections-layout"
//
const AllCourses = props => {
  const data = useGetAllCoursesArticles()

  return <SectionLayout section={props.location.state.section} data={data} />
}

export default AllCourses
