import { Link } from "gatsby"
import React from "react"

import TwitterW from '../../images/Icons/social/twitter.svg'
import FacebookW from '../../images/Icons/social/facebook.svg'
import InstagramW from '../../images/Icons/social/003-instagram.svg'
import GithubW from '../../images/Icons/social/github.svg'
import AG from '../../images/Icons/AG.svg';

const Header = () => 
    <div className="Desktop-Nav">
      <div className="Logo">
        <Link to="/"><img src={AG} alt="Logo"/></Link>
      </div>
      <div className="Menu">
        <Link to="/" activeClassName="active" >Home</Link>
        <Link to="/projects" activeClassName="active">Projects</Link>
        <Link to="/blog" activeClassName="active">Blog</Link>
      </div>
      <div className="Social-Media">
        <a href="https://twitter.com/DevGayflor">
          <img src={TwitterW} alt="Twitter" />
        </a>
        <a href="https://Instagram.com/anthony.gflor">
          <img src={InstagramW} alt="Instagram" />
        </a>
        <a href="https://www.facebook.com/anthony.gayflor">
          <img src={FacebookW} alt="Facebook" />
        </a>
        <a href="https://github.com/anthonyg56">
          <img src={GithubW} alt="Github" />
        </a>
      </div>
    </div>

export default Header
