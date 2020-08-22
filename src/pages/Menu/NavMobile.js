import React from "react"
import devgadgetslogo from "../../images/logo-teal-3.svg"
import Transition from "../../components/Transition"
import PropTypes from "prop-types"
import { CustomMobileHits } from "../../components/search-results-mobile"
import { CustomSearchBox } from "../../components/search-box"

//
const NavMobile = ({ menuMobile, handleMenuMobile }) => {
  return (
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
                {/* Search Algolia here */}
                <CustomSearchBox />
                {/* Search Results from Algolia below */}
                <CustomMobileHits />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  )
}

NavMobile.propTypes = {
  menuMobile: PropTypes.bool.isRequired,
  handleMenuMobile: PropTypes.func.isRequired,
}

export default NavMobile
