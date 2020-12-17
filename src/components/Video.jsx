import React, { useState } from 'react';
import styled from 'styled-components';
import VideoPlaceholder from './VideoPlaceholder';
import FigCaption from './Text/FigCaption';
import { TEXT } from '../utility/constants';

const VideoWrapperDiv = styled.div`
  @media screen and (max-width: 1024px) {
    padding-top: 11vw;
  }
`;

// Well known CSS hack: https://css-tricks.com/aspect-ratio-boxes/
// Padding percentage values are calculated using an element's width
// The use of padding-top with a percentage creates an image that
// maintains a particular aspect ratio as the content resizes
const AspectRatioWrapperDiv = styled.div`
  padding-top: 56.26%; /* Maintains 9:16 aspect ratio */
  position: relative;
  overflow: hidden;
`;

const VideoIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
`;

export default function Video() {
  const {
    AFL_ONLINE_VIDEO_DESCRIPTION,
  } = TEXT;

  const [hasClickedPlay, setHasClickedPlay] = useState(false);

  function handlePlayClick() {
    setHasClickedPlay(true);
  }

  return (
    <figure>
      <VideoWrapperDiv>
        <AspectRatioWrapperDiv>
          {
            !hasClickedPlay ? (
              <VideoPlaceholder
                handlePlayClick={handlePlayClick}
              />
            ) : (
              // The autoplay value is passed to the iframe via the allow
              // attribute. This was done as passing this value in via
              // autoplay="true" does not autplay the video as expected
              <VideoIframe
                src="https://player.vimeo.com/video/455057785?app_id=122963&amp;wmode=opaque&amp;autoplay=1"
                title="aflOnline_applicationDemo"
                id="yui_3_17_2_1_1606395291091_76"
                allow="autoplay; fullscreen"
              />
            )
          }
        </AspectRatioWrapperDiv>
      </VideoWrapperDiv>
      <FigCaption text={AFL_ONLINE_VIDEO_DESCRIPTION} />
    </figure>
  );
}
