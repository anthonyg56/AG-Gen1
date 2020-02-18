/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"

import Header from "./header"
import Footer from './footer'

import MobileNav from './mobileNav'
import '../../sass/index.scss'

const Layout = ({ children, payload }) => {
  const [ isOpen, toggleOpen ] = useState(false)
  const toggle = () => isOpen === false ? toggleOpen(true) : toggleOpen(false)

  const style = {
    open: {
      zIndex: 1
    },
    close: {
      display: 'none',
      zIndex: -1
    }
  }
  const currentStyle = isOpen === false ? style.close : style.open

  return (
    <div className="Layout">
      <MobileNav style={currentStyle} close={() => toggleOpen(false)}/>
      <Header/>
      <div className="Nav-Menu-Mobile">
        {/* <img src={MenuIcon}/> */}
        <h4 onClick={() => toggle()} >{isOpen === false ? 'Menu' : 'Close'}</h4>
      </div>
      <div className="Content">
        { children }
      </div>
      <Footer payload={payload} />
    </div>
  )
}

export default Layout
