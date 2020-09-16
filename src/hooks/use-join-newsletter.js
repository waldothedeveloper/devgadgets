import React from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"
const validateEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
//
export const useJoinNewsletter = () => {
  const [email, setEmail] = React.useState("")
  const [errors, setErrors] = React.useState({ message: "" })
  const [mailChimpResponse, setMailChimpResponse] = React.useState({
    message: "",
  })
  // console.log("mailChimpResponse: ", mailChimpResponse)

  const handleEmailChange = event => {
    if (event) event.persist()
    setEmail(event.target.value)
  }

  const handleSubmit = async event => {
    if (event) event.preventDefault()

    if (validateEmail.test(email)) {
      setErrors({ message: "" })
      // console.log("valid email")
      const result = await addToMailchimp(email)
      setMailChimpResponse(result)
      setEmail("")
    } else {
      // console.log("invalid email")
      setErrors({ message: "Please enter a valid email address" })
    }
  }

  return { email, mailChimpResponse, handleEmailChange, handleSubmit, errors }
}
