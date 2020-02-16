import React from "react"

import BackgroundImg from '../misc/backgroundImage'

import BrandingIcon from "../../images/Icons/home/003-website.svg";
import CreativityIcon from "../../images/Icons/home/002-ruler.svg";
import WebDevIcon from "../../images/Icons/home/001-setting.svg";

const Services = () => {
  return (
    <BackgroundImg index={0} className="Services">
      <div className="Container">
        <div className="Attribute">
          <div className="Pic">
            <img src={WebDevIcon} alt="Web-Development" />
          </div>
          <div className="Name">
            <h3>Web Development</h3>
          </div>
          <div className="Description">
            <p>
              As a front-end developer I write code to bridge the connection
              between product and design. Integrating the latest technology to
              guarantee a fast and reliable experience from start to finish.
            </p>
          </div>
        </div>
        <div className="Attribute">
          <div className="Pic">
            <img src={CreativityIcon} alt="Creativity" />
          </div>
          <div className="Name">
            <h3>Creative Solutions</h3>
          </div>
          <div className="Description">
            <p>
              Different problems require different solutions to meet
              expectations. In order produce results its imperative to be
              creative and think outside the box strategically.
            </p>
          </div>
        </div>
        <div className="Attribute">
          <div className="Pic">
            <img src={BrandingIcon} alt="Content" />
          </div>
          <div className="Name">
            <h3>Content Management</h3>
          </div>
          <div className="Description">
            <p>
              Content is everywhere on the web today. CMS provides an efficient
              system to help manage content in large or small quantities stay
              simple, clean, and organized.
            </p>
          </div>
        </div>
      </div>
    </BackgroundImg>
  )
}

export default Services