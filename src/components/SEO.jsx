import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

export default function SEO({ title, description }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {/* TODO: Update graph images */}
      {/* The Essential Meta tags for social media article: https://css-tricks.com/essential-meta-tags-social-media/ */}
      {/* Website on the Open Graph protocol: https://ogp.me/ */}
      {/* Test meta tags that leverage the Open Graph protocol */}
      {/* Test images have been borrowed as placeholders */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content="https://kyle-knaggs-personal-website.netlify.app/" />
      <meta property="og:image" content="http://static1.squarespace.com/static/5c7574443560c34b3b68682f/t/5cd4729908522907045f107c/1557426842694/social-sharing.png?format=1500w" />
      <meta property="og:image:width" content="1080" />
      <meta property="og:image:height" content="564" />
      {/* Twitter's meta tags which are similar to the Open Graph Protocol */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="http://static1.squarespace.com/static/5c7574443560c34b3b68682f/t/5cd4729908522907045f107c/1557426842694/social-sharing.png?format=1500w" />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
}

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
