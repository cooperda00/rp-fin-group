//Modules
import React from "react"
//Sass
import { NotFoundContainer } from "./NotFound.module.scss"
//Components
import BannerText from "../../components/Utility/BannerText/BannerText"
import CTAButton from "../Utility/CTAButton/CTAButton"

const NotFound = () => {
  return (
    <section className={NotFoundContainer}>
      <BannerText
        title="This page does not exist"
        info="We made a mistake. Try heading home."
      >
        <CTAButton path="/" text="Head Home" />
      </BannerText>
    </section>
  )
}

export default NotFound
