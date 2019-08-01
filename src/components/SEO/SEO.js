//Modules
import React from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ titleExtra, keywordsExtra, descriptionExtra }) => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(query)

  const { siteUrl, description, image } = siteMetadata

  return (
    <Helmet title={`${titleExtra} | RP Financial Group`}>
      <meta
        name="keywords"
        content={`${keywordsExtra} Finance, Financial, Advisor, Asia Pacific, Hong Kong, Bangkok, Retirement, Planning`}
      />
      <meta
        name="description"
        content={`${descriptionExtra} | ${description}`}
      />
      <meta name="image" content={`${siteUrl}${image}`} />
      {/* GOOGLE ICON */}
      <link rel="shortcut icon" href="/favicon.ico" />
      {/* TWITTER */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content={`${titleExtra} | RP Financial Group`}
      />
      <meta
        name="twitter:description"
        content={`${descriptionExtra} | ${description}`}
      />
      <meta
        name="twitter:image"
        content="https://cdn-images-1.medium.com/max/1200/1*rUv7xG-XqqkU9gJs8-7efw.png"
      />
      <meta name="twitter:creator" content="@RPFinancialGrp" />
      {/* FACEBOOK */}
      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content={`${titleExtra} | RP Financial Group`}
      />
      <meta
        property="og:description"
        content={`${descriptionExtra} | ${description}`}
      />
      <meta property="og:image" content={`${siteUrl}${image}`} />
      {/* <meta property="og:image" content={image} /> */}
      <meta property="og:image:width" content="400" />
      <meta property="og:image:height" content="300" />
    </Helmet>
  )
}

const query = graphql`
  {
    site {
      siteMetadata {
        siteUrl
        description
        image
      }
    }
  }
`

export default SEO
