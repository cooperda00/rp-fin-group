//Modules
import React from "react"
//Components
import Layout from "../components/Layout/Layout"
import NotFound from "../components/NotFound/NotFound"
import SEO from "../components/SEO/SEO"

const NotFoundPage = () => (
  <Layout>
    <SEO
      titleExtra="Page Not Found"
      keywordsExtra=""
      descriptionExtra="Page Not Found"
    />

    <NotFound />
  </Layout>
)

export default NotFoundPage
