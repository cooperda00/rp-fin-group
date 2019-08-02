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
      {/* <meta name="twitter:image" content={`${siteUrl}${image}`} /> */}
      <meta name="twitter:image" content="https://i.imgur.com/lt5q5cj.jpg" />
      <meta name="twitter:creator" content="@RPFinancialGrp" />
      {/* FACEBOOK */}
      <meta
        property="og:url"
        content={siteUrl}
        prefix="og: http://ogp.me/ns#"
      />
      <meta
        property="og:type"
        content="website"
        prefix="og: http://ogp.me/ns#"
      />
      <meta
        property="og:title"
        content={`${titleExtra} | RP Financial Group`}
        prefix="og: http://ogp.me/ns#"
      />
      <meta
        property="og:description"
        content={`${descriptionExtra} | ${description}`}
        prefix="og: http://ogp.me/ns#"
      />
      <meta
        property="og:image"
        content="https://i.imgur.com/JKgEqlr.jpg"
        prefix="og: http://ogp.me/ns#"
      />
      <meta
        property="og:image:width"
        content="1200"
        prefix="og: http://ogp.me/ns#"
      />
      <meta
        property="og:image:height"
        content="627"
        prefix="og: http://ogp.me/ns#"
      />
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
