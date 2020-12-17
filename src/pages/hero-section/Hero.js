import React from "react"
// import hero_img from "../../images/hero-gadgets.svg"
import love_heart from "../../images/love-heart.gif"
import TechnologyBlogDefinition from "./technology-blog-definition"
import useOnClickOutside from "../../hooks/use-on-click-outside"
import { getCloudinaryHeroImages } from "../../hooks/get-cloudinary-hero-images"
import { motion } from "framer-motion"
//
const Hero = () => {
  const ref = React.createRef()
  const data = getCloudinaryHeroImages()
  const [open, setOpen] = React.useState(false)
  useOnClickOutside(ref, () => setOpen(false))

  return (
    <div className="mt-6 md:mt-12 lg:mt-0 max-w-7xl mx-auto">
      <div>
        <div className="flex items-center justify-around px-6 sm:px-6 lg:py-16 lg:px-8">
          <div className="pt-12 flex flex-col">
            <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 md:text-6xl lg:text-center">
              Welcome to
              <div className="p-0 md:pb-8" />
              <span className="text-teal-500">
                {`<`}Dev{`/>`} Gadgets
              </span>
            </h2>

            <p className="pr-6 md:p-0 mt-3 text-base text-gray-600 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl lg:text-center">
              the{" "}
              <span ref={ref}>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setOpen(!open)}
                  className="inline-block text-orange-600 font-semibold underline focus:outline-none"
                >
                  technology blog
                </motion.button>{" "}
              </span>
              that developers & technology enthusiasts{` `}
              <span className="text-orange-600 font-semibold">#love</span>
              <span className="inline-block align-baseline -mb-2">
                <img className="h-8 w-8" src={love_heart} alt="logo heart" />
              </span>
              {/* <span className="-mb-2 inline-block align-baseline">
                <video
                  className="h-8 w-8"
                  playsInline
                  autoPlay
                  loop
                  muted="muted"
                  poster={data.loveheart.secure_url.replace("gif", "webm")}
                >
                  <source
                    type="video/webm"
                    src={data.loveheart.secure_url.replace("gif", "webm")}
                  />
                  <source
                    type="video/mp4"
                    src={data.loveheart.secure_url.replace("gif", "mp4")}
                  />
                  Your browser does not support HTML5 video tag.
                </video>
              </span> */}
            </p>
            <TechnologyBlogDefinition open={open} />
          </div>
        </div>

        <div className="p-2">
          <img
            className="mt-10 w-auto h-auto lg:max-w-3xl lg:mx-auto"
            src={
              data && data.hero && data.hero.secure_url
                ? data.hero.secure_url
                : `http://placehold.jp/24/cccccc/ffffff/250x50.png?text=image_not_found`
            }
            alt="hero"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
