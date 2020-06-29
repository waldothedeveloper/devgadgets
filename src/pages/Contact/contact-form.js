import React from "react"
import email from "../../images/email.jpeg"
import email_mobile from "../../images/email_mobile.svg"

const ContactForm = () => {
  return (
    <div className="mb-32 mt-12 flex flex-col md:flex-row items-center">
      <div className="hidden md:block md:w-3/6">
        <img className="h-full w-full" src={email} alt="Email girl" />
      </div>
      <div className="md:hidden md:w-3/6">
        <img className="h-40 w-full" src={email_mobile} alt="Email girl" />
      </div>
      <div className="md:w-3/6 pt-12 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="">
          <div className="max-w-md mx-auto sm:max-w-lg lg:mx-0">
            <h2 className="text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl sm:leading-10 text-teal-500">
              Community Care Team!
            </h2>
            <p className="mt-4 text-lg leading-7 text-gray-500 sm:mt-3">
              At Dev-Gadgets I'm always looking for opportunities to connect
              with my audience, I anwer all of my emails, so don't be shy and
              send me your suggestions or a love letter.
            </p>
            <form
              onSubmit={e => e.preventDefault()}
              className="mt-9 grid grid-cols-1 row-gap-6 sm:grid-cols-2 sm:col-gap-8"
            >
              <div className="sm:col-span-2">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-5 text-gray-700"
                >
                  Name
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input
                    id="name"
                    className="form-input block w-full transition ease-in-out duration-150 sm:text-sm sm:leading-5"
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
                    id="email"
                    type="email"
                    className="form-input block w-full transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <div className="flex justify-between">
                  <label
                    htmlFor="how_can_we_help"
                    className="block text-sm font-medium leading-5 text-gray-700"
                  >
                    Let your imagination fly...
                  </label>
                  <span className="text-sm leading-5 text-gray-500">
                    Max. 500 characters
                  </span>
                </div>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <textarea
                    id="how_can_we_help"
                    rows="4"
                    className="form-textarea block w-full transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                  ></textarea>
                </div>
              </div>
              <div className="text-right sm:col-span-2">
                <span className="inline-flex rounded-md shadow-sm">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-teal-600 hover:bg-teal-500 focus:outline-none focus:border-teal-700 focus:shadow-outline-teal active:bg-teal-700 transition duration-150 ease-in-out"
                  >
                    Submit
                  </button>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
