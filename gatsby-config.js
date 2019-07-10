module.exports = {
  siteMetadata: {
    title: `The Allotment: Vegan Dining`,
    description: `Enjoy hearty, filling vegan takes on British classics in our cozy restaurant. All produce locally sourced!`,
    author: `cooperda`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
  ],
}
