const path = require("path")

module.exports = {
  siteMetadata: {
    title: `Dev Gadgets`,
    description: `The #1 gadgets resource for developers and technology enthusiasts.`,
    author: `@waldothedeveloper`,
    keywords: [
      `Technology Gadgets`,
      `Gadgets`,
      `Programming`,
      `Programming books`,
      `Programming courses`,
      `Software Engineer`,
      `Web Developer`,
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        defaultLayouts: {
          default: require.resolve(`./src/templates/blogPostTemplate.js`),
        },
      },
    },
    `gatsby-remark-reading-time`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/content/posts/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        google: {
          families: [`Rubik`],
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `dev gadgets`,
        short_name: `devgadgets`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/devgadgets-icon-black.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
