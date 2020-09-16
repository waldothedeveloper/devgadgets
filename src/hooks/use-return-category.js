import React from "react"
import girl_reading_book from "../images/girl_reading_book.jpeg"
import man_video from "../images/man_video.jpeg"
import women_running from "../images/women_running.svg"
import man_and_woman_gadgets from "../images/man_and_woman_gadgets.svg"

//
export const UseReturnCategory = section => {
  const [secCategory, setSecCategory] = React.useState({
    title: "",
    content: "",
  })

  React.useEffect(() => {
    switch (section.featCategory || section.navCategory) {
      case "books":
        setSecCategory({
          title: "Books",
          content:
            "The following is a curated list of programming bestsellers, choose your flavor on the right column.",
          image: girl_reading_book,
          article_category: "books",
        })

        break
      case "gadgets":
        setSecCategory({
          title: "Gadgets",
          content:
            "Explore the universe of amazing gadgets. Our reviews are self experience based, never blindly trying to sell something we haven't even touched.",
          image: man_and_woman_gadgets,
          article_category: "gadgets",
        })
        break
      case "courses":
        setSecCategory({
          title: "Online Courses",
          content:
            "Everyone is a different type of learner, some are visual, some love to read tutorials, some prefer to hear podcasts or even live events",
          image: man_video,
          article_category: "courses",
        })
        break
      case "lifestyle":
        setSecCategory({
          title: "Lifestyle",
          content:
            "Work out, eat healthy, sleep, repeat, we've heard that a ton of times, but the thing is that it's not that easy right?",
          image: women_running,
          article_category: "lifestyle",
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

  return secCategory
}
