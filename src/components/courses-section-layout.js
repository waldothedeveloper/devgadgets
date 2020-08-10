import React from "react"
import CoursesCategoriesLayout from "./courses-categories-layout"
import man_video from "../images/man_video.jpeg"
// import CoursesStats from "../pages/courses/stats"

const CoursesSectionLayout = () => {
  return (
    <div className="mt-24">
      <div className="flex flex-col items-center md:flex-row md:mx-12">
        <div className="mx-2 md:w-2/4 lg:pl-6">
          <div className="mt-6 mx-5 mb-2">
            <h2 className="text-4xl leading-9 tracking-tight font-bold text-gray-900 sm:text-5xl sm:leading-10">
              Online Courses
            </h2>
            <p className="mt-3 text-xl lg:max-w-md leading-7 text-gray-500 sm:mt-4">
              Choose any of the curated topics to learn what you are interested
              as we add new topics.
            </p>
          </div>
        </div>

        <div className="px-4 md:w-2/4 lg:w-2/4l lg:px-12">
          <img src={man_video} className="h-full w-full object-cover" />
        </div>
      </div>
      {/* <CoursesStats /> */}
      <div className="my-6 mx-6 md:mx-20 text-left">
        <h2 className="text-2xl leading-9 text-gray-800 sm:leading-10">
          Time to choose what to learn
        </h2>
        <p className="mt-3 text-xl leading-7 text-gray-300 sm:mt-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus
          repellat laudantium.
        </p>
      </div>
      <CoursesCategoriesLayout />
    </div>
  )
}

export default CoursesSectionLayout
