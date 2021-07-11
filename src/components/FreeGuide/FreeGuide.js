//Modules
import React from "react"
//Sass
import {
  CTAContainer,
  ImageContainer,
  Image,
  Copy,
  BenefitsContainer,
  Icon,
} from "./FreeGuide.module.scss"
//Component
import CTAButton from "../Utility/CTAButton/CTAButton"
import Form from "./Form"
//Icons
import { GiCheckMark } from "react-icons/gi"

const FreeGuide = () => {
  return (
    <section>
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

      <div className={BenefitsContainer}>
        <h3>Benefits Of Transferring My UK Pension</h3>

        <ul>
          <li>
            <p>
              <GiCheckMark className={Icon} />
              UK income tax mitigation
            </p>
          </li>

          <li>
            <p>
              <GiCheckMark className={Icon} />
              Pass 100% of your pension onto beneficiaries tax-free
            </p>
          </li>

          <li>
            <p>
              <GiCheckMark className={Icon} />
              Flexibility of income
            </p>
          </li>

          <li>
            <p>
              <GiCheckMark className={Icon} />
              Full control of investments
            </p>
          </li>

          <li>
            <p>
              <GiCheckMark className={Icon} />
              Choose to receive your pension in any currency
            </p>
          </li>

          <li>
            <p>
              <GiCheckMark className={Icon} />
              Early access to your pension
            </p>
          </li>

          <li>
            <p>
              <GiCheckMark className={Icon} />
              High transfer valuations
            </p>
          </li>
        </ul>
      </div>

      <Form />
    </section>
  )
}

export default FreeGuide
