import React from "react"
import CoursesCategoriesLayout from "./courses-categories-layout"
import man_video from "../images/man_video.jpeg"
import Instructors from "./instructors"
import { getCloudinaryManVideo } from "../hooks/get-cloudinary-man-video"
// import CoursesStats from "../pages/courses/stats"

const CoursesSectionLayout = () => {
  const data = getCloudinaryManVideo()

  return (
    <div className="mt-24">
      <div className="flex items-center rounded-full shadow-xl">
        <div className="h-72">
          <img
            src={data && data.man_video ? data.man_video.secure_url : man_video}
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>

      <div className="flex flex-col items-start mx-5 md:mx-8 my-12">
        <h2 className="text-4xl leading-9 tracking-tight font-bold text-gray-900 sm:text-5xl sm:leading-10">
          Online Courses
        </h2>
        <p className="mt-3 text-xl lg:max-w-md leading-7 text-gray-400 sm:mt-4">
          Pick any topic, anytime. We add new courses every month following a
          rigorous, curated process. To show you the best, so you can become one
          of the best.
        </p>
      </div>
      <CoursesCategoriesLayout />
      <Instructors />
      {/* <CoursesStats /> */}
    </div>
  )
}

export default CoursesSectionLayout
