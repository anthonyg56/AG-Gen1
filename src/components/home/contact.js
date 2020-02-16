import React from "react"

import WebWhite from "../../images/Icons/Web-White.png";
import ContentWhite from "../../images/Icons/Content-White.png";
import CreativityWhite from "../../images/Icons/Creativity-White.png";

const Services = () => {
  return (
    <div className="Skills">
      <div className="Container">
        <div className="Attribute">
          <div className="Pic">
            <img src={WebWhite} alt="Web-Development" />
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
            <img src={CreativityWhite} alt="Creativity" />
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
            <img src={ContentWhite} alt="Content" />
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
    </div>
  )
}

export default Services