import React from "react"
import amazon from "../../images/amazon-logo.svg"

const HolidayDash = () => {
  return (
    <div className="bg-white">
      <div className="max-w-screen-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="shadow-2xl bg-yellow-300 rounded-lg overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
          <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
            <div className="lg:self-center">
              <h2 className="text-3xl leading-9 font-extrabold text-red-700 sm:text-4xl sm:leading-10">
                <span className="block">Hop on the Christmas Amazon Dash.</span>
              </h2>
              <p className="mt-4 text-md leading-6 text-teal-600">
                Surprise the family, friends, or your pet with epic daily deals.
              </p>
              {/* Amazon button buy */}
              <div className="max-w-xs my-6 lg:flex lg:items-center">
                <div className="w-full">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://amzn.to/3eLDJ5d"
                    className="rounded-full shadow-lg flex flex-col items-center text-center px-3 pt-1 pb-2 border border-transparent text-sm leading-6 font-medium text-white bg-teal-600 hover:bg-teal-800 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
                  >
                    <span className="leading-7 text-white">Discover it on</span>{" "}
                    <div className="mt-0.5">
                      <img
                        className="w-auto h-6"
                        src={amazon}
                        alt="amazon logo"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="relative pb-3/5 -mt-6 md:pb-1/2">
            <img
              className="absolute inset-0 w-full h-full transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
              src="https://images.unsplash.com/photo-1511268011861-691ed210aae8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Christmas Holidays"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HolidayDash
