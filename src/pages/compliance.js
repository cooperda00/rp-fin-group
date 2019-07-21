//Modules
import React, { useState } from "react"
import { graphql } from "gatsby"
//Components
import Layout from "../components/Layout/Layout"
import Hero from "../components/Utility/Hero/Hero"
import BannerText from "../components/Utility/BannerText/BannerText"
import Viewer from "../components/ViewerV2/Viewer"
import SEO from "../components/SEO/SEO"
import CTA from "../components/Utility/CTA/CTA"
//Constants
import { complianceMenu } from "../constants/complianceMenu"

const CompliancePage = ({ data }) => {
  const image = data.bg.childImageSharp.fluid

  const dataCollection = {
    title: data.dataCollection.frontmatter.title,
    html: data.dataCollection.html,
  }

  const disclaimer = {
    title: data.disclaimer.frontmatter.title,
    html: data.disclaimer.html,
  }

  const [currentCopy, setCurrentCopy] = useState({
    title: data.dataCollection.frontmatter.title,
    html: data.dataCollection.html,
  })

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
        html={currentCopy.html}
        title={currentCopy.title}
        dataCollection={dataCollection}
        disclaimer={disclaimer}
        setCurrentCopy={setCurrentCopy}
      />
      <CTA />
    </Layout>
  )
}

export const query = graphql`
  {
    bg: file(relativePath: { eq: "sydney_skyline.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    dataCollection: markdownRemark(
      frontmatter: { title: { eq: "Data Collection" } }
    ) {
      html
      frontmatter {
        title
      }
    }
    disclaimer: markdownRemark(frontmatter: { title: { eq: "Disclaimer" } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

export default CompliancePage
