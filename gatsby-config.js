/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Your Gatsby Site`,
    description: `A Gatsby site pulling data from WordPress`,
    author: `@gatsbyjs`,
  },
  plugins: [
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        // Your WordPress GraphQL endpoint (replace with your own WordPress URL)
        url: `https://ashish.is-great.org/graphql`, // Make sure this URL is correct
      },
    },
  ],
}
