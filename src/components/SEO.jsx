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

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {/* Image solution for WhatsApp suggested on: https://forum.squarespace.com/topic/160133-my-template-does-not-enable-picture-preview-of-site-shared-on-whatsapp/ */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content="https://kyle-knaggs-personal-website.netlify.app/" />
      {/* Test image urls with updated social sharing image */}
      <meta property="og:image" content={`${url}${SocialSharingImg.substring(1)}`} />
      <meta property="og:image:width" content="1500" />
      <meta property="og:image:height" content="1000" />
      {/* Twitter's meta tags which are similar to the Open Graph Protocol */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${url}${SocialSharingImg.substring(1)}`} />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
}

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
