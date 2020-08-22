import React from "react"
import { Link } from "gatsby"
import keyboard from "../../images/keyboard.gif"
import headphones from "../../images/headphones.gif"
import computer_display from "../../images/computer-display.gif"
import robot from "../../images/robot.gif"
import truck from "../../images/truck.gif"
import plug from "../../images/plug.gif"

const MobileSubMenus = () => {
  return (
    <>
      <nav className="mt-10 grid gap-6">
        <Link
          to="/gadgets/all"
          state={{
            featCategory: "gadgets",
            subCategory: "Keyboards",
          }}
          className="-m-3 p-3 flex items-center space-x-4 rounded-lg hover:bg-teal-100 transition ease-in-out duration-150"
        >
          {/* keyboard mobile */}
          <img src={keyboard} alt="smart watch" className="h-12 w-auto" />
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
          <img src={headphones} alt="headphones" className="h-12 w-auto" />
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
          <img src={plug} alt="electrical plug" className="h-12 w-auto" />
          <div className="text-base leading-6 font-medium text-gray-900">
            USB Devices
          </div>
        </Link>
      </nav>
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
    </>
  )
}

export default MobileSubMenus
