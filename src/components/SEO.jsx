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
      <meta property="og:image" content="https://www.imdb.com/title/tt0117500/" />
      <meta property="og:url" content="https://ia.media-imdb.com/images/rock.jpg" />
      {/* Twitter's meta tags which are similar to the Open Graph Protocol */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content=" https://ia.media-imdb.com/images/rock.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
}

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
