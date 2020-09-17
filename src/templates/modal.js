import React from "react"
import Transition from "../components/Transition"
import PropTypes from "prop-types"

//
const Modal = ({ open, setOpen, photos }) => {
  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    }

    return () => (document.body.style.overflow = "auto")
  })
  return (
    <Transition
      show={open}
      enter="ease-out duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="ease-in duration-200"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="z-40 fixed bottom-0 inset-x-0 sm:inset-0 p-0">
        <Transition
          enter="ease-out duration-300"
          enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enterTo="opacity-100 translate-y-0 sm:scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 translate-y-0 sm:scale-100"
          leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        >
          <div role="dialog" aria-modal="true" aria-labelledby="modal-headline">
            <div
              style={{
                padding: "1rem",
                background: `linear-gradient(rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 100%)`,
                transform: `translateY(0px)`,
                transition: `transform 500ms ease-out 0s`,
              }}
              className="fixed top-0 left-0 w-full mb-0 z-40"
            >
              <button
                onClick={() => setOpen(false)}
                type="button"
                className="ml-2 text-white focus:outline-none transition ease-in-out duration-150"
                aria-label="Close"
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
            <div className="bg-cool-gray-800 mt-4 h-screen w-screen overflow-y-scroll overflow-x-hidden">
              <div className="mt-12 md:mt-0">
                {photos.map((photo, id) => (
                  <div
                    key={id}
                    className="flex justify-center items-center lg:max-w-6xl lg:mx-auto"
                    style={{
                      margin: `0px !important`,
                    }}
                  >
                    <img
                      style={{ margin: `0.5rem !important` }}
                      key={id}
                      src={photo.node.secure_url.replace(
                        "q_auto,f_auto/",
                        "q_auto,f_auto/w_1000,h_1000,c_limit/"
                      )}
                      alt="products"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  )
}

Modal.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  photos: PropTypes.array,
}
export default Modal
