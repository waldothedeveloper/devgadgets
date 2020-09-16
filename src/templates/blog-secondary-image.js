import React from "react"
import PropTypes from "prop-types"

const BlogSecondaryImage = ({ carousel }) => {
  const [selected, setSelected] = React.useState(
    `https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80`
  )

  React.useEffect(() => {
    const randNum = Math.floor(Math.random() * carousel.length) + 0
    setSelected(carousel[randNum].node.secure_url)
  }, [carousel])

  return (
    <div className="my-8 max-w-6xl mx-auto lg:max-w-none">
      <img
        className="rounded-lg shadow-lg object-cover object-center w-full h-full"
        src={selected.replace(
          "q_auto,f_auto/",
          "q_auto,f_auto/h_442,ar_16:9,c_fill/"
        )}
      />
    </div>
  )
}

BlogSecondaryImage.propTypes = {
  carousel: PropTypes.array.isRequired,
}
export default BlogSecondaryImage
