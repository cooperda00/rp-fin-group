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
import { complianceMenu } from "../constants/complianceMenu"

const CompliancePage = ({ data }) => {
  const image = data.bg.childImageSharp.fluid
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout>
      <SEO
        titleExtra="Compliance"
        keywordsExtra=""
        descriptionExtra="Compliance"
      />
      <Hero image={image}>
        <BannerText title="Compliance" />
      </Hero>
      <Viewer
        menu={complianceMenu}
        html={html}
        frontmatter={frontmatter}
        noScroll
      />
    </Layout>
  )
}

export const query = graphql`
  {
    bg: file(relativePath: { eq: "sydney_skyline.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    markdownRemark(frontmatter: { title: { eq: "Compliance" } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

export default CompliancePage
