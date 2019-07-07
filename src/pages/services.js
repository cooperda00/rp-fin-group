//Modules
import React from "react"
import { graphql } from "gatsby"
//Components
import Layout from "../components/Layout/Layout"
import Hero from "../components/Utility/Hero/Hero"
import BannerText from "../components/Utility/BannerText/BannerText"

const ServicesPage = ({ data }) => {
  const image = data.bg.childImageSharp.fluid

  return (
    <Layout>
      <Hero image={image}>
        <BannerText title="Our Services" />
      </Hero>
    </Layout>
  )
}

export const query = graphql`
  {
    bg: file(relativePath: { eq: "hong_kong_skyline_night.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default ServicesPage
