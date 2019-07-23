//Modules
import React from "react"
import { graphql } from "gatsby"
//Components
import Layout from "../components/Layout/Layout"
import Hero from "../components/Utility/Hero/Hero"
import BannerText from "../components/Utility/BannerText/BannerText"
import CTAButton from "../components/Utility/CTAButton/CTAButton"
import Cards from "../components/Index/Cards/Cards"
import CTA from "../components/Utility/CTA/CTA"
import SEO from "../components/SEO/SEO"
import InvestmentServices from "../components/InvestmentServices/InvestmentServices"
import SecondaryButton from "../components/Utility/SecondaryButton/SecondaryButton"

const IndexPage = ({ data }) => {
  const image = data.bg.childImageSharp.fluid

  return (
    <Layout>
      <SEO titleExtra="Home" keywordsExtra="" descriptionExtra="Home" />

      <Hero image={image} type="home">
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

      <CTA />

      <InvestmentServices />
    </Layout>
  )
}

export const query = graphql`
  {
    bg: file(relativePath: { eq: "melbourne_skyline_2.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`

export default IndexPage
