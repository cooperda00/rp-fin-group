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
import { servicesMenu } from "../constants/servicesMenu"

const ServicesPage = ({ data }) => {
  const image = data.bg.childImageSharp.fluid

  const [currentCopy, setCurrentCopy] = useState({
    title: data.strategicInvestment.frontmatter.title,
    html: data.strategicInvestment.html,
  })

  const familyProtection = {
    title: data.familyProtection.frontmatter.title,
    html: data.familyProtection.html,
  }

  const portfolioManagement = {
    title: data.portfolioManagement.frontmatter.title,
    html: data.portfolioManagement.html,
  }

  const retirementPlanning = {
    title: data.retirementPlanning.frontmatter.title,
    html: data.retirementPlanning.html,
  }

  const strategicInvestment = {
    title: data.strategicInvestment.frontmatter.title,
    html: data.strategicInvestment.html,
  }

  const taxAdvisory = {
    title: data.taxAdvisory.frontmatter.title,
    html: data.taxAdvisory.html,
  }

  return (
    <Layout>
      <SEO titleExtra="Services" keywordsExtra="" descriptionExtra="Services" />
      <Hero image={image}>
        <BannerText title="Our Services" />
      </Hero>
      <Viewer
        menu={servicesMenu}
        html={currentCopy.html}
        title={currentCopy.title}
        setCurrentCopy={setCurrentCopy}
        familyProtection={familyProtection}
        portfolioManagement={portfolioManagement}
        retirementPlanning={retirementPlanning}
        strategicInvestment={strategicInvestment}
        taxAdvisory={taxAdvisory}
      />
      <CTA />
    </Layout>
  )
}

export const query = graphql`
  {
    bg: file(relativePath: { eq: "hong_kong_skyline_night.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    familyProtection: markdownRemark(
      frontmatter: { title: { eq: "Family Protection & Insurance" } }
    ) {
      html
      frontmatter {
        title
      }
    }
    portfolioManagement: markdownRemark(
      frontmatter: { title: { eq: "Portfolio Management" } }
    ) {
      html
      frontmatter {
        title
      }
    }
    retirementPlanning: markdownRemark(
      frontmatter: { title: { eq: "Retirement Planning" } }
    ) {
      html
      frontmatter {
        title
      }
    }
    strategicInvestment: markdownRemark(
      frontmatter: { title: { eq: "Strategic Investment" } }
    ) {
      html
      frontmatter {
        title
      }
    }
    taxAdvisory: markdownRemark(
      frontmatter: { title: { eq: "Tax Advisory & Estate Planning" } }
    ) {
      html
      frontmatter {
        title
      }
    }
  }
`

export default ServicesPage
