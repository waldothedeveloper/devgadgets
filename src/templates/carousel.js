import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { wrap } from "@popmotion/popcorn"
import Modal from "./modal"

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

const Carousel = ({ metadata }) => {
  const [open, setOpen] = React.useState(false)
  const photos = metadata.photos
  const [[page, direction], setPage] = React.useState([0, 0])

  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
  const imageIndex = wrap(0, photos.length, page)

  const paginate = newDirection => {
    setPage([page + newDirection, newDirection])
  }

  return (
    <>
      <div className="my-24">
        <div
          className="relative flex items-center content-center overflow-hidden"
          style={{ height: "32rem" }}
        >
          <AnimatePresence>
            <motion.img
              onClick={() => setOpen(true)}
              className="w-full h-full object-cover"
              key={page}
              src={photos[imageIndex]}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 5000, damping: 40000 },
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
          </AnimatePresence>
        </div>
        {/* pagination */}
        <nav className="border-t border-gray-200 px-4 flex items-center justify-between sm:px-0">
          <div className="w-0 flex-1 flex">
            <button
              onClick={() => paginate(-1)}
              className="-mt-px border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm leading-5 font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-400 transition ease-in-out duration-150"
            >
              <svg
                className="mr-3 h-5 w-5 text-gray-400"
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
              <p className="text-sm leading-5 text-gray-700">
                <span className="px-2 font-medium">{imageIndex + 1}</span>
                of
                <span className="px-2 font-medium">{photos.length}</span>
              </p>
            )}
          </div>
          <div className="w-0 flex-1 flex justify-end">
            <button
              onClick={() => paginate(1)}
              className="-mt-px border-t-2 border-transparent pt-4 pl-1 inline-flex items-center text-sm leading-5 font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-400 transition ease-in-out duration-150"
            >
              Next
              <svg
                className="ml-3 h-5 w-5 text-gray-400"
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

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 10000
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity
}

export default Carousel
