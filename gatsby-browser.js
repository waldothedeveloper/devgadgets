import { wrapRootElement as wrap } from "./root-wrapper"
import "lazysizes"
export const wrapRootElement = wrap

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `DevGadgets.io has been updated in the background. ` +
      `Reload to display the latest version?`
  )

  if (answer === true) {
    window.location.reload()
  }
}
