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

const ServicesPage = ({ data, location }) => {
  const image = data.bg.childImageSharp.fluid

  const [currentCopy, setCurrentCopy] = useState({
    title: data.service.frontmatter.title,
    html: data.service.html,
  })

  const educationPlanning = {
    title: data.educationPlanning.frontmatter.title,
    html: data.educationPlanning.html,
  }

  const portfolioManagement = {
    title: data.portfolioManagement.frontmatter.title,
    html: data.portfolioManagement.html,
  }

  const retirementPlanning = {
    title: data.retirementPlanning.frontmatter.title,
    html: data.retirementPlanning.html,
  }

  const propertyInvestments = {
    title: data.propertyInvestments.frontmatter.title,
    html: data.propertyInvestments.html,
  }

  const pensionTransfers = {
    title: data.pensionTransfers.frontmatter.title,
    html: data.pensionTransfers.html,
  }

  const lifeInsurance = {
    title: data.lifeInsurance.frontmatter.title,
    html: data.lifeInsurance.html,
  }

  const willsTrusts = {
    title: data.willsTrusts.frontmatter.title,
    html: data.willsTrusts.html,
  }

  return (
    <Layout location={location}>
      <SEO titleExtra="Services" keywordsExtra="" descriptionExtra="Services" />
      <Hero image={image}>
        <BannerText title="Investment Services" />
      </Hero>
      <Viewer
        currentCopy={currentCopy}
        menu={servicesMenu}
        html={currentCopy.html}
        title={currentCopy.title}
        setCurrentCopy={setCurrentCopy}
        educationPlanning={educationPlanning}
        portfolioManagement={portfolioManagement}
        retirementPlanning={retirementPlanning}
        propertyInvestments={propertyInvestments}
        pensionTransfers={pensionTransfers}
        lifeInsurance={lifeInsurance}
        willsTrusts={willsTrusts}
      />
      <CTA />
    </Layout>
  )
}

export const query = graphql`
  query($title: String!) {
    service: markdownRemark(frontmatter: { title: { eq: $title } }) {
      html
      frontmatter {
        title
      }
    }
    bg: file(relativePath: { eq: "hong_kong_skyline_night.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    educationPlanning: markdownRemark(
      frontmatter: { title: { eq: "Education Fee Planning" } }
    ) {
      html
      frontmatter {
        title
      }
    }
    portfolioManagement: markdownRemark(
      frontmatter: { title: { eq: "Asset & Portfolio Management" } }
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
    propertyInvestments: markdownRemark(
      frontmatter: { title: { eq: "Property Investment" } }
    ) {
      html
      frontmatter {
        title
      }
    }
    pensionTransfers: markdownRemark(
      frontmatter: { id: { eq: "pension transfer" } }
    ) {
      html
      frontmatter {
        title
      }
    }
    lifeInsurance: markdownRemark(
      frontmatter: { title: { eq: "Life / Critical Illness Insurance" } }
    ) {
      html
      frontmatter {
        title
      }
    }
    willsTrusts: markdownRemark(
      frontmatter: { title: { eq: "Wills / Trusts" } }
    ) {
      html
      frontmatter {
        title
      }
    }
  }
`

export default ServicesPage
