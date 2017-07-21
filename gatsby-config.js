module.exports = {
  siteMetadata: {
    title: `Candid Co`,
    siteUrl: `https://www.candidco.com`,
  },
  plugins: [
    `gatsby-plugin-preact`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-nprogress`,
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `mizmzkx6bjh6`,
        accessToken: process.env.CONTENTFUL_API_TOKEN,
      },
    },
  ],
}
