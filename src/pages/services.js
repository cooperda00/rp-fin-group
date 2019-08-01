//Modules
import React, { useState, useEffect } from "react"
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
    title: "",
    html: "",
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

  const managedPortfolios = {
    title: data.managedPortfolios.frontmatter.title,
    html: data.managedPortfolios.html,
  }

  //Sets state based on what was passed from <Link> - instead of individual pages
  useEffect(() => {
    switch (location.state.title) {
      case "Pension Transfers (QROPS & SIPPs)":
        setCurrentCopy({
          title: data.pensionTransfers.frontmatter.title,
          html: data.pensionTransfers.html,
        })
        break
      case "Wills / Trusts":
        setCurrentCopy({
          title: data.willsTrusts.frontmatter.title,
          html: data.willsTrusts.html,
        })
        break
      case "Life / Critical Illness Insurance":
        setCurrentCopy({
          title: data.lifeInsurance.frontmatter.title,
          html: data.lifeInsurance.html,
        })
        break

      case "Property Investment":
        setCurrentCopy({
          title: data.propertyInvestments.frontmatter.title,
          html: data.propertyInvestments.html,
        })
        break
      case "Retirement Planning":
        setCurrentCopy({
          title: data.retirementPlanning.frontmatter.title,
          html: data.retirementPlanning.html,
        })
        break
      case "Education Fee Planning":
        setCurrentCopy({
          title: data.educationPlanning.frontmatter.title,
          html: data.educationPlanning.html,
        })
        break
      case "Discretionary Managed Portfolios":
        setCurrentCopy({
          title: data.managedPortfolios.frontmatter.title,
          html: data.managedPortfolios.html,
        })
        break
      default:
        setCurrentCopy({
          title: data.portfolioManagement.frontmatter.title,
          html: data.portfolioManagement.html,
        })
        break
    }
  }, [])

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
        managedPortfolios={managedPortfolios}
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
    managedPortfolios: markdownRemark(
      frontmatter: { title: { eq: "Discretionary Managed Portfolios" } }
    ) {
      html
      frontmatter {
        title
      }
    }
  }
`

export default ServicesPage
