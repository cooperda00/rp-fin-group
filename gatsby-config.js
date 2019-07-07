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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
