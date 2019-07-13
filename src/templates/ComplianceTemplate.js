//Modules
import React from "react"
import { graphql } from "gatsby"
//Components
import Layout from "../components/Layout/Layout"
import BannerText from "../components/Utility/BannerText/BannerText"
import Hero from "../components/Utility/Hero/Hero"
import Viewer from "../components/TemplateComponents/Viewer/Viewer"
import SEO from "../components/SEO/SEO"
//Constants
import { complianceMenu } from "../constants/complianceMenu"

const ComplianceTemplate = ({ data }) => {
  const { markdownRemark, bg } = data
  const image = bg.childImageSharp.fluid

  const { frontmatter, html } = markdownRemark

  return (
    <Layout>
      <SEO
        titleExtra={frontmatter.title}
        keywordsExtra=""
        descriptionExtra={frontmatter.title}
      />
      <Hero image={image}>
        <BannerText title="Compliance" />
      </Hero>
      <Viewer menu={complianceMenu} frontmatter={frontmatter} html={html} />
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
    bg: file(relativePath: { eq: "sydney_skyline.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1900) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default ComplianceTemplate
