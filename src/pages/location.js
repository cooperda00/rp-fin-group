//Modules
import React from "react"
import { graphql } from "gatsby"
//Components
import Layout from "../components/Layout/Layout"
import Hero from "../components/Utility/Hero/Hero"
import BannerText from "../components/Utility/BannerText/BannerText"
import Contact from "../components/Contact/Contact"
import SEO from "../components/SEO/SEO"

const LocationPage = ({ data }) => {
  const image = data.bg.childImageSharp.fluid
  return (
    <Layout>
      <SEO titleExtra="Location" keywordsExtra="" descriptionExtra="Location" />
      <Hero image={image}>
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
        fluid {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`

export default LocationPage
