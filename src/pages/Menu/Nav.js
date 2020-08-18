import React from "react"
import Transition from "../../components/Transition"
import devgadgetslogo from "../../images/logo-teal-3.svg"
import keyboard from "../../images/keyboard.gif"
import headphones from "../../images/headphones.gif"
import computer_display from "../../images/computer-display.gif"
import robot from "../../images/robot.gif"
import truck from "../../images/truck.gif"
import plug from "../../images/plug.gif"
import { Link } from "gatsby"
import useOnClickOutside from "../../hooks/use-on-click-outside"

const Nav = () => {
  const [openGadgets, setOpenGadgets] = React.useState(false)
  const [openMore, setopenMore] = React.useState(false)
  const [menuMobile, setMenuMobile] = React.useState(false)
  const ref = React.createRef()
  const ref2 = React.createRef()
  useOnClickOutside(ref, () => setOpenGadgets(false))
  useOnClickOutside(ref2, () => setopenMore(false))

  //
  const handleGadgets = () => {
    setOpenGadgets(!openGadgets)
  }

  const handleMore = () => {
    setopenMore(!openMore)
  }

  const handleMenuMobile = () => {
    setMenuMobile(!menuMobile)
  }

  return (
    <>
      <div className="z-30 fixed w-full top-0 bg-white">
        <div className="flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10">
          <div>
            <Link to="/" className="flex">
              <img
                className="h-8 w-auto sm:h-10"
                src={devgadgetslogo}
                alt="devgadgets official logo"
              />
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button
              onClick={handleMenuMobile}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-teal-400 hover:text-teal-400 hover:bg-teal-100 focus:outline-none focus:bg-teal-100 focus:text-gray-500 transition duration-150 ease-in-out"
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
          {/* Desktop view */}
          <div className="hidden md:flex-1 md:flex md:items-center md:justify-between md:space-x-12">
            <nav className="flex space-x-10">
              <div className="relative">
                <button
                  ref={ref}
                  onClick={handleGadgets}
                  type="button"
                  className="group text-gray-500 inline-flex items-center space-x-2 text-base leading-6 font-medium hover:text-teal-400 focus:outline-none focus:text-teal-500 transition ease-in-out duration-150"
                >
                  <span>Gadgets</span>

                  <svg
                    className="text-gray-400 h-5 w-5 group-hover:text-teal-400 group-focus:text-teal-500 transition ease-in-out duration-150"
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
                {/* Gadgets section */}
                <Transition
                  show={openGadgets}
                  enter="transition ease-out duration-500"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <div className="absolute -ml-4 mt-3 transform w-screen max-w-md lg:max-w-3xl">
                    <div className="rounded-lg shadow-lg">
                      <div className="rounded-lg shadow-xs overflow-hidden">
                        <div className="z-50 relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                          <Link
                            state={{
                              featCategory: "gadgets",
                              subCategory: "Keyboards",
                            }}
                            to="/gadgets/all"
                            className="focus:outline-none -m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-teal-100 transition ease-in-out duration-150"
                          >
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
                          </Link>
                          <Link
                            state={{
                              featCategory: "gadgets",
                              subCategory: "Headphones",
                            }}
                            to="/gadgets/all"
                            className="focus:outline-none -m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-teal-100 transition ease-in-out duration-150"
                          >
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
                          </Link>
                          <Link
                            state={{
                              featCategory: "gadgets",
                              subCategory: "Monitors",
                            }}
                            to="/gadgets/all"
                            className="focus:outline-none -m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-teal-100 transition ease-in-out duration-150"
                          >
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
                          </Link>
                          <Link
                            state={{
                              featCategory: "gadgets",
                              subCategory: "Iot",
                            }}
                            to="/gadgets/all"
                            className="focus:outline-none -m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-teal-100 transition ease-in-out duration-150"
                          >
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
                                Feeling lonely?...Talk to Alexa, ask Google,
                                meet Siri at the park?
                              </p>
                            </div>
                          </Link>
                          <Link
                            state={{
                              featCategory: "gadgets",
                              subCategory: "Office",
                            }}
                            to="/gadgets/all"
                            className="focus:outline-none -m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-teal-100 transition ease-in-out duration-150"
                          >
                            <img
                              src={truck}
                              alt="truck"
                              className="h-12 w-auto"
                            />
                            <div className="space-y-1">
                              <p className="text-base leading-6 font-medium text-gray-900">
                                Office
                              </p>
                              <p className="text-sm leading-5 text-gray-500">
                                You back hurts, your elbows, your neck, your
                                body....ouch! We&apos;ve got you.
                              </p>
                            </div>
                          </Link>
                          <Link
                            state={{
                              featCategory: "gadgets",
                              subCategory: "Usb",
                            }}
                            to="/gadgets/all"
                            className="focus:outline-none -m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-teal-100 transition ease-in-out duration-150"
                          >
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
                          </Link>
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
              <Link
                state={{ featCategory: "books" }}
                to="/books/all"
                className="text-base leading-6 font-medium text-gray-500 hover:text-teal-400 focus:outline-none focus:text-teal-500 transition ease-in-out duration-150"
              >
                Books
              </Link>
              <Link
                to="/courses/all"
                state={{ featCategory: "courses" }}
                className="text-base leading-6 font-medium text-gray-500 hover:text-teal-400 focus:outline-none focus:text-teal-500 transition ease-in-out duration-150"
              >
                Courses
              </Link>

              <div className="relative">
                <button
                  ref={ref2}
                  onClick={handleMore}
                  type="button"
                  className="group text-gray-500 inline-flex items-center space-x-2 text-base leading-6 font-medium hover:text-teal-400 focus:outline-none focus:text-teal-500 transition ease-in-out duration-150"
                >
                  <span>Legal</span>

                  <svg
                    className="text-gray-400 h-5 w-5 group-hover:text-teal-400 group-focus:text-teal-500 transition ease-in-out duration-150"
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

                <Transition
                  show={openMore}
                  enter="transition ease-out duration-500"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  {/* Desktop More  */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0">
                    <div className="rounded-lg shadow-lg">
                      <div className="rounded-lg shadow-xs overflow-hidden">
                        <div className="z-50 relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          <Link
                            to="/privacy-policy"
                            className="-m-3 p-3 block space-y-1 rounded-md hover:bg-teal-100 transition ease-in-out duration-150"
                          >
                            <p className="text-base leading-6 font-medium text-gray-900">
                              Privacy Policy
                            </p>
                          </Link>
                          <Link
                            to="/earnings-disclaimer"
                            className="-m-3 p-3 block space-y-1 rounded-md hover:bg-teal-100 transition ease-in-out duration-150"
                          >
                            <p>Affiliate Disclosure</p>
                          </Link>

                          <a
                            target="_blank"
                            rel="noreferrer"
                            href={`mailto:contact@devgadgets.io`}
                            className="-m-3 p-3 block space-y-1 rounded-md hover:bg-teal-100 transition ease-in-out duration-150"
                          >
                            Contact
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </Transition>
              </div>
            </nav>
          </div>
        </div>

        <Transition
          show={menuMobile}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {/* Mobile view */}
          <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
            <div className="rounded-lg shadow-lg">
              <div className="rounded-lg shadow-xs bg-white divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5 space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <img
                        className="h-8 w-auto"
                        src={devgadgetslogo}
                        alt="devgadgets official logo"
                      />
                    </div>
                    <div className="-mr-2">
                      <button
                        onClick={handleMenuMobile}
                        type="button"
                        className="inline-flex items-center justify-center p-2 rounded-md text-teal-400 hover:text-teal-400 hover:bg-teal-100 focus:outline-none focus:bg-teal-100 focus:text-gray-500 transition duration-150 ease-in-out"
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
                      <Link
                        to="/gadgets/all"
                        state={{
                          featCategory: "gadgets",
                          subCategory: "Keyboards",
                        }}
                        className="-m-3 p-3 flex items-center space-x-4 rounded-lg hover:bg-teal-100 transition ease-in-out duration-150"
                      >
                        {/* keyboard mobile */}
                        <img
                          src={keyboard}
                          alt="smart watch"
                          className="h-12 w-auto"
                        />
                        <div className="text-base leading-6 font-medium text-gray-900">
                          Keyboards
                        </div>
                      </Link>
                      <Link
                        to="/gadgets/all"
                        state={{
                          featCategory: "gadgets",
                          subCategory: "Headphones",
                        }}
                        className="-m-3 p-3 flex items-center space-x-4 rounded-lg hover:bg-teal-100 transition ease-in-out duration-150"
                      >
                        {/* headphones mobile */}
                        <img
                          src={headphones}
                          alt="headphones"
                          className="h-12 w-auto"
                        />
                        <div className="text-base leading-6 font-medium text-gray-900">
                          Headphones
                        </div>
                      </Link>
                      <Link
                        to="/gadgets/all"
                        state={{
                          featCategory: "gadgets",
                          subCategory: "Monitors",
                        }}
                        className="-m-3 p-3 flex items-center space-x-4 rounded-lg hover:bg-teal-100 transition ease-in-out duration-150"
                      >
                        {/* monitors mobile */}
                        <img
                          src={computer_display}
                          alt="computer display"
                          className="h-12 w-auto"
                        />
                        <div className="text-base leading-6 font-medium text-gray-900">
                          Monitors
                        </div>
                      </Link>
                      <Link
                        to="/gadgets/all"
                        state={{
                          featCategory: "gadgets",
                          subCategory: "Iot",
                        }}
                        className="-m-3 p-3 flex items-center space-x-4 rounded-lg hover:bg-teal-100 transition ease-in-out duration-150"
                      >
                        {/*  IOT Devices mobile */}
                        <img src={robot} alt="robot" className="h-12 w-auto" />
                        <div className="text-base leading-6 font-medium text-gray-900">
                          IOT Devices
                        </div>
                      </Link>
                      <Link
                        to="/gadgets/all"
                        state={{
                          featCategory: "gadgets",
                          subCategory: "Office",
                        }}
                        className="-m-3 p-3 flex items-center space-x-4 rounded-lg hover:bg-teal-100 transition ease-in-out duration-150"
                      >
                        {/* Desk Chairs mobile */}
                        <img src={truck} alt="truck" className="h-12 w-auto" />
                        <div className="text-base leading-6 font-medium text-gray-900">
                          Office
                        </div>
                      </Link>
                      <Link
                        to="/gadgets/all"
                        state={{
                          featCategory: "gadgets",
                          subCategory: "Usb",
                        }}
                        className="-m-3 p-3 flex items-center space-x-4 rounded-lg hover:bg-teal-100 transition ease-in-out duration-150"
                      >
                        {/* USB devices mobile */}
                        <img
                          src={plug}
                          alt="electrical plug"
                          className="h-12 w-auto"
                        />
                        <div className="text-base leading-6 font-medium text-gray-900">
                          USB Devices
                        </div>
                      </Link>
                    </nav>
                  </div>
                </div>
                <div className="py-6 px-5 space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <Link
                      to="/books/all"
                      state={{ featCategory: "books" }}
                      className="text-base leading-6 font-medium text-gray-900 hover:text-teal-400 transition ease-in-out duration-150"
                    >
                      Books
                    </Link>
                    <Link
                      to="/courses/all"
                      state={{ featCategory: "courses" }}
                      className="text-base leading-6 font-medium text-gray-900 hover:text-teal-400 transition ease-in-out duration-150"
                    >
                      Courses
                    </Link>
                    <Link
                      to="/privacy-policy"
                      className="text-base leading-6 font-medium text-gray-900 hover:text-teal-400 transition ease-in-out duration-150"
                    >
                      Privacy Policy
                    </Link>
                    <Link
                      to="/earnings-disclaimer"
                      className="text-base leading-6 font-medium text-gray-900 hover:text-teal-400 transition ease-in-out duration-150"
                    >
                      Affiliate Disclosure
                    </Link>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={`mailto:contact@devgadgets.io`}
                      className="text-base leading-6 font-medium text-gray-900 hover:text-teal-400 transition ease-in-out duration-150"
                    >
                      Contact
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </>
  )
}

export default Nav
