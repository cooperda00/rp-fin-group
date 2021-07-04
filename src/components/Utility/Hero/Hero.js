//Modules
import React from "react"
import BackgroundImage from "gatsby-background-image"
//Sass
import { HeroContainer, Home, Page } from "./Hero.module.scss"

const Hero = ({ image, type, children }) => {
  const sizeClass = type === "home" ? `${Home}` : `${Page}`

  return (
    <BackgroundImage
      critical
      fadeIn={false}
      {...image}
      className={`${HeroContainer} ${sizeClass}`}
    >
      {children}
    </BackgroundImage>
  )
}

export default Hero
