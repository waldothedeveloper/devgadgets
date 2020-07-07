import React from "react"
import { Link } from "gatsby"
import smartwatch from "../../images/smart-watch.gif"
import coffee from "../../images/coffee.gif"
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
            Tech stuff help people help people, so we've put our best effort in
            a curated, distilled, amazing spectrum of technology that will leave
            you roaring.
          </p>
        </div>

        <div className="mt-10">
          <ul className="md:grid md:grid-cols-2 md:col-gap-8 md:row-gap-10">
            <li>
              <div className="flex">
                <div className="flex-shrink-0">
                  <img
                    src={smartwatch}
                    alt="smart watch"
                    className="h-16 w-auto"
                  />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg leading-6 font-medium text-gray-900">
                    Gadgets for Geeks
                  </h4>
                  <p className="mt-2 text-base leading-6 text-gray-500">
                    The gadgets that will improve your productivity. Routers,
                    mechanic keyboards, mouses, monitors and more.
                  </p>
                  <div className="mt-3">
                    <Link
                      state={{ section: "gadgets" }}
                      to="/gadgets/all"
                      className="text-base leading-6 font-semibold text-teal-600 hover:text-orange-500 transition ease-in-out duration-150 active:text-orange-500 focus:text-orange-500 focus:outline-none"
                    >
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
            </li>
            <li className="mt-10 md:mt-0">
              <div className="flex">
                <div className="flex-shrink-0">
                  <img src={ebook} alt="smart watch" className="h-16 w-auto" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg leading-6 font-medium text-gray-900">
                    Programming Books
                  </h4>
                  <p className="mt-2 text-base leading-6 text-gray-500">
                    A curated collection of the best, always up to date
                    programming books in popular languages like Python,
                    Javascript, Ruby, SQL and more.
                  </p>
                  <div className="mt-3">
                    <Link
                      to="/books/all"
                      state={{ section: "books" }}
                      className="text-base leading-6 font-semibold text-teal-600 hover:text-orange-500 transition ease-in-out duration-150 active:text-orange-500 focus:text-orange-500 focus:outline-none"
                    >
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
            </li>
            <li className="mt-10 md:mt-0">
              <div className="flex">
                <div className="flex-shrink-0">
                  <img
                    src={computer}
                    alt="smart watch"
                    className="h-16 w-auto"
                  />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg leading-6 font-medium text-gray-900">
                    Online Courses
                  </h4>
                  <p className="mt-2 text-base leading-6 text-gray-500">
                    Learn from the best and become the one of the best. Find out
                    what courses from Udemy, Udacity, or FrontEnd Masters can
                    leverage your skills in no time.
                  </p>
                  <div className="mt-3">
                    <Link
                      to="/courses/all"
                      state={{ section: "courses" }}
                      className="text-base leading-6 font-semibold text-teal-600 hover:text-orange-500 transition ease-in-out duration-150 active:text-orange-500 focus:text-orange-500 focus:outline-none"
                    >
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
            </li>
            <li className="mt-10 md:mt-0">
              <div className="flex">
                <div className="flex-shrink-0">
                  <img src={coffee} alt="smart watch" className="h-16 w-auto" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg leading-6 font-medium text-gray-900">
                    Healthy LifeStyle
                  </h4>
                  <p className="mt-2 text-base leading-6 text-gray-500">
                    Feeling tired? bad diet? Learn on this articles the best
                    tips to a healthier work-life balance so you can code like a
                    champion.
                  </p>
                  <div className="mt-3">
                    <Link
                      to="/books/all"
                      state={{ section: "lifestyle" }}
                      className="text-base leading-6 font-semibold text-teal-600 hover:text-orange-500 transition ease-in-out duration-150 active:text-orange-500 focus:text-orange-500 focus:outline-none"
                    >
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Features
