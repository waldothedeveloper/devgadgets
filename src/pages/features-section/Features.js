import React from "react"
import { Link } from "gatsby"
import smartwatch from "../../images/smart-watch.gif"
// import coffee from "../../images/coffee.gif"
import ebook from "../../images/ebook-reader.gif"
import computer from "../../images/computer-display.gif"

const Features = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="text-base leading-6 text-teal-600 font-semibold tracking-wide uppercase">
            So what is this about?
          </p>
          <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            You’ve got questions, we’ve got answers.
          </h3>
          <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
            Tech stuff help people help people, so we&apos;ve put our best
            effort in a curated, distilled, amazing spectrum of technology that
            will leave you roaring.
          </p>
        </div>

        <div className="py-12 bg-white">
          <div className="max-w-xl lg:mx-auto px-4 sm:px-6 lg:max-w-screen-xl lg:px-8">
            <div className="lg:grid lg:grid-cols-3 lg:gap-8">
              <div>
                <div className="flex items-start justify-start">
                  <img
                    src={smartwatch}
                    alt="smart watch"
                    className="h-16 w-16"
                  />
                </div>
                <div className="mt-5">
                  <h5 className="text-lg leading-6 font-medium text-gray-900">
                    Gadgets for Geeks
                  </h5>
                  <p className="mt-2 text-base leading-6 text-gray-500">
                    The gadgets that will improve your productivity. Routers,
                    mechanic keyboards, mouses, monitors and more.
                  </p>
                </div>
                <div className="mt-3">
                  <Link
                    state={{ featCategory: "gadgets" }}
                    to="/gadgets/all"
                    className="text-base leading-6 font-semibold text-teal-600 hover:text-orange-500 transition ease-in-out duration-150 active:text-orange-500 focus:text-orange-500 focus:outline-none"
                  >
                    Discover gadgets
                  </Link>
                </div>
              </div>
              <div className="mt-10 lg:mt-0">
                <div className="flex items-start justify-start">
                  <img src={ebook} alt="ebook" className="h-16 w-16" />
                </div>
                <div className="mt-5">
                  <h5 className="text-lg leading-6 font-medium text-gray-900">
                    Programming Books
                  </h5>
                  <p className="mt-2 text-base leading-6 text-gray-500">
                    A curated collection of the best, always up to date
                    programming books in popular languages like Python,
                    Javascript, Ruby, SQL and more.
                  </p>
                  <div className="mt-3">
                    <Link
                      state={{ featCategory: "books" }}
                      to="/books/all"
                      className="text-base leading-6 font-semibold text-teal-600 hover:text-orange-500 transition ease-in-out duration-150 active:text-orange-500 focus:text-orange-500 focus:outline-none"
                    >
                      Discover books
                    </Link>
                  </div>
                </div>
              </div>
              <div className="mt-10 lg:mt-0">
                <div className="flex items-start justify-start">
                  <img src={computer} alt="computer" className="h-16 w-16" />
                </div>
                <div className="mt-5">
                  <h5 className="text-lg leading-6 font-medium text-gray-900">
                    Online Courses
                  </h5>
                  <p className="mt-2 text-base leading-6 text-gray-500">
                    Leverage your skills in no time with the best courses from
                    Udemy, Udacity, or FrontEnd-Masters.
                  </p>
                  <div className="mt-3">
                    <Link
                      to="/courses/all"
                      state={{ featCategory: "courses" }}
                      className="text-base leading-6 font-semibold text-teal-600 hover:text-orange-500 transition ease-in-out duration-150 active:text-orange-500 focus:text-orange-500 focus:outline-none"
                    >
                      Discover courses
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features
