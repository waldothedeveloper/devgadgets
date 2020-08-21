import React from "react"
// import { instructorsBio } from "../utils/instructors"
import { useGetInstructors } from "../hooks/use-get-instructors"
import { Link } from "gatsby"

//
const Instructors = () => {
  const data = useGetInstructors()

  //
  return (
    <div className="py-12 bg-teal-900">
      <div className="py-12 mx-5 md:mx-8">
        <h2 className="text-4xl leading-9 tracking-tight font-bold text-gray-50 sm:text-5xl sm:leading-10">
          Top world instructors
        </h2>
        <p className="mt-3 text-xl lg:max-w-lg leading-7 text-gray-400 sm:mt-4">
          Loved. Admired. <br /> Check out their quality content, outstanding
          experience, and invaluable contributions to the dev&apos;s community.
        </p>
      </div>
      <ul className="mx-5 mb-12 grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-4">
        {data.map(elem => {
          return (
            <li
              key={elem.node.id}
              className="bg-gray-50 col-span-1 flex flex-col text-center rounded-lg shadow"
            >
              <div className="flex-1 flex flex-col p-8">
                <img
                  className="w-32 h-32 flex-shrink-0 mx-auto bg-black rounded-full"
                  src={elem.node.frontmatter.image.publicURL}
                  alt=""
                />
                <h3 className="mt-6 text-gray-900 text-sm leading-5 font-medium">
                  {elem.node.frontmatter.instructor_name}
                </h3>
                <dl className="mt-1 flex-grow flex flex-col justify-between">
                  <dt className="sr-only">Title</dt>
                  <dd className="text-gray-500 text-sm leading-5">
                    {elem.node.frontmatter.about.substring(0, 110)}...
                  </dd>
                  <dt className="sr-only">Role</dt>
                  {/* <dd className="mt-3">
                    {elem.skills.map((e, id) => (
                      <span
                        key={id}
                        className={`mx-1 px-2 py-1 text-${e.color}-800 text-xs leading-4 font-medium bg-${e.color}-100 rounded-full`}
                      >
                        {e.name}
                      </span>
                    ))}
                  </dd> */}
                </dl>
              </div>
              <div className="border-t border-gray-200">
                <div className="-mt-px flex">
                  <div className="-ml-px w-0 flex-1 flex">
                    <Link
                      to={elem.node.fields.slug}
                      state={{
                        name: elem.node.frontmatter.instructor_name,
                      }}
                      className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm leading-5 text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-teal-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 transition ease-in-out duration-150"
                    >
                      Discover
                    </Link>
                  </div>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Instructors
