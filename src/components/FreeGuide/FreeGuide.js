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
  PensionReviewContainer,
  Paragraphs,
  OptionsContainer,
  OptionsCard,
  FormSection,
  ContentContainer,
  CopyContainer,
  FormContainer,
} from "./FreeGuide.module.scss"
//Components
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

          <CTAButton path="/guide#form" text="Request Your Free Guide" />
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

      <div className={PensionReviewContainer}>
        <h3>Who Can Benefit From A FREE Pension Review?</h3>

        <ul>
          <li>
            <p>
              <GiCheckMark className={Icon} />
              Do you have a Final Salary Pension? Defined Contribution? Personal
              Pension?
            </p>
          </li>

          <li>
            <p>
              <GiCheckMark className={Icon} />
              If you have worked in the UK and have accumulated a UK pension
              either via your employer or personal scheme - We can provide a
              free comparative advice report outlining your options as an
              expatriate.
            </p>
          </li>
        </ul>

        <h3>
          Request Your Free Guide Now To Take Back Control Of Your UK Pension
          Assets And Position Yourself For Retirement
        </h3>

        <div className={Paragraphs}>
          <p>
            Many public sector pensions are ‘unfunded’ schemes – that is, there
            is no central fund, and they are paid for only by the taxpayer. The
            pensions of teachers, firefighters, NHS workers, the police and the
            armed forces all fall into this category. This means it’s not
            possible to transfer from this kind of pension.
          </p>

          <p>
            Future changes could extend this rule to Private Pensions which
            means you may lose your right to transfer.
          </p>

          <p>
            Find out more about your options by requesting a free UK pension
            advice report outlining your options and making sure you are
            positioned for retirement as an expat.
          </p>
        </div>

        <CTAButton path="/guide#form" text="Request Your Free Guide" />
      </div>

      <div className={OptionsContainer}>
        <div className={OptionsCard}>
          <h3>What Are Your Options?</h3>

          <p>
            Once you have decided to leave the UK, there are a range of benefits
            and opportunities that you can consider to ensure your UK Pension is
            best positioned for retirement.
          </p>

          <p>Simply put, there are 3 options</p>

          <ol>
            <li>
              <p>Do nothing, leave your UK Pension where it is.</p>
            </li>

            <li>
              <p>
                Transfer it to an International SIPP (Self Invested Personal
                Pension)
              </p>
            </li>

            <li>
              <p>
                Transfer it to a HMRC approved QROPS (Qualified Recognised
                Overseas Pension Scheme)
              </p>
            </li>
          </ol>

          <p>
            The <strong>right</strong> choices will depend on your needs and
            circumstances, there is no generic one- size-fits-all-rule for UK
            Pension transfers. This will all depend on a number of factors and
            intentions at retirement.
          </p>

          <p>
            RP Financial will a compose a FREE bespoke UK Suitability report
            outlining your existing plan arrangements, along with detailed
            comparative options, risk assessment, fee’s and recommendations.
          </p>

          <CTAButton path="/guide#form" text="Request Your Free Guide" />
        </div>
      </div>

      <div className={FormSection}>
        <h3>Take Back Control Of Your Pension Today.</h3>

        <div className={ContentContainer}>
          <div className={CopyContainer}>
            <h4>
              Enter your details to receive our free introductory guide to
              pension transfers and find out how you can maximize your pension
              as an expatriate.
            </h4>

            <ul>
              <li>
                <p>
                  <GiCheckMark className={Icon} />
                  What are the benefits?
                </p>
              </li>

              <li>
                <p>
                  <GiCheckMark className={Icon} />
                  What is the Process?
                </p>
              </li>

              <li>
                <p>
                  <GiCheckMark className={Icon} />
                  Do I qualify?
                </p>
              </li>
            </ul>

            <p>
              Switching to an International SIPP or QROPS can offer substantial
              tax savings, whilst taking full control of your Pension. Speak to
              one of our experts at RP Financial to find out what options are
              available to you as an expatriate.
            </p>

            <p>
              The complimentary advice report will offer a comparative review on
              your current UK Pension arrangements with full breakdown your
              options to make sure you are best positioned for retirement.
            </p>

            <p>
              Download your free guide and find out if you qualify to receive a
              free customized advice report.
            </p>

            <p>
              <em>
                Note: Suitable for pension funds of £50,000 or over. This does
                not apply to the state pension or any Public Sector Pensions.
                Please note you will need to be based/or soon to be relocating
                outside the UK in order to use our services. If you are UK
                based, and require help/advice regarding your pension then we
                suggest you contact a local UK regulated adviser. To help you
                find one please either go to the FCA register at{" "}
                <a href="https://register.fca.org.uk">
                  https://register.fca.org.uk
                </a>{" "}
                or unbiased at{" "}
                <a href="https://www.unbiased.co.uk">
                  https://www.unbiased.co.uk
                </a>
                .
              </em>
            </p>
          </div>

          <div className={FormContainer}>
            <Form />
          </div>
        </div>
      </div>
    </section>
  )
}

export default FreeGuide
