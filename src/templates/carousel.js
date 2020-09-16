import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { wrap } from "@popmotion/popcorn"
import Modal from "./modal"
import PropTypes from "prop-types"

//
const variants = {
  enter: direction => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: direction => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }
  },
}

const Carousel = ({ carousel }) => {
  const [open, setOpen] = React.useState(false)
  const photos = carousel
  const [[page, direction], setPage] = React.useState([0, 0])
  const imageIndex = wrap(0, photos.length, page)

  const paginate = newDirection => {
    setPage([page + newDirection, newDirection])
  }

  return (
    <>
      <div className="my-12">
        <div
          className="relative flex items-center content-center overflow-hidden"
          // style={{ height: 442 }}
        >
          <AnimatePresence initial={false} custom={direction}>
            {photos[imageIndex].node ? (
              <motion.img
                onClick={() => setOpen(true)}
                className="rounded-lg"
                key={page}
                src={photos[imageIndex].node.secure_url.replace(
                  "q_auto,f_auto/",
                  "q_auto,f_auto/ar_16:9,c_fill/w_1.4/"
                )}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 5000, damping: 300 },
                  opacity: { duration: 0.2 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x)

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1)
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1)
                  }
                }}
              />
            ) : (
              <div style={{ width: 849 }} className="pulse bg-cool-gray-400" />
            )}
          </AnimatePresence>
        </div>
        {/* pagination */}
        <nav className="px-4 flex items-center justify-between sm:px-0">
          <div className="w-0 flex-1 flex">
            <button
              onClick={() => paginate(-1)}
              className="-mt-px border-t-2 group border-transparent pt-4 pr-1 inline-flex items-center text-sm leading-5 font-medium text-cool-gray-500 hover:text-teal-400 hover:border-teal-400 focus:outline-none focus:text-teal-500 focus:border-teal-500 transition ease-in-out duration-150"
            >
              <svg
                className="mr-3 h-5 w-5 text-cool-gray-400 group-hover:text-teal-400 group-focus:text-teal-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Previous
            </button>
          </div>
          <div>
            {photos.length > 0 && (
              <p className="text-sm leading-5 text-cool-gray-700">
                <span className="px-2 font-medium">{imageIndex + 1}</span>
                of
                <span className="px-2 font-medium">{photos.length}</span>
              </p>
            )}
          </div>
          <div className="w-0 flex-1 flex justify-end">
            <button
              onClick={() => paginate(1)}
              className="-mt-px border-t-2 group border-transparent pt-4 pl-1 inline-flex items-center text-sm leading-5 font-medium text-cool-gray-500 hover:text-teal-400 hover:border-teal-400 focus:outline-none focus:text-teal-500 focus:border-teal-500 transition ease-in-out duration-150"
            >
              Next
              <svg
                className="ml-3 h-5 w-5 text-cool-gray-400 group-hover:text-teal-400 group-focus:text-teal-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </nav>
      </div>
      <Modal photos={photos} open={open} setOpen={setOpen} />
    </>
  )
}

const swipeConfidenceThreshold = 300
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity
}

Carousel.propTypes = {
  metadata: PropTypes.object,
  carousel: PropTypes.array.isRequired,
}
export default Carousel
