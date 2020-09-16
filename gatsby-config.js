/* eslint-disable */
require("dotenv").config()

// for netlify robots to avoid Google thinking there's duplicate content and messing up the SEO
const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = "https://www.devgadgets.io",
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env
const isNetlifyProduction = NETLIFY_ENV === "production"
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL

module.exports = {
  siteMetadata: {
    title: "Dev Gadgets",
    description:
      "The #1 gadgets resource for developers and technology enthusiasts.",
    author: "@waldothedeveloper",
    copyright: `Copyright © 2020 Dev Gadgets. All rights reserved`,
    siteUrl: siteUrl,
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
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: "*" }],
          },
          "branch-deploy": {
            policy: [{ userAgent: "*", disallow: ["/"] }],
            sitemap: null,
            host: null,
          },
          "deploy-preview": {
            policy: [{ userAgent: "*", disallow: ["/"] }],
            sitemap: null,
            host: null,
          },
        },
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Inter"],
        },
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
      resolve: `gatsby-source-cloudinary`,
      options: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
        resourceType: `image`,
        prefix: `devgadgets_cloudinary/`,
        maxResults: 500,
      },
    },
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        queries: require("./src/utils/algolia-queries"),
      },
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint: process.env.MAILCHIMP_ENDPOINT,
        timeout: 3500,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_TRACKING_ID,
        head: false,
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
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "dev gadgets",
        short_name: "devgadgets",
        start_url: "/",
        background_color: "#16bdca",
        theme_color: "#16bdca",
        display: "minimal-ui",
        icon: "src/images/devgadgets-icon-black.png", // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-offline",
  ],
}
