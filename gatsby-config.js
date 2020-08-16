/* eslint-disable */

module.exports = {
  siteMetadata: {
    title: "Dev Gadgets",
    description:
      "The #1 gadgets resource for developers and technology enthusiasts.",
    author: "@waldothedeveloper",
    copyright: "Copyright © 2020 Dev Gadgets. All rights reserved",
    siteUrl: "https://devgadgets.io",
    keywords: [
      "Technology Gadgets",
      "Gadgets",
      "Programming",
      "Programming books",
      "Programming courses",
      "Software Engineer",
      "Web Developer",
    ],
  },
  plugins: [
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://waldolavaut.us10.list-manage.com/subscribe/post?u=22377aca679801284569b9bce&amp;id=5596b856f1",
        timeout: 3500,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: "UA-59759762-6",
      },
    },
    {
      resolve: "gatsby-plugin-eslint",
      env: {
        browser: true,
        node: true,
      },
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ["develop"],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".mdx", ".md"],
        defaultLayouts: {
          instructors: require.resolve(
            "./src/templates/instructorsTemplate.js"
          ),
          default: require.resolve("./src/templates/blogPostTemplate.js"),
        },
      },
    },
    "gatsby-remark-reading-time",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/content/posts/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Rubik"],
        },
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "dev gadgets",
        short_name: "devgadgets",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "src/images/devgadgets-icon-black.png", // This path is relative to the root of the site.
      },
    },
  ],
}
