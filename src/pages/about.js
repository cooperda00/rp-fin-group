//Modules
import React from "react"
import { graphql } from "gatsby"
//Components
import Layout from "../components/Layout/Layout"
import Hero from "../components/Utility/Hero/Hero"
import BannerText from "../components/Utility/BannerText/BannerText"
import About from "../components/About/About"

const AboutPage = ({ data }) => {
  const image = data.bg.childImageSharp.fluid
  return (
    <Layout>
      <Hero image={image}>
        <BannerText title="About Us" />
      </Hero>
      <About />
    </Layout>
  )
}

export const query = graphql`
  {
    bg: file(relativePath: { eq: "singapore_skyline_2.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default AboutPage
