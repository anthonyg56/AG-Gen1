import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/misc/seo"

const payload = {
  empty: true,
  title: "404 error"
}

const NotFoundPage = () => (
  <Layout payload={payload}>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
