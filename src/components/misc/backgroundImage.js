import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import BackgroundImage from 'gatsby-background-image'

const BackgroundImg = ({ children, index, className }) => {
    const {
        home,
        projects,
        blog 
    } = useStaticQuery(
        graphql`
            query {
                home: file(relativePath: {eq: "background/lonepath.jpg"}) {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
                projects: file(relativePath: {eq: "background/pawel-czerwinski-VWVO0g9A3rg-unsplash.jpg"}) {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
                blog: file(relativePath: {eq: "background/blog.jpg"}) {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        `
    )

    const backgrounds = [
        home.childImageSharp.fluid,
        projects.childImageSharp.fluid,
        blog.childImageSharp.fluid
    ]

    return (
        <BackgroundImage
            fluid={backgrounds[index]}
            className={className}
            style={{
                height: `100vh`,
                width: `100vw`,
                backgroundColor: `transparent`,
                backgroundSize: `cover`,
                backgroundPosition: `center center`,
                display: `flex`,
                alignItems: `center`,
            }}
        >
            { children }
        </BackgroundImage>
    )
}

export default BackgroundImg