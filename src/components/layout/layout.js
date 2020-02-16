/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

import Header from "./header"
import Footer from './footer'
import '../../sass/index.scss'

const Layout = ({ children, payload }) => {

  return (
    <div className="Layout">
      <Header />
      <div className="Content">
        { children }
      </div>
      <Footer payload={payload} />
    </div>
  )
}

export default Layout
