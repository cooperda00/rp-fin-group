//Modules
import React from "react"
import { Link } from "gatsby"
//Sass
import { CTAButtonContainer, AltColor } from "./CTAButton.module.scss"

const CTAButton = ({ path, text, type }) => {
  return (
    <Link
      to={path}
      className={
        type === "2"
          ? `${CTAButtonContainer} ${AltColor}`
          : `${CTAButtonContainer}`
      }
    >
      {text}
    </Link>
  )
}

export default CTAButton
