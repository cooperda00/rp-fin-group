//Modules
import React from "react"
import { Link } from "gatsby"
//Sass
import { SecondaryButtonContainer } from "./SecondaryButton.module.scss"

const SecondaryButton = ({ path, text }) => {
  return (
    <Link to={path} className={SecondaryButtonContainer}>
      {text}
    </Link>
  )
}

export default SecondaryButton
