//Modules
import React from "react"
import { graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"
//Components
import Layout from "../components/Layout/Layout"
import Hero from "../components/Utility/Hero/Hero"
import BannerText from "../components/Utility/BannerText/BannerText"
import CTAButton from "../components/Utility/CTAButton/CTAButton"
import Cards from "../components/Index/Cards/Cards"
import CTANews from "../components/Utility/CTANews/CTANews"
import SEO from "../components/SEO/SEO"
import InvestmentServices from "../components/InvestmentServices/InvestmentServices"
import SecondaryButton from "../components/Utility/SecondaryButton/SecondaryButton"

const IndexPage = ({ data }) => {
  const imageFromQuery = data.bg
  const image = getImage(imageFromQuery)
  const bgImage = convertToBgImage(image)

  return (
    <Layout>
      <SEO titleExtra="Home" keywordsExtra="" descriptionExtra="Home" />

      <Hero image={bgImage} type="home">
        <BannerText
          title="RP Financial Group"
          info="Integrity Driven Client Solutions. Expert Bespoke Advice"
        >
          <div
            style={{
              display: "flex",
            }}
          >
            <CTAButton path="/services" text="View Our Services" />
            <SecondaryButton path="/contact" text="Contact Us" />
          </div>
        </BannerText>
      </Hero>

      <Cards />

      <InvestmentServices />

      <CTANews />
    </Layout>
  )
}

export const query = graphql`
  {
    bg: file(relativePath: { eq: "sydney_skyline.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          width: 1400
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`

export default IndexPage
