import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import SocialSharingImg from '../assets/socialSharing.png';

export const query = graphql`
  query SEO {
    site {
      siteMetadata {
        url,
      }
    }
  }
`;

export default function SEO({ title, description }) {
  const { site } = useStaticQuery(query);
  const {
    siteMetadata: {
      url,
    },
  } = site;
  const socialSharingImage = `${url}${SocialSharingImg.substring(1)}`;

  // URL for testing Open Graph Protocol: https://developers.facebook.com/tools/debug
  // URL for testing Twitter Card Protocol: https://cards-dev.twitter.com/validator
  // Post that dictates that images must be 1500w x 1000h in order to work on WhatsApp:
  // https://forum.squarespace.com/topic/160133-my-template-does-not-enable-picture-preview-of-site-shared-on-whatsapp/
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {/* Open Graph Protocol */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={socialSharingImage} />
      <meta property="og:image:width" content="1500" />
      <meta property="og:image:height" content="1000" />
      {/* Twitter Card Protocol */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={socialSharingImage} />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
}

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
