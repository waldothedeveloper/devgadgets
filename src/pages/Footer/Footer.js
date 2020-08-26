import React from "react"
import logo from "../../images/logo-teal-3.svg"
import { Link } from "gatsby"
import { motion } from "framer-motion"
import { useGetInstructors } from "../../hooks/use-get-instructors"
import PropTypes from "prop-types"

//
const Footer = () => {
  const data = useGetInstructors()

  return (
    <div className="bg-gray-800">
      <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="xl:col-span-1">
            <Link to="/">
              <img className="h-10" src={logo} alt="Company name" />
            </Link>

            <p className="mt-8 text-gray-400 text-base leading-6">
              Making the world a better place one tech article at a time.
              Empowering developers all over the world and technology
              enthusiasts.
            </p>
            <div className="mt-8 flex">
              <motion.button
                whileHover={{ scale: 1.3 }}
                className="text-blue-400 hover:text-blue-500"
              >
                <span className="sr-only">Facebook</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.3 }}
                className="ml-6 text-red-400 hover:text-red-500"
              >
                <span className="sr-only">Instagram</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.3 }}
                className="ml-6 text-yellow-400 hover:text-yellow-300"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </motion.button>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h4 className="text-sm leading-5 font-semibold tracking-wider text-teal-400 uppercase">
                  Gadgets
                </h4>
                <ul className="mt-4">
                  <li>
                    <Link
                      state={{ featCategory: "gadgets" }}
                      to="/gadgets/all"
                      className="text-base leading-6 text-gray-400 hover:text-teal-300"
                    >
                      All
                    </Link>
                  </li>
                  <li className="mt-4">
                    <Link
                      state={{
                        featCategory: "gadgets",
                        subCategory: "Keyboards",
                      }}
                      to="/gadgets/all"
                      className="text-base leading-6 text-gray-400 hover:text-teal-300"
                    >
                      Keyboards
                    </Link>
                  </li>
                  <li className="mt-4">
                    <Link
                      state={{
                        featCategory: "gadgets",
                        subCategory: "Headphones",
                      }}
                      to="/gadgets/all"
                      className="text-base leading-6 text-gray-400 hover:text-teal-300"
                    >
                      Headphones
                    </Link>
                  </li>
                  <li className="mt-4">
                    <Link
                      state={{
                        featCategory: "gadgets",
                        subCategory: "Iot",
                      }}
                      to="/gadgets/all"
                      className="text-base leading-6 text-gray-400 hover:text-teal-300"
                    >
                      IOT Devices
                    </Link>
                  </li>
                  <li className="mt-4">
                    <Link
                      state={{
                        featCategory: "gadgets",
                        subCategory: "Monitors",
                      }}
                      to="/gadgets/all"
                      className="text-base leading-6 text-gray-400 hover:text-teal-300"
                    >
                      Monitors
                    </Link>
                  </li>
                  <li className="mt-4">
                    <Link
                      state={{
                        featCategory: "gadgets",
                        subCategory: "Office",
                      }}
                      to="/gadgets/all"
                      className="text-base leading-6 text-gray-400 hover:text-teal-300"
                    >
                      Office Products
                    </Link>
                  </li>
                  <li className="mt-4">
                    <Link
                      state={{
                        featCategory: "gadgets",
                        subCategory: "Usb",
                      }}
                      to="/gadgets/all"
                      className="text-base leading-6 text-gray-400 hover:text-teal-300"
                    >
                      USB Devices
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h4 className="text-sm leading-5 font-semibold tracking-wider text-teal-400 uppercase">
                  Books
                </h4>
                <ul className="mt-4">
                  <li>
                    <Link
                      className="text-base leading-6 text-gray-400 hover:text-teal-300"
                      to="/books/all"
                      state={{
                        featCategory: "books",
                        subCategory: "All",
                      }}
                    >
                      All
                    </Link>
                  </li>
                  <li className="mt-4">
                    <Link
                      to="/books/all"
                      state={{
                        featCategory: "books",
                        subCategory: "Javascript",
                      }}
                      className="text-base leading-6 text-gray-400 hover:text-teal-300"
                    >
                      Javascript
                    </Link>
                  </li>
                  <li className="mt-4">
                    <Link
                      to="/books/all"
                      state={{
                        featCategory: "books",
                        subCategory: "Ruby",
                      }}
                      className="text-base leading-6 text-gray-400 hover:text-teal-300"
                    >
                      Ruby
                    </Link>
                  </li>
                  <li className="mt-4">
                    <Link
                      to="/books/all"
                      state={{
                        featCategory: "books",
                        subCategory: "Python",
                      }}
                      className="text-base leading-6 text-gray-400 hover:text-teal-300"
                    >
                      Python
                    </Link>
                  </li>
                  <li className="mt-4">
                    <Link
                      to="/books/all"
                      state={{
                        featCategory: "books",
                        subCategory: "C#",
                      }}
                      className="text-base leading-6 text-gray-400 hover:text-teal-300"
                    >
                      C#
                    </Link>
                  </li>
                  <li className="mt-4">
                    <Link
                      to="/books/all"
                      state={{
                        featCategory: "books",
                        subCategory: "React",
                      }}
                      className="text-base leading-6 text-gray-400 hover:text-teal-300"
                    >
                      React
                    </Link>
                  </li>
                  <li className="mt-4">
                    <Link
                      to="/books/all"
                      state={{
                        featCategory: "books",
                        subCategory: "SQL",
                      }}
                      className="text-base leading-6 text-gray-400 hover:text-teal-300"
                    >
                      SQL
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h4 className="text-sm leading-5 font-semibold tracking-wider text-teal-400 uppercase">
                  Courses
                </h4>
                <ul className="mt-4">
                  <li>
                    <Link
                      to="/courses/all"
                      state={{ featCategory: "courses" }}
                      className="text-base leading-6 text-gray-400 hover:text-teal-300"
                    >
                      All
                    </Link>
                  </li>

                  {/* Have in mind that if you keep adding instructors you will need to refactor this UI soon */}
                  {data.map(elem => (
                    <li key={elem.node.id} className="mt-4">
                      <Link
                        to={elem.node.fields.slug}
                        className="text-base leading-6 text-gray-400 hover:text-teal-300"
                      >
                        {elem.node.frontmatter.instructor_name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h4 className="text-sm leading-5 font-semibold tracking-wider text-teal-400 uppercase">
                  Legal
                </h4>
                <ul className="mt-4">
                  <li className="mt-4">
                    <Link
                      to="/privacy-policy"
                      className="text-base leading-6 text-gray-400 hover:text-teal-300"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li className="mt-4">
                    <Link
                      to="/earnings-disclaimer"
                      className="text-base leading-6 text-gray-400 hover:text-teal-300"
                    >
                      Afilliate Disclosure
                    </Link>
                  </li>
                  <li className="mt-4">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={`mailto:contact@devgadgets.io`}
                      className="text-base leading-6 text-gray-400 hover:text-teal-300"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-base leading-6 text-gray-400 xl:text-center">
            &copy; 2020 Dev-Gadgets. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}

Footer.propTypes = {
  data: PropTypes.array,
}
export default Footer
