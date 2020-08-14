import React from "react"
import CoursesCategoriesLayout from "./courses-categories-layout"
import man_video from "../images/man_video.jpeg"
import Instructors from "./instructors"
// import CoursesStats from "../pages/courses/stats"

const CoursesSectionLayout = () => {
  return (
    <div className="mt-24">
      <div className="flex items-center rounded-full shadow-xl">
        <div className="h-72">
          <img
            src={man_video}
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>

      <div className="flex flex-col items-start mx-5 md:mx-8 my-12">
        <h2 className="text-4xl leading-9 tracking-tight font-bold text-gray-900 sm:text-5xl sm:leading-10">
          Online Courses
        </h2>
        <p className="mt-3 text-xl lg:max-w-md leading-7 text-teal-500 sm:mt-4">
          Choose any topic. <br />{" "}
          <span className="text-teal-500">We add more every month.</span>
        </p>
      </div>
      <CoursesCategoriesLayout />
      <Instructors />
      {/* <CoursesStats /> */}
    </div>
  )
}

export default CoursesSectionLayout
