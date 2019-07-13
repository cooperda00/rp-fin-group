//Modules
import React from "react"
import { graphql } from "gatsby"
//Components
import Layout from "../components/Layout/Layout"
import Hero from "../components/Utility/Hero/Hero"
import BannerText from "../components/Utility/BannerText/BannerText"
import Viewer from "../components/TemplateComponents/Viewer/Viewer"
import SEO from "../components/SEO/SEO"
//Constants
import { servicesMenu } from "../constants/servicesMenu"

const ServicesPage = ({ data }) => {
  const image = data.bg.childImageSharp.fluid
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout>
      <SEO titleExtra="Services" keywordsExtra="" descriptionExtra="Services" />
      <Hero image={image}>
        <BannerText title="Our Services" />
      </Hero>
      <Viewer
        menu={servicesMenu}
        html={html}
        frontmatter={frontmatter}
        noScroll
      />
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
    markdownRemark(frontmatter: { title: { eq: "Our Services" } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

export default ServicesPage
