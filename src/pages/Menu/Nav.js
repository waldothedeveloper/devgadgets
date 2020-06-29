import React from "react"
import Transition from "../../components/Transition"
import devgadgetslogo from "../../images/logo-teal-3.svg"
import keyboard from "../../images/keyboard.gif"
import headphones from "../../images/headphones.gif"
import computer_display from "../../images/computer-display.gif"
import robot from "../../images/robot.gif"
import truck from "../../images/truck.gif"
import plug from "../../images/plug.gif"

const Nav = () => {
  const [openGadgets, setOpenGadgets] = React.useState(false)
  const [openBooks, setOpenBooks] = React.useState(false)
  const [menuMobile, setMenuMobile] = React.useState(false)

  const handleGadgets = () => {
    setOpenGadgets(!openGadgets)
  }

  const handleBooks = () => {
    setOpenBooks(!openBooks)
  }

  const handleMenuMobile = () => {
    setMenuMobile(!menuMobile)
  }

  return (
    <div className="z-50 fixed w-full top-0 bg-white">
      <div className="flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10">
        <div>
          <button className="flex">
            <img
              className="h-8 w-auto sm:h-10"
              src={devgadgetslogo}
              alt="Workflow"
            />
          </button>
        </div>
        <div className="-mr-2 -my-2 md:hidden">
          <button
            onClick={handleMenuMobile}
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-teal-400 hover:text-teal-500 hover:bg-teal-100 focus:outline-none focus:bg-teal-100 focus:text-gray-500 transition duration-150 ease-in-out"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <div className="hidden md:flex-1 md:flex md:items-center md:justify-between md:space-x-12">
          <nav className="flex space-x-10">
            <div className="relative">
              {/* Item active: "text-gray-900", Item inactive: "text-gray-500" */}
              <button
                onClick={handleGadgets}
                type="button"
                className="group text-gray-500 inline-flex items-center space-x-2 text-base leading-6 font-medium hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150"
              >
                <span>Gadgets</span>
                {/* Item active: "text-gray-600", Item inactive: "text-gray-400" */}
                <svg
                  className="text-gray-400 h-5 w-5 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {/*   'Gadgets' flyout menu, show/hide based on flyout menu state.
                      Entering: "transition ease-out duration-200"
                      From: "opacity-0 translate-y-1"
                      To: "opacity-100 translate-y-0"
                      Leaving: "transition ease-in duration-150"
                      From: "opacity-100 translate-y-0"
                      To: "opacity-0 translate-y-1" */}
              <Transition
                show={openGadgets}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <div className="absolute -ml-4 mt-3 transform w-screen max-w-md lg:max-w-3xl">
                  <div className="rounded-lg shadow-lg">
                    <div className="rounded-lg shadow-xs overflow-hidden">
                      <div className="z-20 relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                        <button className="focus:outline-none -m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-teal-100 transition ease-in-out duration-150">
                          <img
                            src={keyboard}
                            alt="smart watch"
                            className="h-12 w-auto"
                          />
                          <div className="space-y-1">
                            <p className="text-base leading-6 font-medium text-gray-900">
                              Keyboards
                            </p>
                            <p className="text-sm leading-5 text-gray-500">
                              From the mechanical era to the silent
                              perfectionists.
                            </p>
                          </div>
                        </button>
                        <button className="focus:outline-none -m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-teal-100 transition ease-in-out duration-150">
                          <img
                            src={headphones}
                            alt="headphones"
                            className="h-12 w-auto"
                          />
                          <div className="space-y-1">
                            <p className="text-base leading-6 font-medium text-gray-900">
                              Headphones
                            </p>
                            <p className="text-sm leading-5 text-gray-500">
                              Can you hear me now?...Good, I was worried with
                              those headphones
                            </p>
                          </div>
                        </button>
                        <button className="focus:outline-none -m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-teal-100 transition ease-in-out duration-150">
                          <img
                            src={computer_display}
                            alt="computer display"
                            className="h-12 w-auto"
                          />
                          <div className="space-y-1">
                            <p className="text-base leading-6 font-medium text-gray-900">
                              Monitors
                            </p>
                            <p className="text-sm leading-5 text-gray-500">
                              From the iluminati visioners to the do-the-work
                              budget tight.
                            </p>
                          </div>
                        </button>
                        <button className="focus:outline-none -m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-teal-100 transition ease-in-out duration-150">
                          <img
                            src={robot}
                            alt="robot"
                            className="h-12 w-auto"
                          />
                          <div className="space-y-1">
                            <p className="text-base leading-6 font-medium text-gray-900">
                              IOT Devices
                            </p>
                            <p className="text-sm leading-5 text-gray-500">
                              Feeling lonely?...Talk to Alexa, ask Google, meet
                              Siri at the park?
                            </p>
                          </div>
                        </button>
                        <button className="focus:outline-none -m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-teal-100 transition ease-in-out duration-150">
                          <img
                            src={truck}
                            alt="truck"
                            className="h-12 w-auto"
                          />
                          <div className="space-y-1">
                            <p className="text-base leading-6 font-medium text-gray-900">
                              Office Desk & Chairs
                            </p>
                            <p className="text-sm leading-5 text-gray-500">
                              You back hurts, your elbows, your neck, your
                              body....ouch! We've got you.
                            </p>
                          </div>
                        </button>
                        <button className="focus:outline-none -m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-teal-100 transition ease-in-out duration-150">
                          <img
                            src={plug}
                            alt="electrical plug"
                            className="h-12 w-auto"
                          />
                          <div className="space-y-1">
                            <p className="text-base leading-6 font-medium text-gray-900">
                              USB Devices
                            </p>
                            <p className="text-sm leading-5 text-gray-500">
                              In a hurry? Charge it all at once, even your hot
                              girlfriend or boyfriend.
                            </p>
                          </div>
                        </button>
                      </div>
                      {/* <div className="p-5 bg-gray-50 sm:p-8">
                        <button className="-m-3 p-3 flow-root space-y-1 rounded-md hover:bg-gray-100 transition ease-in-out duration-150">
                          <div className="flex items-center space-x-3">
                            <div className="text-base leading-6 font-medium text-gray-900">
                              Enterprise
                            </div>
                            <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium leading-5 bg-teal-100 text-teal-800">
                              New
                            </span>
                          </div>
                          <p className="text-sm leading-5 text-gray-500">
                            Empower your entire team with even more advanced
                            tools.
                          </p>
                        </button>
                      </div> */}
                    </div>
                  </div>
                </div>
              </Transition>
            </div>
            <button className="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150">
              Books
            </button>
            <button className="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150">
              Courses
            </button>
            <button className="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150">
              Lifestyle
            </button>

            <div className="relative">
              {/* Item active: "text-gray-900", Item inactive: "text-gray-500" */}
              <button
                onClick={handleBooks}
                type="button"
                className="group text-gray-500 inline-flex items-center space-x-2 text-base leading-6 font-medium hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150"
              >
                <span>More</span>
                {/* Item active: "text-gray-600", Item inactive: "text-gray-400" */}
                <svg
                  className="text-gray-400 h-5 w-5 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {/*    'More' flyout menu, show/hide based on flyout menu state.

                      Entering: "transition ease-out duration-200"
                        From: "opacity-0 translate-y-1"
                        To: "opacity-100 translate-y-0"
                      Leaving: "transition ease-in duration-150"
                        From: "opacity-100 translate-y-0"
                        To: "opacity-0 translate-y-1" */}
              <Transition
                show={openBooks}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0">
                  <div className="rounded-lg shadow-lg">
                    <div className="rounded-lg shadow-xs overflow-hidden">
                      <div className="z-20 relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                        <button className="-m-3 p-3 block space-y-1 rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
                          <p className="text-base leading-6 font-medium text-gray-900">
                            Blog
                          </p>
                          <p className="text-sm leading-5 text-gray-500">
                            Learn about tips, product updates and company
                            culture.
                          </p>
                        </button>
                        <button className="-m-3 p-3 block space-y-1 rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
                          <p className="text-base leading-6 font-medium text-gray-900">
                            Help Center
                          </p>
                          <p className="text-sm leading-5 text-gray-500">
                            Get all of your questions answered in our forums of
                            contact support.
                          </p>
                        </button>
                        <button className="-m-3 p-3 block space-y-1 rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
                          <p className="text-base leading-6 font-medium text-gray-900">
                            Guides
                          </p>
                          <p className="text-sm leading-5 text-gray-500">
                            Learn how to maximize our platform to get the most
                            out of it.
                          </p>
                        </button>
                        <button className="-m-3 p-3 block space-y-1 rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
                          <p className="text-base leading-6 font-medium text-gray-900">
                            Events
                          </p>
                          <p className="text-sm leading-5 text-gray-500">
                            Check out webinars with experts and learn about our
                            annual conference.
                          </p>
                        </button>
                        <button className="-m-3 p-3 block space-y-1 rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
                          <p className="text-base leading-6 font-medium text-gray-900">
                            Security
                          </p>
                          <p className="text-sm leading-5 text-gray-500">
                            Understand how we take your privacy seriously.
                          </p>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Transition>
            </div>
          </nav>
        </div>
      </div>

      {/*    Entering: "duration-200 ease-out"
      From: "opacity-0 scale-95"
      To: "opacity-100 scale-100"
    Leaving: "duration-100 ease-in"
      From: "opacity-100 scale-100"
      To: "opacity-0 scale-95"  */}
      <Transition
        show={menuMobile}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg">
            <div className="rounded-lg shadow-xs bg-white divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5 space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <img
                      className="h-8 w-auto"
                      src={devgadgetslogo}
                      alt="Workflow"
                    />
                  </div>
                  <div className="-mr-2">
                    <button
                      onClick={handleMenuMobile}
                      type="button"
                      className="inline-flex items-center justify-center p-2 rounded-md text-teal-400 hover:text-teal-500 hover:bg-teal-100 focus:outline-none focus:bg-teal-100 focus:text-gray-500 transition duration-150 ease-in-out"
                    >
                      <svg
                        className="h-6 w-6"
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
                <div>
                  <nav className="grid gap-6">
                    <button className="-m-3 p-3 flex items-center space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
                      {/* keyboard mobile */}
                      <img
                        src={keyboard}
                        alt="smart watch"
                        className="h-12 w-auto"
                      />
                      <div className="text-base leading-6 font-medium text-gray-900">
                        Keyboards
                      </div>
                    </button>
                    <button className="-m-3 p-3 flex items-center space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
                      {/* headphones mobile */}
                      <img
                        src={headphones}
                        alt="headphones"
                        className="h-12 w-auto"
                      />
                      <div className="text-base leading-6 font-medium text-gray-900">
                        Headphones
                      </div>
                    </button>
                    <button className="-m-3 p-3 flex items-center space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
                      {/* monitors mobile */}
                      <img
                        src={computer_display}
                        alt="computer display"
                        className="h-12 w-auto"
                      />
                      <div className="text-base leading-6 font-medium text-gray-900">
                        Monitors
                      </div>
                    </button>
                    <button className="-m-3 p-3 flex items-center space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
                      {/*  IOT Devices mobile */}
                      <img src={robot} alt="robot" className="h-12 w-auto" />
                      <div className="text-base leading-6 font-medium text-gray-900">
                        IOT Devices
                      </div>
                    </button>
                    <button className="-m-3 p-3 flex items-center space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
                      {/* Desk Chairs mobile */}
                      <img src={truck} alt="truck" className="h-12 w-auto" />
                      <div className="text-base leading-6 font-medium text-gray-900">
                        Office Desk & Chairs
                      </div>
                    </button>
                    <button className="-m-3 p-3 flex items-center space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
                      {/* USB devices mobile */}
                      <img
                        src={plug}
                        alt="electrical plug"
                        className="h-12 w-auto"
                      />
                      <div className="text-base leading-6 font-medium text-gray-900">
                        USB Devices
                      </div>
                    </button>
                  </nav>
                </div>
              </div>
              <div className="py-6 px-5 space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <button className="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150">
                    Books
                  </button>
                  <button className="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150">
                    Courses
                  </button>
                  <button className="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150">
                    Lifestyle
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  )
}

export default Nav
