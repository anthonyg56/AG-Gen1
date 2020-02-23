import React, { useState } from "react"
import { graphql } from "gatsby"

// Compoenents
import Layout from "../components/layout/layout"
import SEO from "../components/misc/seo"
import BodySections from "../components/projects/bodySections"

// Icons for toolbar
import DescriptionIcon from "../images/Icons/projects/description.svg"
import ContributionIcon from "../images/Icons/projects/role.svg"
import LiveIcon from "../images/Icons/projects/live.svg"
import GithubIcon from "../images/Icons/projects/github.svg"

const ProjectPost = ({ data, pageContext }) => {
  // State hook to make toolbar dynamic
  const [index, toggleIndex] = useState(0)
  const toggle = newIndex => (index === newIndex ? null : toggleIndex(newIndex))

  // Page context data
  const context = pageContext
  const { previous, next, index: payloadIndex, length } = context

  // Contentful projects data from graphhql
  const projectsData = data.contentfulProject
  const {
    title,
    githubRepo,
    url,
    mockup,
    primaryColor,
    secondaryColoe,
    svgFilter,
    body,
    myRole,
    primarySvgFilter,
  } = projectsData

  // Payload object for footer
  const payload = {
    empty: false,
    title: title,
    index: payloadIndex,
    length: length,
    next:
      next === null
        ? null
        : {
            url: `/projects/${next.slug}`,
            title: next.title,
          },
    previous:
      previous === null
        ? null
        : {
            url: `/projects/${previous.slug}`,
            title: previous.title,
          },
    back: {
      url: "/projects",
      title: "Projects",
    },
  }

  // Dynamic Styles
  const styles = {
    icons: {
      active: {
        filter: primarySvgFilter,
      },
      normal: {
        filter: svgFilter,
      },
    },
    layout: {
      active: {
        backgroundColor: secondaryColoe,
        color: primaryColor,
      },
      normal: {
        backgroundColor: primaryColor,
        color: secondaryColoe,
      },
    },
  }

  return (
    <Layout payload={payload}>
      <SEO title={title} />
      <div className="Project-Display" style={styles.layout.normal}>
        <div className="Container">
          <div className="Body">
            <BodySections
              index={index}
              projectDescription={body}
              contributionText={myRole}
              //myToolsText={myTools}
            />
            <div className="Picture">
              <img src={mockup.file.url} alt={`mockup of ${title}`} />
            </div>
          </div>
          <div className="Icon-Links">
            <div
              className={`Icon ${index === 0 ? "Active-Icon" : null}`}
              id="Description"
              onClick={() => toggle(0)}
              style={index === 0 ? styles.layout.active : null}
            >
              <img
                src={DescriptionIcon}
                alt="description icon"
                style={index === 0 ? style.icons.active : style.icons.normal}
              />
              <h6>Description</h6>
            </div>
            <div
              className={`Icon ${index === 1 ? "Active-Icon" : null}`}
              id="My-Role"
              onClick={() => toggle(1)}
              style={index === 1 ? styles.layout.active : null}
            >
              <img
                src={ContributionIcon}
                alt="contribution icon"
                style={index === 1 ? style.icons.active : style.icons.normal}
              />
              <h6>My Contribution</h6>
            </div>
            <a href={url} className="Icon" id="Live-Demo">
              <img
                src={LiveIcon}
                alt="live demo icon"
                style={style.icons.normal}
              />
              {url === "#" ? (
                <h6 style={{ color: secondaryColoe }}>Demo Unavailable</h6>
              ) : (
                <h6 style={{ color: secondaryColoe }}>Live Demo</h6>
              )}
            </a>
            <a href={githubRepo} className="Icon" id="Github">
              <img
                src={GithubIcon}
                alt="github icon"
                style={style.icons.normal}
              />
              {githubRepo === "#" ? (
                <h6 style={{ color: secondaryColoe }}>Github Unavailable</h6>
              ) : (
                <h6 style={{ color: secondaryColoe }}>Github</h6>
              )}
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ProjectPost

export const pageQuery = graphql`
  query ProjectPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    contentfulProject(slug: { eq: $slug }) {
      coverPhoto {
        file {
          url
        }
      }
      mockup {
        file {
          url
        }
      }
      title
      body {
        childContentfulRichText {
          html
        }
      }
      slug
      githubRepo
      url
      primaryColor
      secondaryColoe
      svgFilter
      primarySvgFilter
      body {
        childContentfulRichText {
          html
        }
      }
      myRole {
        childContentfulRichText {
          html
        }
      }
    }
  }
`
