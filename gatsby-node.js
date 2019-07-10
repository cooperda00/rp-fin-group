const path = require(`path`)

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const complianceTemplate = path.resolve(`src/templates/ComplianceTemplate.js`)
  const serviceTemplate = path.resolve(`src/templates/ServiceTemplate.js`)

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    return result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      if (node.frontmatter.path.includes("/compliance/")) {
        createPage({
          path: node.frontmatter.path,
          component: complianceTemplate,
          context: {},
        })
      } else if (node.frontmatter.path.includes("/services/")) {
        createPage({
          path: node.frontmatter.path,
          component: serviceTemplate,
          context: {},
        })
      }
    })
  })
}
