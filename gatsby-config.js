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
        // TODO: Confirm this Measurement ID works and remove if it does not.
        trackingIds: [
          'G-7LVDBJZ8E6',
        ],
      },
    },
  ],
  siteMetadata: {
    title: 'Kyle Knaggs | Software Developer',
    description: 'A Software Developer from Trinidad and Tobago obsessed with making great user experiences a reality.',
    url: 'https://kyleknaggs.com/',
  },
};
