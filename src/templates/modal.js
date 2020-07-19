import React from "react"
import Transition from "../components/Transition"

const Modal = ({ open, setOpen, photos }) => {
  React.useEffect(() => {
    if (open) {
      console.log("body overflow hidden")
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
                // marginTop: 88,
                padding: "1rem",
                background: `linear-gradient(rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 100%)`,
              }}
              className="w-full absolute top-0 left-0 z-40"
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
            <div className="bg-white h-screen w-screen overflow-y-scroll overflow-x-hidden">
              <ul
                style={{
                  display: `grid`,
                  gridGap: `4px`,
                  gridAutoColumns: `1fr`,
                  margin: `0 auto`,
                }}
              >
                {photos.map((photo, id) => (
                  <li
                    key={id}
                    style={{
                      height: `calc(100vw * 3 / 4)`,
                      border: `2px solid #eee`,
                    }}
                  >
                    <img
                      key={id}
                      className="w-full h-full object-cover object-center"
                      src={photo}
                      alt="products"
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  )
}

export default Modal
