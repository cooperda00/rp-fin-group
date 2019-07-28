const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const { data } = await graphql(`
    {
      news: allContentfulRpNewsItem {
        edges {
          node {
            title
          }
        }
      }

      services: allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "service" } } }
      ) {
        edges {
          node {
            frontmatter {
              path
              title
            }
          }
        }
      }

      compliance: allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "compliance" } } }
      ) {
        edges {
          node {
            frontmatter {
              path
              title
            }
          }
        }
      }
    }
  `)

  data.services.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: path.resolve("./src/templates/serviceTemplate.js"),
      context: {
        title: node.frontmatter.title,
      },
    })
  })

  data.compliance.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: path.resolve("./src/templates/complianceTemplate.js"),
      context: {
        title: node.frontmatter.title,
      },
    })
  })

  // amount of posts
  const news = data.news.edges.length
  // posts per page
  const newsPerPage = 3
  // calculate how many pages needed
  const numOfPages = Math.ceil(news / newsPerPage)
  // creates pages based on the number calculated
  Array.from({ length: numOfPages }).forEach((_, i) => {
    createPage({
      //generate correct path
      path: i === 0 ? `/news` : `/news/${i + 1}`,
      //Point to template
      component: path.resolve("./src/templates/newsTemplate.js"),
      context: {
        limit: newsPerPage,
        // calculate how many posts to skip on each new page
        skip: i * newsPerPage,
        // pass numOfPages for generating buttons
        numOfPages,
        // get current page ( 0 index plus 1) for buttons
        currentPage: i + 1,
      },
    })
  })
}
