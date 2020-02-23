require('dotenv').config({
  path: `.env`
})

module.exports = {
  siteMetadata: {
    title: `Freelance Front-end Web Services`,
    description: `Lets Help The World See Your Vision. Freelance Front-End Web Services from Development, Design, and Content Marketing based in Indianapolis, Indiana.`,
    author: `@AnthonyGayflor`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `njugwttfbc40`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.API_KEY,
      },
    },
    `@contentful/gatsby-transformer-contentful-richtext`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-transformer-remark`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
