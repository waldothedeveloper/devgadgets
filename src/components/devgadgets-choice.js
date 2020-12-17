import React from "react"
import PropTypes from "prop-types"

const DevGadgetsChoice = ({ devgadgets_choice }) => {
  return devgadgets_choice ? (
    <div className="pl-3 pr-8 py-0.5 bg-teal-900 mb-2 rounded-md">
      <span className="text-white text-sm">DevGadget&apos;s</span>&nbsp;
      <span className="text-teal-200 text-sm">Choice</span>
    </div>
  ) : (
    <div className="hidden" />
  )
}

DevGadgetsChoice.propTypes = {
  devgadgets_choice: PropTypes.bool,
}
export default DevGadgetsChoice
