import React from "react"
import girl_reading_book from "../images/girl_reading_book.jpeg"
import man_video from "../images/man_video.jpeg"
import women_running from "../images/women_running.svg"
import man_and_woman_gadgets from "../images/man_and_woman_gadgets.svg"
import arrow_down from "../images/arrow_down.gif"
import Nav from "../pages/Menu/Nav"
import MostPopularArticlesLayout from "./most-popular-articles-layout"

//
const SectionLayout = ({ section, data }) => {
  const [secCategory, setSecCategory] = React.useState({
    title: "",
    content: "",
  })

  //
  React.useEffect(() => {
    switch (section) {
      case "books":
        setSecCategory({
          title: "Welcome to our books section",
          content:
            "Even tough is really difficult to find time to read in this hectic life we live, I'd like you to take a chance at my approach on how I read books and why you should read specific sections. The following is a curated list of programming bestsellers that will improve your architecture knowledge, algorithms skills, and deepen your knowledge of your favorite language",
          image: girl_reading_book,
        })

        break
      case "gadgets":
        setSecCategory({
          title: "Welcome to our gadgets section",
          content:
            "I cannot stress enough the importance of gadgets. They increase our productivity, and fill out a needed space wether in your car, at your office, at home, or your desk. Hear me out to what I have to say.",
          image: man_and_woman_gadgets,
        })
        break
      case "courses":
        setSecCategory({
          title: "Welcome to our online courses section",
          content:
            "Everyone is a different type of learner, some are visual, some love to read tutorials, some prefer to hear podcasts or even live events",
          image: man_video,
        })
        break
      case "lifestyle":
        setSecCategory({
          title: "Welcome to our lifestyle section",
          content:
            "Work out, eat healthy, sleep, repeat, we've heard that a ton of times, but the thing is that it's not that easy right?",
          image: women_running,
        })
        break
      default:
        setSecCategory({
          title: "...Loading",
          content: "...Loading",
          image: "",
        })
        break
    }
  }, [section])

  return (
    <>
      <Nav />
      {section === "lifestyle" ? (
        <div className="relative">
          {/* col-1 */}
          <img
            className="w-full h-screen object-cover md:h-full opacity-25"
            src={secCategory.image}
            alt="figura bonita"
          />

          {/* col-2 */}
          <div className="absolute left-16 top-40">
            <div className="font-black text-gray-700 text-5xl md:text-6xl leading-tight px-6 py-6 md:max-w-lg">
              {secCategory.title}
            </div>
            <div className="px-8 py-2 max-w-md text-base font-semibold text-gray-700 tracking-wide">
              {secCategory.content}
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="mt-24 flex flex-col md:flex-row items-center justify-center">
            {/* col-1 */}
            <div className="md:w-2/4 p-2">
              <img
                className="w-full h-full"
                src={secCategory.image}
                alt="figura bonita"
              />
            </div>
            {/* col-2 */}
            <div className="md:w-2/4 justify-center items-center">
              <div className="font-semibold text-4xl md:text-5xl leading-tight px-6 py-6 md:py-4 md:px-10">
                {secCategory.title}
              </div>
              <div className="px-8 py-2 md:py-4 md:pr-32 text-base tracking-wide">
                {secCategory.content}
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <img className="h-10 w-10" alt="arrow down icon" src={arrow_down} />
          </div>

          <MostPopularArticlesLayout data={data} />
        </>
      )}
    </>
  )
}

export default SectionLayout
