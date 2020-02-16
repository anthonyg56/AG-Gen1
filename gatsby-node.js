/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    const contentfulComponent = () => path.resolve(`./src/templates/project-post-contentful.js`)

    return graphql(
        `
            {
                allContentfulProject {
                    edges {
                        node {
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
                        }
                    }
                }
            }
        `
    )
    .then(results => {
        if(results.error){
            throw results.error
        }

        const posts = results.data.allContentfulProject.edges
        console.log(posts)
        posts.forEach((post, index) => {
            const previous = index === 0 ? null : posts[index - 1].node
            const next = index === posts.length - 1 ? null : posts[index + 1].node
            
            createPage({
                path: `projects/${post.node.slug}`,
                component: contentfulComponent(),
                context: {
                    slug: post.node.slug,
                    previous: previous,
                    next: next,
                    index: index + 1,
                    length: posts.length
                }
            })
        })
    })
}