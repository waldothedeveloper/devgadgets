import React from "react"
import { Link } from "gatsby"
// import { getCloudinaryFeaturedImages } from "../../hooks/get-cloudinary-featured-images"
// import smartWatch from "../../images/smart-watch.gif"
import smartWatchWebM from "../../images/smart-watch.webm"
import smartWatchMp4 from "../../images/smart-watch.mp4"
// import ebook from "../../images/ebook-reader.gif"
import eBookReaderWebM from "../../images/ebook-reader.webm"
import eBookReaderMp4 from "../../images/ebook-reader.mp4"

const Features = () => {
  // const data = getCloudinaryFeaturedImages()

  return (
    <div className="py-6 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="text-base leading-6 text-teal-600 font-semibold tracking-wide uppercase">
            So what is this about?
          </p>
          <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            You’ve got questions, we’ve got answers.
          </h2>
          <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
            Technology often comes to the rescue, so we&apos;ve put our best
            effort in a curated, distilled, amazing spectrum of technology that
            will leave you roaring.
          </p>
        </div>

        <div className="py-6 bg-white">
          <div className="max-w-xl lg:mx-auto px-4 sm:px-6 lg:max-w-screen-xl lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8">
              <div>
                <div className="flex items-start justify-start">
                  <video className="h-16 w-16" autoPlay loop muted playsInline>
                    <source src={smartWatchWebM} type="video/webm" />
                    <source src={smartWatchMp4} type="video/mp4" />
                  </video>
                  {/* <img
                    className="h-16 w-16"
                    src={smartWatch}
                    alt="smart-watch"
                  /> */}
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
                  {/* <img className="h-16 w-16" src={ebook} alt="ebook" /> */}

                  <video className="h-16 w-16" autoPlay loop muted playsInline>
                    <source src={eBookReaderWebM} type="video/webm" />
                    <source src={eBookReaderMp4} type="video/mp4" />
                  </video>
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
              {/* Courses will come SOON */}
              {/* <div className="mt-10 lg:mt-0">
                <div className="flex items-start justify-start">
                  <video
                    className="h-16 w-16"
                    playsInline
                    autoPlay
                    loop
                    muted="muted"
                    poster={data.computer.secure_url.replace("gif", "jpg")}
                  >
                    <source
                      type="video/webm"
                      src={data.computer.secure_url.replace("gif", "webm")}
                    />
                    <source
                      type="video/mp4"
                      src={data.computer.secure_url.replace("gif", "mp4")}
                    />
                    Your browser does not support HTML5 video tag.
                  </video>
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
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features
