//Modules
import React from "react"
import { graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"
//Components
import Layout from "../components/Layout/Layout"
import Hero from "../components/Utility/Hero/Hero"
import BannerText from "../components/Utility/BannerText/BannerText"
import SEO from "../components/SEO/SEO"
import FreeGuide from "../components/FreeGuide/FreeGuide"

const GuidePage = ({ data }) => {
  const imageFromQuery = data.bg
  const image = getImage(imageFromQuery)
  const bgImage = convertToBgImage(image)

  return (
    <Layout>
      <SEO
        titleExtra="Free Guide"
        keywordsExtra=""
        descriptionExtra="Free guide"
      />

      <Hero image={bgImage}>
        <BannerText title="Free Pension Guide" />
      </Hero>

      <FreeGuide />
    </Layout>
  )
}

export const query = graphql`
  {
    bg: file(relativePath: { eq: "bangkok_skyline_day.jpg" }) {
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

export default GuidePage
