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
    }
  `)

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
