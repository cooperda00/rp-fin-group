require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `RP Financial Group`,
    description: `RP Financial Group: A trusted financial consultancy and private brokerage offering investment and financial planning solutions to individuals and businesses throughout Asia Pacific`,
    author: `danielcooper.io`,
    siteUrl: "https://www.rpfingroup.com",
    image: "/images/twittercard.png",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: "UA-144929354-1",
          cookieName: "gatsby-gdpr-google-analytics",
          anonymize: true,
        },
        facebookPixel: {
          pixelId: "1227130054456195",
          cookieName: "gatsby-gdpr-facebook-pixel",
        },
        environments: ["production", "development"],
      },
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: "1227130054456195",
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("node-sass"),
      },
    },
    "gatsby-plugin-image",
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sitemap`,
    "gatsby-plugin-robots-txt",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `RP Financial Group`,
        short_name: `RP Fin Group`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#36723e`,
        display: `standalone`,
        icon: "src/images/logo_cropped.png",
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: "gatsby-plugin-html-attributes",
      options: {
        lang: "en",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-compliance`,
        path: `${__dirname}/src/markdown-compliance`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-services`,
        path: `${__dirname}/src/markdown-services`,
      },
    },
  ],
}
