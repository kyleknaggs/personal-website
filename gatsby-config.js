/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    'gatsby-plugin-eslint',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: [
          'UA-185670686-1',
        ],
      },
    },
  ],
  siteMetadata: {
    title: 'Kyle Knaggs | Software Developer',
    description: 'A design-focused, detail-oriented software developer obsessed with making great user experiences a reality',
    url: 'https://kyleknaggs.com/',
  },
};
