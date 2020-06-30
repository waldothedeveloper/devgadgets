import React from "react"
import Transition from "../../components/Transition"
const TechnologyBlogDefinition = ({ open }) => {
  return (
    <Transition
      show={open}
      enter="transition ease-out duration-500"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition ease-in duration-500"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="relative">
        <div className="absolute transform translate-x-3/12 -mt-6 -ml-16 md:mt-1 md:ml-4 px-2 w-screen max-w-xs sm:px-0">
          <div className="rounded-lg shadow-lg">
            <div className="rounded-lg shadow-xs overflow-hidden">
              <div className="bg-gray-700 z-20 relative px-6 py-6">
                <div className="-m-3 p-3 flex flex-col align-between space-y-1 rounded-md transition ease-in-out duration-150">
                  <p className="text-sm leading-5 text-gray-200">
                    "A blog, also known as a weblog, is a website that is like a
                    diary or journal. Bloggers (a word for people who write on
                    blogs) often write about their opinions and thoughts."
                  </p>
                  <p className="pt-4 text-right text-sm leading-5 text-gray-400">
                    Source: Wikipedia.org
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  )
}

export default TechnologyBlogDefinition
