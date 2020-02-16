import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/misc/seo"

import Landing from "../components/home/landing"
import About from "../components/home/about"
import Services from "../components/home/services"

const IndexPage = () => {
  const payload = {
    empty: false,
    title: "Landing",
    index: 1,
    length: 3,
    next: {
      url: "/about",
      title: "About Me"
    },
    previous: null,
    back: null
  }

  return (
    <Layout payload={payload}>
      <SEO title="Home" />
      <Landing />
    </Layout>
  )
  }

export default IndexPage
