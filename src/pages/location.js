//Modules
import React from "react"
import { graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"
//Components
import Layout from "../components/Layout/Layout"
import Hero from "../components/Utility/Hero/Hero"
import BannerText from "../components/Utility/BannerText/BannerText"
import Contact from "../components/Contact/Contact"
import SEO from "../components/SEO/SEO"

const LocationPage = ({ data }) => {
  const imageFromQuery = data.bg
  const image = getImage(imageFromQuery)
  const bgImage = convertToBgImage(image)

  return (
    <Layout>
      <SEO titleExtra="Location" keywordsExtra="" descriptionExtra="Location" />
      <Hero image={bgImage}>
        <BannerText title="Our Locations" />
      </Hero>
      <Contact />
    </Layout>
  )
}

export const query = graphql`
  {
    bg: file(relativePath: { eq: "auckland_skyline.jpg" }) {
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

export default LocationPage
