import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout/layout'
import SEO from '../components/misc/seo'
import BodySections from '../components/projects/bodySections'

import LeftArrowIcon from '../images/Icons/Navigation/left-arrow.svg'
import DescriptionIcon from '../images/Icons/projects/description.svg'
import ContributionIcon from '../images/Icons/projects/role.svg'
import ToolsIcon from '../images/Icons/projects/tools.svg'
import LiveIcon from '../images/Icons/projects/live.svg'
import GithubIcon from '../images/Icons/projects/github.svg'

const ProjectPost = ({ data, pageContext }) => {
    let index = 0
    const switchIndex = (newIndex) => index === newIndex ? null : index = newIndex

    const context = pageContext
    const {
        previous,
        next,
        index: payloadIndex,
        length
    } = context
    console.log(context)

    const projects = data.contentfulProject
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
        primarySvgFilter
     } = projects
 
     const payload = {
        empty: false,
        title: title,
        index: payloadIndex,
        length: length,
        next: next === null ? null : {
          url: `/projects/${next.slug}`,
          title: next.title
        },
        previous: previous === null ? null : {
            url: `/projects/${previous.slug}`,
            title: previous.title
        },
        back: {
            url: "/projects",
            title: "Projects"
        }
      }

    const style = {
        active: {
            backgroundColor: secondaryColoe,
            color: primaryColor
        },
        normal: {
            backgroundColor: primaryColor,
            color: secondaryColoe
        }
    }
    const svgStyle = {
        active: {
            filter: primarySvgFilter
        },
        normal: {
            filter: svgFilter
        }
    }

    return (
        <Layout payload={payload}>
            <SEO title={title}/>
            <div className='Project-Display' style={style.normal}>
                <div className="Container">
                    <div className="Body" >
                        <BodySections 
                            index={index} 
                            projectDescription={body}
                            contributionText={myRole}
                            //myToolsText={myTools}
                        />
                        <div className="Picture">
                            <img src={mockup.file.url}/>
                        </div>
                    </div>
                    <div className="Icon-Links">
                        <div className={`Icon ${index === 0 ? 'Active-Icon' : null}`} id="Description" onClick={ () => index === 0 ? null : index = 0 } style={ index === 0 ? style.active : null }>
                            <img src={DescriptionIcon} style={ index === 0 ? svgStyle.active : svgStyle.normal } />
                            <h6>Description</h6>
                        </div>
                        <div className={`Icon ${index === 1 ? 'Active-Icon' : null}`} id="My-Role" onClick={ () => index === 1 ? null : index = 1 } style={ index === 1 ? style.active : null }>
                            <img src={ContributionIcon} style={ index === 1 ? svgStyle.active : svgStyle.normal } />
                            <h6>My Contribution</h6>
                        </div>
                        <div className={`Icon ${index === 2 ? 'Active-Icon' : null}`} id="Tools" /*onClick={ () => switchIndex(2) }*/style={ index === 2 ? style.active : null } >
                            <img src={ToolsIcon} style={{ filter: index === 2 ? primarySvgFilter : svgFilter }} />
                            <h6>Choice Of Tools</h6>
                        </div>
                        <a href={url} className="Icon" id="Live-Demo">
                            <img src={LiveIcon} style={svgStyle.normal} />
                            { url === "#" ? <h6 style={{color: secondaryColoe}}>Demo Unavailable</h6> : <h6 style={{color: secondaryColoe}}>Live Demo</h6> }
                        </a>
                        <a href={githubRepo} className="Icon" id="Github">
                            <img src={GithubIcon} style={svgStyle.normal} />
                            { githubRepo === "#" ? <h6 style={{color: secondaryColoe}}>Github Unavailable</h6> : <h6 style={{color: secondaryColoe}}>Github</h6> }
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
                title,
                author
            }
        }
        contentfulProject(slug: { eq: $slug } ) {
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
            body{
                childContentfulRichText {
                    html
                }
            }
            myRole{
                childContentfulRichText {
                    html
                }
            }
        }
    }
`