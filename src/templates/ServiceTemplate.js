//Modules
import React from "react"
import { graphql } from "gatsby"
//Components
import Layout from "../components/Layout/Layout"
import BannerText from "../components/Utility/BannerText/BannerText"
import Hero from "../components/Utility/Hero/Hero"
import Viewer from "../components/TemplateComponents/Viewer/Viewer"
//Constants
import { servicesMenu } from "../constants/servicesMenu"

const ServiceTemplate = ({ data }) => {
  const { markdownRemark, bg } = data
  const image = bg.childImageSharp.fluid

  const { frontmatter, html } = markdownRemark

  return (
    <Layout>
      <Hero image={image}>
        <BannerText title="Services" />
      </Hero>
      <Viewer menu={servicesMenu} frontmatter={frontmatter} html={html} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date
        path
        title
      }
    }
    bg: file(relativePath: { eq: "hong_kong_skyline_night.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1900) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default ServiceTemplate
