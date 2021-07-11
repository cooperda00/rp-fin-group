//Modules
import React from "react"
//Sass
import {
  CTAContainer,
  ImageContainer,
  Image,
  Copy,
} from "./FreeGuide.module.scss"
//Component
import Container from "../Layout/Container/Container"
import CTAButton from "../Utility/CTAButton/CTAButton"
import Form from "./Form"

const FreeGuide = () => {
  return (
    <Container>
      <div className={CTAContainer}>
        <div className={ImageContainer}>
          <img
            src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-ipad-mini-wifi-spacegray-gallery-2019?wid=1144&hei=1144&fmt=jpeg&qlt=80&.v=1581026442388"
            alt="ipad mock"
            className={Image}
          />
        </div>

        <div className={Copy}>
          <h2>Relocated overseas?</h2>
          <h2>Apply below to receive your FREE UK Pension guide</h2>
          <p>
            Applies to all UK Pensions (Company/Personal) Excludes all State and
            Public Sector Pension Schemes
          </p>

          <CTAButton path="/guide#hello" text="Request Your Free Guide" />
        </div>
      </div>

      <Form />
    </Container>
  )
}

export default FreeGuide
