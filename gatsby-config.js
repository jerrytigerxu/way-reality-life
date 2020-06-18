module.exports = {
  siteMetadata: {
    title: `Way Reality Life`,
    description: `A compilation of the many wonderful aspects of Christ and the church`,
    author: `jeretigerxu`,
    siteUrl: 'http://localhost:8000',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-remark',
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/blog`,
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-plugin-breadcrumb',
      options: {
        useAutoGen: true,
        exclude: [
          '/dev-404-page/',
          '/404/',
          '404.html',
          '/offline-plugin-app-shell-fallback/',
        ],
        trailingSlashes: true,
      }
    },
  ],
}
