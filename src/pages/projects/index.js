import React from "react"
import { graphql } from 'gatsby'

import Layout from "../../components/layout/layout"
import SEO from "../../components/misc/seo"
import ProjectsCard from '../../components/projects/Card'
import BackgroundImg from '../../components/misc/backgroundImage'

const ProjectsPage = ({ data }) => {
    const projects = data.allContentfulProject.edges.map(({node}) => node)

    const cards = projects.map((project, key) => <ProjectsCard title={project.title} photo={project.coverPhoto.file.url} slug={project.slug} key={key} x={project.backgroundPositionX} y={project.backgroundPositionY} />)

    const payload = {
      empty: true,
      title: "My Projects"
  }
    return (
        <Layout payload={payload}>
            <SEO title="Projects" />
            <BackgroundImg index={1} className="Projects">
                <div className="Cards-Container">
                    { cards }
                </div>
            </BackgroundImg>
        </Layout>
    )
}

export default ProjectsPage

export const PageQuery = graphql`
  query {
    allContentfulProject {
      edges {
        node {
          title
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
          body {
            childContentfulRichText {
              html
            }
          }
          githubRepo
          url
          slug
          backgroundPositionX
          backgroundPositionY
        }
      }
    }
  }
`