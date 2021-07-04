//Modules
import React from "react"
import { graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"
//Components
import Layout from "../components/Layout/Layout"
import Hero from "../components/Utility/Hero/Hero"
import BannerText from "../components/Utility/BannerText/BannerText"
import About from "../components/About/About"
import SEO from "../components/SEO/SEO"
import CTA from "../components/Utility/CTA/CTA"

const AboutPage = ({ data }) => {
  const imageFromQuery = data.bg
  const image = getImage(imageFromQuery)
  const bgImage = convertToBgImage(image)

  return (
    <Layout>
      <SEO titleExtra="About Us" keywordsExtra="" descriptionExtra="About Us" />
      <Hero image={bgImage}>
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
        gatsbyImageData(
          width: 1400
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`

export default AboutPage
