/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

import Header from "./header"
import Footer from './footer'

import MenuIcon from '../../images/Icons/Navigation/menu.svg'
import '../../sass/index.scss'

const Layout = ({ children, payload }) => {

  return (
    <div className="Layout">
      <Header />
      <div className="Nav-Menu-Mobile">
        {/* <img src={MenuIcon}/> */}
        <h4>Menu</h4>
      </div>
      <div className="Content">
        { children }
      </div>
      <Footer payload={payload} />
    </div>
  )
}

export default Layout
