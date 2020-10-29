import React from "react"
import { Link } from "gatsby"
import { getCloudinaryNavImages } from "../../hooks/get-cloudinary-nav-images"
// import keyboard from "../../images/keyboard.gif"
// import headphones from "../../images/headphones.gif"
// import computer_display from "../../images/computer-display.gif"
// import robot from "../../images/robot.gif"
// import truck from "../../images/truck.gif"
// import plug from "../../images/plug.gif"

const MobileSubMenus = () => {
  const data = getCloudinaryNavImages()

  return (
    <>
      <nav className="mt-10 grid gap-6">
        <Link
          className="-m-3 p-3 flex items-center space-x-4 rounded-lg hover:bg-teal-100 transition ease-in-out duration-150"
          to="/gadgets/all"
          state={{
            featCategory: "gadgets",
            subCategory: "Keyboards",
          }}
        >
          {/* keyboard mobile */}
          <video
            className="h-12 w-auto"
            playsInline
            autoPlay
            loop
            muted="muted"
            poster={data.keyboard.secure_url.replace("gif", "jpg")}
          >
            <source
              type="video/webm"
              src={data.keyboard.secure_url.replace("gif", "webm")}
            />
            <source
              type="video/mp4"
              src={data.keyboard.secure_url.replace("gif", "mp4")}
            />
            Your browser does not support HTML5 video tag.
          </video>

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
          <video
            className="h-12 w-auto"
            playsInline
            autoPlay
            loop
            muted="muted"
            poster={data.headphones.secure_url.replace("gif", "jpg")}
          >
            <source
              type="video/webm"
              src={data.headphones.secure_url.replace("gif", "webm")}
            />
            <source
              type="video/mp4"
              src={data.headphones.secure_url.replace("gif", "mp4")}
            />
            Your browser does not support HTML5 video tag.
          </video>

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
          <video
            className="h-12 w-auto"
            playsInline
            autoPlay
            loop
            muted="muted"
            poster={data.computer_display.secure_url.replace("gif", "jpg")}
          >
            <source
              type="video/webm"
              src={data.computer_display.secure_url.replace("gif", "webm")}
            />
            <source
              type="video/mp4"
              src={data.computer_display.secure_url.replace("gif", "mp4")}
            />
            Your browser does not support HTML5 video tag.
          </video>

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
          <video
            className="h-12 w-auto"
            playsInline
            autoPlay
            loop
            muted="muted"
            poster={data.robot.secure_url.replace("gif", "jpg")}
          >
            <source
              type="video/webm"
              src={data.robot.secure_url.replace("gif", "webm")}
            />
            <source
              type="video/mp4"
              src={data.robot.secure_url.replace("gif", "mp4")}
            />
            Your browser does not support HTML5 video tag.
          </video>

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
          <video
            className="h-12 w-auto"
            playsInline
            autoPlay
            loop
            muted="muted"
            poster={data.truck.secure_url.replace("gif", "jpg")}
          >
            <source
              type="video/webm"
              src={data.truck.secure_url.replace("gif", "webm")}
            />
            <source
              type="video/mp4"
              src={data.truck.secure_url.replace("gif", "mp4")}
            />
            Your browser does not support HTML5 video tag.
          </video>

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
          <video
            className="h-12 w-auto"
            playsInline
            autoPlay
            loop
            muted="muted"
            poster={data.plug.secure_url.replace("gif", "jpg")}
          >
            <source
              type="video/webm"
              src={data.plug.secure_url.replace("gif", "webm")}
            />
            <source
              type="video/mp4"
              src={data.plug.secure_url.replace("gif", "mp4")}
            />
            Your browser does not support HTML5 video tag.
          </video>

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
          {/* Courses will be coming soon */}
          {/* <Link
            to="/courses/all"
            state={{ featCategory: "courses" }}
            className="text-base leading-6 font-medium text-gray-900 hover:text-teal-400 transition ease-in-out duration-150"
          >
            Courses
          </Link> */}
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
