//Modules
import React from "react"
//Sass
import styles from "./CTA.module.scss"
//Components
import Container from "../../Layout/Container/Container"
import CTAButton from "../CTAButton/CTAButton"

const CTA = () => {
  return (
    <Container pattern="0">
      <div className={styles.CTA}>
        <div className={styles.Left}>
          <p>
            Speak with one of our expert advisors today. Lorem ipsum dolor sit
            amet consectetur adipisicing elit.
          </p>
        </div>

        <div className={styles.Right}>
          <CTAButton path="/contact" text="Get in touch" />
        </div>
      </div>
    </Container>
  )
}

export default CTA
