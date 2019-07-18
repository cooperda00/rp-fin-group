module.exports = {
  siteMetadata: {
    title: `RP Financial Group`,
    description: `RP Financial Group: A trusted financial consultancy and private brokerage offering investment and financial planning solutions to individuals and businesses throughout Asia Pacific`,
    author: `danielcooper.io`,
    siteUrl: "https://rpfingroup.com",
    image: "/image.jpg",
  },
  plugins: [
    `gatsby-plugin-sass`,
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
        icon: "src/images/logo.webp",
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/src/markdown`,
      },
    },
  ],
}
