import React from "react"
import Transition from "../../components/Transition"
import devgadgetslogo from "../../images/logo-teal-3.svg"
import { Link } from "gatsby"
import { CustomSearchBox } from "../../components/search-box"
import { CustomHits } from "../../components/search-results"
import NavMobile from "./NavMobile"
import { InstantSearch } from "react-instantsearch-dom"
import algoliasearch from "algoliasearch/lite"
import useOnClickOutside from "../../hooks/use-on-click-outside"
import { getCloudinaryNavImages } from "../../hooks/get-cloudinary-nav-images"
// import keyboard from "../../images/keyboard.gif"
import keyboardWebM from "../../images/keyboard.webm"
import keyboardMp4 from "../../images/keyboard.mp4"
// import headphones from "../../images/headphones.gif"
import headphonesWebM from "../../images/headphones.webm"
import headphonesMp4 from "../../images/headphones.mp4"
// import computer_display from "../../images/computer-display.gif"
import computer_display_WebM from "../../images/computer-display.webm"
import computer_display_Mp4 from "../../images/computer-display.mp4"
// import robot from "../../images/robot.gif"
import robotWebM from "../../images/robot.webm"
import robotMp4 from "../../images/robot.mp4"
// import truck from "../../images/truck.gif"
import truckWebM from "../../images/truck.webm"
import truckMp4 from "../../images/truck.mp4"
// import plug from "../../images/plug.gif"
import plugWebM from "../../images/plug.webm"
import plugMp4 from "../../images/plug.mp4"

//
const searchClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_SEARCH_KEY
)

//
const Nav = () => {
  const data = getCloudinaryNavImages()
  // console.log("data: ", data)

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
      <InstantSearch searchClient={searchClient} indexName="devgadgets_prod">
        <div className="z-30 fixed w-full top-0 bg-white">
          <div className="flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10">
            <div role="menuitem">
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
                            {/* Keyboard */}
                            <Link
                              state={{
                                featCategory: "gadgets",
                                subCategory: "Keyboards",
                              }}
                              to="/gadgets/all"
                              className="focus:outline-none -m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-teal-100 transition ease-in-out duration-150"
                            >
                              {/* Keyboard */}
                              {/* <img className="h-12 w-auto" src={keyboard} /> */}
                              <video
                                className="h-12 w-auto"
                                autoPlay
                                loop
                                muted
                                playsInline
                              >
                                <source src={keyboardWebM} type="video/webm" />
                                <source src={keyboardMp4} type="video/mp4" />
                              </video>
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
                            {/* Headphones */}
                            <Link
                              state={{
                                featCategory: "gadgets",
                                subCategory: "Headphones",
                              }}
                              to="/gadgets/all"
                              className="focus:outline-none -m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-teal-100 transition ease-in-out duration-150"
                            >
                              {/* <img className="h-12 w-auto" src={headphones} /> */}
                              <video
                                className="h-12 w-auto"
                                autoPlay
                                loop
                                muted
                                playsInline
                              >
                                <source
                                  src={headphonesWebM}
                                  type="video/webm"
                                />
                                <source src={headphonesMp4} type="video/mp4" />
                              </video>

                              <div className="space-y-1">
                                <p className="text-base leading-6 font-medium text-gray-900">
                                  Headphones
                                </p>
                                <p className="text-sm leading-5 text-gray-500">
                                  Can you hear me now?...Good, I was worried
                                  with those headphones
                                </p>
                              </div>
                            </Link>
                            {/* Monitors */}
                            <Link
                              state={{
                                featCategory: "gadgets",
                                subCategory: "Monitors",
                              }}
                              to="/gadgets/all"
                              className="focus:outline-none -m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-teal-100 transition ease-in-out duration-150"
                            >
                              {/* <img
                                className="h-12 w-auto"
                                src={computer_display}
                              /> */}

                              <video
                                className="h-12 w-auto"
                                autoPlay
                                loop
                                muted
                                playsInline
                              >
                                <source
                                  src={computer_display_WebM}
                                  type="video/webm"
                                />
                                <source
                                  src={computer_display_Mp4}
                                  type="video/mp4"
                                />
                              </video>
                              <div className="space-y-1">
                                <p className="text-base leading-6 font-medium text-gray-900">
                                  Monitors
                                </p>
                                <p className="text-sm leading-5 text-gray-500">
                                  From the iluminati visioners to the
                                  do-the-work budget tight.
                                </p>
                              </div>
                            </Link>
                            {/* Iot */}
                            <Link
                              state={{
                                featCategory: "gadgets",
                                subCategory: "Iot",
                              }}
                              to="/gadgets/all"
                              className="focus:outline-none -m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-teal-100 transition ease-in-out duration-150"
                            >
                              {/* <img className="h-12 w-auto" src={robot} /> */}

                              <video
                                className="h-12 w-auto"
                                autoPlay
                                loop
                                muted
                                playsInline
                              >
                                <source src={robotWebM} type="video/webm" />
                                <source src={robotMp4} type="video/mp4" />
                              </video>

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
                            {/* Office  */}
                            <Link
                              state={{
                                featCategory: "gadgets",
                                subCategory: "Office",
                              }}
                              to="/gadgets/all"
                              className="focus:outline-none -m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-teal-100 transition ease-in-out duration-150"
                            >
                              {/* <img className="h-12 w-auto" src={truck} /> */}

                              <video
                                className="h-12 w-auto"
                                autoPlay
                                loop
                                muted
                                playsInline
                              >
                                <source src={truckWebM} type="video/webm" />
                                <source src={truckMp4} type="video/mp4" />
                              </video>

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
                            {/* USB */}
                            <Link
                              state={{
                                featCategory: "gadgets",
                                subCategory: "Usb",
                              }}
                              to="/gadgets/all"
                              className="focus:outline-none -m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-teal-100 transition ease-in-out duration-150"
                            >
                              {/* <img className="h-12 w-auto" src={plug} /> */}

                              <video
                                className="h-12 w-auto"
                                autoPlay
                                loop
                                muted
                                playsInline
                              >
                                <source src={plugWebM} type="video/webm" />
                                <source src={plugMp4} type="video/mp4" />
                              </video>

                              <div className="space-y-1">
                                <p className="text-base leading-6 font-medium text-gray-900">
                                  USB Devices
                                </p>
                                <p className="text-sm leading-5 text-gray-500">
                                  In a hurry? Charge it all at once, even your
                                  hot girlfriend or boyfriend.
                                </p>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Transition>
                </div>
                <Link
                  to="/books/all"
                  className="text-base leading-6 font-medium text-gray-500 hover:text-teal-400 focus:outline-none focus:text-teal-500 transition ease-in-out duration-150"
                >
                  Books
                </Link>
                {/* Courses will be coming soon */}
                {/* <Link
                    to="/courses/all"
                    className="inline-block relative text-base leading-6 font-medium text-gray-500 hover:text-teal-400 focus:outline-none focus:text-teal-500 transition ease-in-out duration-150"
                  >
                    Courses
                    
                  </Link> */}

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
                    {/* Desktop Legal  */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0">
                      <div className="rounded-lg shadow-lg">
                        <div className="rounded-lg shadow-xs overflow-hidden">
                          <div className="z-50 relative grid gap-5 bg-white p-3">
                            <Link
                              to="/privacy-policy"
                              className="focus:outline-none -m-1 p-1 flex items-start space-x-2 space-y-4 rounded-lg hover:bg-teal-100 transition ease-in-out duration-150"
                            >
                              <video
                                className="h-12 w-auto"
                                playsInline
                                autoPlay
                                loop
                                muted="muted"
                                poster={data.privacy_policy.secure_url.replace(
                                  "gif",
                                  "jpg"
                                )}
                              >
                                <source
                                  type="video/webm"
                                  src={data.privacy_policy.secure_url.replace(
                                    "gif",
                                    "webm"
                                  )}
                                />
                                <source
                                  type="video/mp4"
                                  src={data.privacy_policy.secure_url.replace(
                                    "gif",
                                    "mp4"
                                  )}
                                />
                                Your browser does not support HTML5 video tag.
                              </video>

                              <div className="">
                                <p className="text-base leading-6 font-medium text-gray-900">
                                  Privacy Policy
                                </p>
                              </div>
                            </Link>
                            <Link
                              to="/earnings-disclaimer"
                              className="focus:outline-none -m-1 p-1 flex items-start space-x-2 space-y-4 rounded-lg hover:bg-teal-100 transition ease-in-out duration-150"
                            >
                              <video
                                className="h-12 w-auto"
                                playsInline
                                autoPlay
                                loop
                                muted="muted"
                                poster={data.legal_balance.secure_url.replace(
                                  "gif",
                                  "jpg"
                                )}
                              >
                                <source
                                  type="video/webm"
                                  src={data.legal_balance.secure_url.replace(
                                    "gif",
                                    "webm"
                                  )}
                                />
                                <source
                                  type="video/mp4"
                                  src={data.legal_balance.secure_url.replace(
                                    "gif",
                                    "mp4"
                                  )}
                                />
                                Your browser does not support HTML5 video tag.
                              </video>

                              <div className="">
                                <p className="text-base leading-6 font-medium text-gray-900">
                                  Affiliate Disclosure
                                </p>
                              </div>
                            </Link>
                            <a
                              target="_blank"
                              rel="noreferrer"
                              href={`mailto:contact@devgadgets.io`}
                              className="focus:outline-none -m-1 p-1 flex items-start space-x-2 space-y-4 rounded-lg hover:bg-teal-100 transition ease-in-out duration-150"
                            >
                              <video
                                className="h-12 w-auto"
                                playsInline
                                autoPlay
                                loop
                                muted="muted"
                                poster={data.contact_avatars.secure_url.replace(
                                  "gif",
                                  "jpg"
                                )}
                              >
                                <source
                                  type="video/webm"
                                  src={data.contact_avatars.secure_url.replace(
                                    "gif",
                                    "webm"
                                  )}
                                />
                                <source
                                  type="video/mp4"
                                  src={data.contact_avatars.secure_url.replace(
                                    "gif",
                                    "mp4"
                                  )}
                                />
                                Your browser does not support HTML5 video tag.
                              </video>

                              <div className="">
                                <p className="text-base leading-6 font-medium text-gray-900">
                                  Contact
                                </p>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Transition>
                </div>
              </nav>

              {/* Desktop Search Algolia here */}
              <div className="flex items-center space-x-8">
                {/* <Search /> */}
                <CustomSearchBox />
                <CustomHits />
              </div>
            </div>
          </div>

          {/* NAV MOBILE HERE */}
          <NavMobile
            menuMobile={menuMobile}
            handleMenuMobile={handleMenuMobile}
          />
        </div>
      </InstantSearch>
    </>
  )
}

export default Nav
