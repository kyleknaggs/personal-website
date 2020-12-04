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
      {/* Image solution for WhatsApp suggested on: https://forum.squarespace.com/topic/160133-my-template-does-not-enable-picture-preview-of-site-shared-on-whatsapp/ */}
      <meta property="og:image" content="http://via.placeholder.com/1500x1000" />
      <meta property="og:image:width" content="1500" />
      <meta property="og:image:height" content="1000" />
      {/* Twitter's meta tags which are similar to the Open Graph Protocol */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="http://via.placeholder.com/1500x1000" />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
}

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
