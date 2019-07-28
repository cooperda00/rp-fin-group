//Modules
import React from "react"
import { graphql } from "gatsby"
//Components
import Layout from "../components/Layout/Layout"
import Hero from "../components/Utility/Hero/Hero"
import BannerText from "../components/Utility/BannerText/BannerText"
import About from "../components/About/About"
import SEO from "../components/SEO/SEO"
import CTA from "../components/Utility/CTA/CTA"

const AboutPage = ({ data }) => {
  const image = data.bg.childImageSharp.fluid
  return (
    <Layout>
      <SEO titleExtra="About Us" keywordsExtra="" descriptionExtra="About Us" />
      <Hero image={image}>
        <BannerText title="About Us" />
      </Hero>
      <About />
      <CTA />
    </Layout>
  )
}

export const query = graphql`
  {
    bg: file(relativePath: { eq: "singapore.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`

export default AboutPage
