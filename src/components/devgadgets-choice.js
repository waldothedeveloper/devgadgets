import React from "react"
import PropTypes from "prop-types"

const DevGadgetsChoice = ({ devgadgets_choice }) => {
  return devgadgets_choice ? (
    <div className="px-2 ml-1 py-1 bg-teal-900 text-sm font-semibold mb-2 rounded-md">
      <span className="text-white">DevGadget&apos;s</span>&nbsp;
      <span className="text-teal-200">Choice</span>
    </div>
  ) : (
    <div className="hidden" />
  )
}

DevGadgetsChoice.propTypes = {
  devgadgets_choice: PropTypes.bool.isRequired,
}
export default DevGadgetsChoice
