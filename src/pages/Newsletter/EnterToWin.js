import React from "react"

const EnterToWin = () => {
  return (
    <div className="overflow-hidden">
      <div className="mx-auto">
        <div className="mt-6">
          <form
            onSubmit={event => event.preventDefault()}
            className="grid grid-cols-1 row-gap-6"
          >
            <div>
              <label
                htmlFor="fullname"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                Full name
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  aria-label="fullname"
                  id="fullname"
                  type="text"
                  className="form-input py-3 px-4 block w-full transition ease-in-out duration-150"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                Email
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  aria-label="email"
                  id="email"
                  type="email"
                  className="form-input py-3 px-4 block w-full transition ease-in-out duration-150"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <span className="w-full inline-flex rounded-md shadow-sm">
                <button
                  type="button"
                  className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-teal-600 hover:bg-teal-500 focus:outline-none focus:border-teal-700 focus:shadow-outline-teal active:bg-teal-700 transition ease-in-out duration-150"
                >
                  I&apos;m ready for my prize!
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EnterToWin
