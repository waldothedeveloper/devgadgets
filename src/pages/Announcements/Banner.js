import React from "react"
import Transition from "../../components/Transition"
import { Link } from "gatsby"

const Banner = () => {
  const [open, setOpen] = React.useState(true)

  const handleBanner = () => {
    setOpen(false)
  }

  return (
    <>
      {open ? (
        <Transition
          show={open}
          enter="transition ease-out duration-1000"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition ease-in duration-1000"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="mt-24 relative bg-gray-900">
            <div className="max-w-screen-xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
              <div className="pr-16 sm:text-center sm:px-16">
                <p className="font-medium text-white">
                  <span className="font-bold text-orange-500">
                    #BLACKLIVESMATTER &nbsp; &nbsp;
                  </span>
                  <span className="inline">
                    It is time to come together and united as one human race.
                    &nbsp;&nbsp;
                  </span>
                  <span className="block sm:ml-2 sm:inline-block">
                    <Link
                      to="/black-lives-matter/"
                      className="text-teal-300 font-bold underline text-sm"
                    >
                      Learn more &rarr;
                    </Link>
                  </span>
                </p>
              </div>
              <div className="absolute inset-y-0 right-0 pt-1 pr-1 flex items-start sm:pt-1 sm:pr-2 sm:items-start">
                <button
                  onClick={handleBanner}
                  type="button"
                  className="flex p-2 rounded-md hover:bg-orange-500 focus:outline-none focus:bg-orange-500 transition ease-in-out duration-150"
                  aria-label="Dismiss"
                >
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </Transition>
      ) : (
        <div className="mt-24"></div>
      )}
    </>
  )
}

export default Banner
