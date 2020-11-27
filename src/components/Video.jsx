import React, { useState } from 'react';
import styled from 'styled-components';
import PlayIconImg from '../assets/playIcon.png';
import AflOnlinePlaceholderVideoImg from '../assets/aflOnlinePlaceholderVideoImg.png';

const AbsoluteWrapperDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;

const RelativeWrapperDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PlaceholderImg = styled.img`
  width: 100%;
`;

const PlayArrowDiv = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  position: absolute;
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

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
  const [hasClickedPlay, setHasClickedPlay] = useState(false);

  function handlePlayClick() {
    setHasClickedPlay(true);
  }

  const placeholderContent = (
    <AbsoluteWrapperDiv>
      <RelativeWrapperDiv>
        <PlaceholderImg
          src={AflOnlinePlaceholderVideoImg}
          alt=""
        />
        <PlayArrowDiv
          onClick={handlePlayClick}
        >
          <img src={PlayIconImg} alt="" />
        </PlayArrowDiv>
      </RelativeWrapperDiv>
    </AbsoluteWrapperDiv>
  );

  return (
    <VideoWrapperDiv>
      <AspectRatioWrapperDiv>
        {
          !hasClickedPlay ? (
            placeholderContent
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
  );
}
