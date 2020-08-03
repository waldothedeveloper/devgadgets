import React from "react"
const validateEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
//
export const useJoinNewsletter = () => {
  const [email, setEmail] = React.useState("")
  const [errors, setErrors] = React.useState({ message: "" })

  const handleEmailChange = event => {
    if (event) event.persist()
    setEmail(event.target.value)
  }

  const handleSubmit = event => {
    if (event) event.preventDefault()

    if (validateEmail.test(email)) {
      setErrors({ message: "" })
    } else {
      setErrors({ message: "Please enter a valid email address" })
    }
  }

  return { email, handleEmailChange, handleSubmit, errors }
}
