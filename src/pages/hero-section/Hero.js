import React from "react"
import hero_img from "../../images/hero-gadgets.svg"
import love_heart from "../../images/love-heart.gif"
import TechnologyBlogDefinition from "./technology-blog-definition"
import useOnClickOutside from "../../hooks/use-on-click-outside"

//
const Hero = () => {
  const [open, setOpen] = React.useState(false)
  const ref = React.createRef()
  useOnClickOutside(ref, () => setOpen(false))

  return (
    <div className="mt-52 lg:mt-32 max-w-7xl mx-auto">
      <div>
        <div className="flex items-center justify-around px-6 sm:px-6 lg:py-16 lg:px-8">
          <div className="pt-12 flex flex-col">
            <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl lg:text-center">
              Welcome to
              <span className="sm:hidden xl:inline">{` `}</span>
              <br className="xl:hidden" />
              <span className="text-teal-400">
                {`<`}Dev{`/>`} Gadgets
              </span>
            </h2>

            <p className="pr-6 md:p-0 mt-3 text-base text-gray-600 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl lg:text-center">
              the{" "}
              <button
                ref={ref}
                onClick={() => setOpen(!open)}
                className="inline-block text-orange-500 font-semibold underline focus:outline-none"
              >
                technology blog
              </button>{" "}
              that developers & technology enthusiasts{` `}
              <span className="text-orange-500 font-semibold">#love</span>
              <span className="-mb-2 inline-block align-baseline">
                <img className="h-8 w-8" src={love_heart} alt="heart" />
                {/* <svg
                  className="h-8 w-8 text-orange-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg> */}
              </span>
            </p>
            <TechnologyBlogDefinition open={open} />
          </div>
        </div>

        <div className="p-2">
          <img
            className="mt-10 w-auto h-auto lg:max-w-3xl lg:mx-auto"
            src={hero_img}
            alt="hero"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
