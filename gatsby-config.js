module.exports = {
  siteMetadata: {
    title: `Candid Co`,
    siteUrl: `https://www.candidco.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-nprogress`,
    },
    {
      resolve: `gatsby-plugin-sitemap`
    },
  ],
}
