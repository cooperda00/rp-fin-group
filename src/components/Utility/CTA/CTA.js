//Modules
import React from "react"
//Sass
import { CTAContainer, Left, Right } from "./CTA.module.scss"
//Components
import Container from "../../Layout/Container/Container"
import CTAButton from "../CTAButton/CTAButton"

const CTA = () => {
  return (
    <Container pattern="0">
      <div className={CTAContainer}>
        <div className={Left}>
          <p>Speak with one of our expert advisors today.</p>
        </div>

        <div className={Right}>
          <CTAButton path="/contact" text="Get in touch" />
        </div>
      </div>
    </Container>
  )
}

export default CTA
