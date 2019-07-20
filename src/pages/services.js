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
    title: data.portfolioManagement.frontmatter.title,
    html: data.portfolioManagement.html,
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

  const statePension = {
    title: data.statePension.frontmatter.title,
    html: data.statePension.html,
  }

  const pensionTransfers = {
    title: data.pensionTransfers.frontmatter.title,
    html: data.pensionTransfers.html,
  }

  return (
    <Layout>
      <SEO titleExtra="Services" keywordsExtra="" descriptionExtra="Services" />
      <Hero image={image}>
        <BannerText title="Investment Services" />
      </Hero>
      <Viewer
        menu={servicesMenu}
        html={currentCopy.html}
        title={currentCopy.title}
        setCurrentCopy={setCurrentCopy}
        educationPlanning={educationPlanning}
        portfolioManagement={portfolioManagement}
        retirementPlanning={retirementPlanning}
        propertyInvestments={propertyInvestments}
        statePension={statePension}
        pensionTransfers={pensionTransfers}
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
    educationPlanning: markdownRemark(
      frontmatter: { title: { eq: "Education Planning" } }
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
      frontmatter: { title: { eq: "Property Investments" } }
    ) {
      html
      frontmatter {
        title
      }
    }
    statePension: markdownRemark(
      frontmatter: { title: { eq: "UK State Pensions" } }
    ) {
      html
      frontmatter {
        title
      }
    }
    pensionTransfers: markdownRemark(
      frontmatter: { title: { eq: "Pension Transfers" } }
    ) {
      html
      frontmatter {
        title
      }
    }
  }
`

export default ServicesPage
