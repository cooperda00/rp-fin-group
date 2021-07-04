//Modules
import React from "react"
//Sass
import { SuccessContainer } from "./Success.module.scss"
//Components
import BannerText from "../../components/Utility/BannerText/BannerText"
import CTAButton from "../Utility/CTAButton/CTAButton"

const Success = () => {
  return (
    <section className={SuccessContainer}>
      <BannerText
        title="Thanks for your message"
        info="We will be in touch shortly"
      >
        <CTAButton path="/" text="Head Home" />
      </BannerText>
    </section>
  )
}

export default Success
