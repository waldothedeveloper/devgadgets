import React from "react"
import CoursesArticlesLayout from "./courses-articles-layout"
import Transition from "../components/Transition"
import ChevronUp from "./chevron-up"
import ChevronDown from "./chevron-down"
import { useGetAllCoursesArticles } from "../hooks/use-get-all-courses-articles"
import XlCoursesCategories from "./xl-courses-categories-layout"
import shortid from "shortid"

const CoursesCategoriesLayout = () => {
  const data = useGetAllCoursesArticles()
  const [toogle, setToogle] = React.useState([])
  const [xlCategory, setXlCategory] = React.useState("AWS")

  const handleToogle = id => {
    setToogle(
      toogle.map(elem => {
        if (elem.id === id) {
          return { ...elem, open: !elem.open }
        } else {
          return elem
        }
      })
    )
  }

  React.useEffect(() => {
    setToogle([
      {
        cat: "AWS",
        open: true,
        id: shortid.generate(),
        data: data.filter(elem => elem.node.frontmatter.category === "AWS"),
      },
      {
        cat: "Javascript",
        open: false,
        id: shortid.generate(),
        data: data.filter(
          elem => elem.node.frontmatter.category === "Javascript"
        ),
      },
      {
        cat: "Python",
        open: false,
        id: shortid.generate(),
        data: data.filter(elem => elem.node.frontmatter.category === "Python"),
      },
      {
        cat: "Web Development",
        open: false,
        id: shortid.generate(),
        data: data.filter(
          elem => elem.node.frontmatter.category === "Web Development"
        ),
      },
      {
        cat: "Algorithms & Data Structures",
        open: false,
        id: shortid.generate(),
        data: data.filter(
          elem =>
            elem.node.frontmatter.category === "Algorithms & Data Structures"
        ),
      },
      {
        cat: "Developer Job Interviews",
        open: false,
        id: shortid.generate(),
        data: data.filter(
          elem => elem.node.frontmatter.category === "Developer Job Interviews"
        ),
      },
    ])
  }, [])

  //
  return (
    <div>
      <div>
        <div className="sm:hidden border-b border-gray-400">
          <div className="w-full">
            {toogle.map(elem => (
              <div key={elem.id}>
                <button
                  className="border-t border-gray-400 focus:outline-none w-full px-4 py-2 flex items-center justify-between"
                  onClick={() => handleToogle(elem.id)}
                  type="button"
                  id="options-menu"
                  aria-haspopup="true"
                  aria-expanded="true"
                >
                  <span className="font-bold text-gray-800 leading-7">
                    {elem.cat}
                  </span>
                  {elem.open ? <ChevronUp /> : <ChevronDown />}
                </button>

                <Transition
                  show={elem.open}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0"
                  enterTo="opacity-200"
                  leave="transition ease-in duration-200"
                  leaveFrom="opacity-200"
                  leaveTo="opacity-0"
                >
                  <CoursesArticlesLayout cat={elem.data} />
                </Transition>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="hidden sm:block">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex">
            {toogle.map(elem => (
              <button
                key={elem.id}
                onClick={() => setXlCategory(elem.cat)}
                className={
                  elem.cat === xlCategory
                    ? `btn-active focus:outline-none active:outline-none`
                    : `btn-inactive focus:outline-none hover:text-teal-300 hover:border-teal-100`
                }
              >
                {elem.cat}
              </button>
            ))}
          </nav>
        </div>
        <XlCoursesCategories cat={toogle} xlCat={xlCategory} />
      </div>
    </div>
  )
}

export default CoursesCategoriesLayout
